import { HttpClient } from '@angular/common/http';
import { Injectable, inject, NgZone } from '@angular/core';
import { User, UserWithToken } from '../models/user.model';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { initializeApp } from "firebase/app";
// import firebase from ‘firebase/app’;
// import 'firebase/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { BehaviorSubject, from, defer, ignoreElements, map, Observable, ObservableInput, of, switchMap, tap, } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc, getFirestore, getDocs, getDoc, QueryDocumentSnapshot, DocumentData, query, orderBy, where,
} from '@angular/fire/firestore';
import * as firebase from 'firebase/compat';
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { firebaseConfig } from '../app.module';
import { Company } from '../models/company.model';
import { setDoc } from 'firebase/firestore';
import { Candidate } from '../models/candidate.model';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  userData!: any; // Save logged in user data
  private user = new BehaviorSubject<User | null>(null /*|| JSON.parse(localStorage.getItem('user')!)*/);
  user$ = this.user.asObservable();
  // userData!: Observable<User | any> | User; // Save logged in user data
  // private user = new BehaviorSubject<User | any>(null);
  // private user:User|Observable<any>|any = null;
  // user$: User | any | null = this.user;
  // user$ = this.user.asObservable();
  error: boolean = false;
  isLoggedIn$: Observable<boolean> = this.user$.pipe(map(Boolean));
  // Initialize Firebase
  app = initializeApp(firebaseConfig);
  db = getFirestore(this.app);

  constructor(
    private afAuth: AngularFireAuth, // Inject Firebase auth service
    private afs: AngularFirestore, // Inject Firestore service
    private router: Router,
    private firestore: Firestore,
    public  ngZone: NgZone, // NgZone service to remove outside scope warning
    private httpClient: HttpClient,
    private http: HttpClient,
    private formBuilder: FormBuilder
  ) {
    // this.user$ = this.user;
      // this.isLoggedIn$ = this.user$.pipe(map(Boolean));
      // this.afAuth.authState
      //   .pipe(
      //     switchMap((user) => {
      //       if (user) {
      //         return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
      //       } else {
      //         return of(null);
      //       }
      //     })
      // )
      // .subscribe((user) => {
      //   this.user.next(user);
      //   if (user) {
      //     this.userData = user;
      //     localStorage.setItem('user', JSON.stringify(this.userData));
      //     JSON.parse(localStorage.getItem('user')!);
      //   } else {
      //     localStorage.setItem('user', 'null');
      //     JSON.parse(localStorage.getItem('user')!);
      //   }
      // });
      
      // Get auth data, then get firestore user document || null
      // this.user$ = this.afAuth.authState.pipe(
      //   switchMap(user => {
      //       if (user) {
      //           return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
      //       } else {
      //           return of(null);
      //       }
      //   })
      // );

      /* Saving user data in localstorage when 
        logged in and setting up null when logged out */
      this.afAuth.authState.subscribe((user) => {
        if (user) {
          this.userData = user;
          localStorage.setItem('user', JSON.stringify(this.userData));
          JSON.parse(localStorage.getItem('user')!);
        } else {
          localStorage.setItem('user', 'null');
          JSON.parse(localStorage.getItem('user')!);
        }
      });
  
  }

  // ngOnInit() {
  //   this.signupForm = this.formBuilder.group({
  //     email: ['', Validators.required],
  //     password: ['', Validators.required]
  //   });
  // }

  // convenience getter for easy access to form fields
  // get f() { return this.signupForm.controls; }

  //////////////////////////////////////////////////////////
  ////////////////////// Auth Functions ///////////////////

  
  // Sign in with email/password
  SignIn(user: User | any) {
    let email: string = user.email;
    let password: string = user.password;

    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then(async (result) => {
        user.uid = result.user?.uid;
        const userRef = doc( this.firestore, `users/${user.uid}` );
        const userSnap = await getDoc(userRef);
        let userData: User | any = userSnap.data() as User | any;
        // console.log(userData);
        user = userData;
        this.userData = userData;
        this.checkAuthorization(user);
        this.afAuth.authState.subscribe((user) => {
          if (user) {
              // localStorage.setItem('user', JSON.stringify(userData));
              // console.log('Data from local storage: ');
              // JSON.parse(localStorage.getItem('user')!);
              this.router.navigate(['/dashboard']);
            } else { 
            // localStorage.setItem('user', 'null');
            // JSON.parse(localStorage.getItem('user')!);
            this.router.navigate(['/login']); 
          }
        });
      })
      .catch((error) => {
        window.alert(error.message);
      });
    }

  // Sign in with Google
  // googleLogin() {
  //   const provider = new firebase.auth.GoogleAuthProvider()
  //   return this.oAuthLogin(provider);
  // }

  // private oAuthLogin(provider) {
    //   return this.afAuth.auth.signInWithPopup(provider)
    //     .then((Credential) => {
      //       this.updateUserData(Credential.user)
  //     })
  // }

  private checkAuthorization(user: User/*, allowedRoles: string[]*/) {
    if (!user) return false;
    // for (const role of allowedRoles) {
      if (user.role === 'admin') {
        return true;
      } else if (user.role === 'candidate') {
        return true;
      } else if (user.role === 'company') {
        return true;
      }
      return false;
      // }
      return false;
    }
    
    // Sign up with email/password
    SignUp(user: User | any) {
      let email: string | any = user.email;
      let password: string | any = user.password;
      console.log(user.uid);
      
      return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.SendVerificationMail();
        this.SetUserData(result, user);
        console.log(user.role);
        if (user.role === 'company') {
        this.InitCompanyData(result, user);
        } else if (user.role === 'candidate') {
        this.InitCandidateData(result, user);
        } else {
          console.log("User's role reading has failed")
        }
      })
      .catch((error) => {
        window.alert(error.message);
      });
    }
          
    // Send email verfificaiton when new user sign up
    SendVerificationMail() {
      return this.afAuth.currentUser
      .then((u: any) => u.sendEmailVerification())
      .then(() => {
        this.router.navigate(['verify-emailaddress']);
      });
    }
          
    // Reset Forggot password
    ForgotPassword(user: User /*passwordResetEmail: string*/) {
      let passwordResetEmail: any = user.email;
      return this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert(
          'Mensaje de restauración de contraseña enviado, por favor, comprueba las bandejas de tu correo electrónico.'
          );
        })
        .catch((error) => {
          window.alert(error);
        });
      }
      
      // Returns true when user is looged in and email is verified
      get isLoggedIn(): boolean {
        const user = JSON.parse(localStorage.getItem('user')!);
        return user !== null && user.emailVerified !== false ? true : false;
      }
      
      /* Setting up user data when sign in with username/password, 
      sign up with username/password and sign in with social auth  
      provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
      SetUserData(result: any, user: User | any) {
        console.log(result.user.uid);
        const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${result.user.uid}`
    );
    let userRole: string = user.role || null;
    let photoURL: string | any = user.photoURL || null;

    const userData: any | User = {
      email: user.email,
      displayName: user.displayName,
      role: userRole,
      photoURL: photoURL,
      emailVerified: result.user.emailVerified,
      uid: result.user.uid,
    };
    return userRef
      .set(userData, {
        merge: true,
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  // Sign out
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.userData = {};
      this.router.navigate(['login']);
    });
  }

  //////////////////////////////////////////////////////////
  /////////// Abilities and Roles Authorization ///////////

  // canRead(user: User): boolean {
  //   const allowed = ['admin', 'candidate', 'company']
  //   return this.checkAuthorization(user, allowed)
  // }

  // canEdit(user: User): boolean {
  //   const allowed = ['admin', 'candidate', 'company']
  //   return this.checkAuthorization(user, allowed)
  // }

  // canDelete(user: User): boolean {
  //   const allowed = ['admin']
  //   return this.checkAuthorization(user, allowed)
  // }

  /////////////////////////////////////////////////////////
  ////////////////// User CRUD ///////////////////////////

  AddUser(result: any, user: User | any) {
    try {
      const userRef = collection(this.firestore, 'users');

      user.password = '' || null;
      user.photoURL = user.photoURL || null;
      user.uid = result.user.uid || null;
      user.emailVerified = result.user.emailVerified || null;

      return addDoc(userRef, user);
    } catch (e) {
      console.error('Error adding user: ', e);
    }
    return null;
  }

  InitCompanyData(result: any, user: User | Company | any) {
    try {
    const companyRef = collection(this.firestore, 'companies');
        
    user.password = '' || null;
    user.photoURL = user.photoURL || null;
    user.uid = result.user.uid || null;
    user.nombreSocial = user.displayName;
    user.email = result.user.email;
    user.emailVerified = result.user.emailVerified;

    return addDoc(companyRef, user);
    } catch (e) {
      console.error('Error adding company data init: ', e);
    }
    return null;
  }

  InitCandidateData(result: any, user: User | Candidate | any) {
    try {
    const companyRef = collection(this.firestore, 'candidates');
    
    user.password = '' || null;
    user.photoURL = user.photoURL || null;
    user.uid = result.user.uid || null;
    user.nombre = user.displayName;
    user.email = result.user.email;

    return addDoc(companyRef, user);
    } catch (e) {
      console.error('Error adding candidate data init: ', e);
    }
    return null;
  }

  // Getting user data from firestore
  async GetUserData(result: any, user: User | any) {
    const userRef = doc( this.firestore, `users/${result.uid}` );
    const userSnap = await getDoc(userRef);

    return userSnap.data() as User | any;
  }

  getUsers(): Observable<User[]> {
    const userRef = collection(this.firestore, 'users');
    return collectionData(userRef, { idField: 'uid' }) as Observable<User[]>;
  }
  
  getUser(user: User) {
    const userDocRef = doc(this.firestore, `users/${user.uid}`);
    return getDoc(userDocRef);
  }

  deleteUser(user: User) {
    const userDocRef = doc(this.firestore, `users/${user.uid}`);
    return deleteDoc(userDocRef);
  }

  getCompanies(): Observable<Company[] | User[]> {
    const userRef = collection(this.firestore, 'companies');
    const sortedUserRef = query(userRef, where("role", "==", "company"));
    return collectionData(userRef, { idField: 'uid' }) as Observable<any[]>;
  }

  addCompanyData(user: User | any, company: Company | any) {
    try {
      console.log(user.uid);
      const companyRef = collection(this.firestore, 'companies');
      const sortedCompanyRef:Company | any = query(companyRef, where("email", "==", user.email));
      console.log('Sorted Company Ref:');
      const objectiveCompanyData:Company | any = collectionData(sortedCompanyRef);
      console.log(objectiveCompanyData);
      console.log(objectiveCompanyData.uid);
      const companyDocRef = doc(this.firestore, `companies/${user.uid}`);

      const userCompanyData: Company | any = {
        uid: user.uid,
        nombreSocial: user.displayName,
        nombreFiscal: company.nombreFiscal,
        cif: company.cif,
        correo: user.email,
        telefono: company.telefono,
        direcciones: company.direcciones,
        sector: company.sector,
        estado: company.estado,
        // ofertas: company.ofertas,
        numeroEmpleados: company.numeroEmpleados,
        proyeccion: company.proyeccion,
      };
      console.log('Company data has probably been updated correctly');
      return setDoc (companyDocRef, userCompanyData, { merge: true });

      } catch (e) {
        console.error('Error adding company data: ', e);
      }
      return null;
    }

    updateUserData(user: User | any) {
      const userRef: AngularFirestoreDocument<any> =
      this.afs.doc(`users/$(user.uid)`);
      const data: User | any = {
        uid: user.uid,
        email: user.email,
        role: {
          // reader: true,
        },
      };
      return userRef.set(data, { merge: true });
    }

  getCompany(user: User | any): Observable<Company[] | User[]> {
    const userRef = collection(this.firestore, 'companies');
    const sortedUserRef = query(userRef, where("correo", "==", user.email));
    return collectionData(sortedUserRef, { idField: 'uid' }) as Observable<any[]>;
  }

  // getCompany(user: User | any) {
  //   const companyDocRef = doc(this.firestore, `companies/${user.uid}`);
  //   return getDoc(companyDocRef);
  // }

  getCandidates(): Observable<Company[] | User[]> {
    const userRef = collection(this.firestore, 'candidates');
    const sortedUserRef = query(userRef, where("role", "==", "company"));
    return collectionData(userRef, { idField: 'uid' }) as Observable<any[]>;
  }

  getCandidate(user: User | any): Observable<Company[] | User[]> {
    const userRef = collection(this.firestore, 'candidates');
    const sortedUserRef = query(userRef, where("email", "==", user.email));
    return collectionData(userRef, { idField: 'uid' }) as Observable<any[]>;
  }

}
