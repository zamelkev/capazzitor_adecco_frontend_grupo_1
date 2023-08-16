import { HttpClient } from '@angular/common/http';
import { Injectable, inject, NgZone } from '@angular/core';
import { User } from '../models/user.model'; 
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
// import firebase from ‘firebase/app’;
// import 'firebase/firestore'; 
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { BehaviorSubject, from, ignoreElements, map, Observable, of, switchMap, tap } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc, getFirestore, getDocs } from '@angular/fire/firestore';
import * as firebase from 'firebase/compat';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  appUser$:Observable<User[]>;
  userData!: User | any; // Save logged in user data
  private user = new BehaviorSubject<User | any>(null);
  user$: Observable<User> | any | null | undefined;
  firestore: Firestore = inject(Firestore);
  // isLoggedIn$: Observable<boolean> = this.user$.pipe(map(Boolean));
  
  constructor(
    private afAuth: AngularFireAuth, // Inject Firebase auth service
    private afs: AngularFirestore,  // Inject Firestore service
    private router: Router,
    private db: AngularFireDatabase,
    public  ngZone: NgZone, // NgZone service to remove outside scope warning
    private httpClient: HttpClient,
    private http: HttpClient,
    ) {
    
      const userCollection = collection(this.firestore, 'users');
      this.appUser$ = collectionData(userCollection);
      this.afAuth.authState.pipe(
        switchMap(user => {
          if (user) {
            return this.afs.doc<User>('users/${user.uid}').valueChanges()
          } else {
            return of(null)
          }
        }))
        .subscribe(user => {
          this.user.next(user)
        }
      )
    
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

      //// Get auth data, then get firestore user document || null
      // this.user$ = this.afAuth.authState.pipe(
      //   switchMap(user => {
      //   if (user) {
      //     return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
      //   } else {
      //     return Observable.apply(null);
      //   }
      // }));
      
      
  }


//////////////////////////////////////////////////////////
////////////////////// Auth Functions ///////////////////

// Sign in with email/password
  SignIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.SetUserData(result.user);
        this.afAuth.authState.subscribe((user) => {
          if (user) {
            this.router.navigate(['/dashboard']);
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
  
  updateUserData(user: User | any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/$(user.uid)`);
    const data: User | any = {
      uid: user.uid,
      email: user.email,
      roles: {
        reader: true,
      },
    }
    return userRef.set(data, {merge: true})
  }
  private checkAuthorization(user: User, allowedRoles: string[]) {
    if (!user) return false
    for (const role of allowedRoles) {
      if ( user.roles != null ) {
        return true
      }
      return false
    }
    return false
  }

  // Sign up with email/password
  SignUp(email: string, password: string, role:string) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.SendVerificationMail();        
        this.SetUserData(result.user);
        this.addUser(this.userData);
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
  ForgotPassword(passwordResetEmail: string) {
    return this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Mensaje de restauración de contraseña enviado, por favor, comprueba las bandejas de tu correo electrónico.');
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
  SetUserData(user: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      // password: user.password,
      roles: {
        admin: true,
        // candidate: true,
      },
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    })
    .catch((error) => {
      window.alert(error);
    })
  }


  // Sign out
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    });
  }

  //////////////////////////////////////////////////////////
  /////////// Abilities and Roles Authorization ///////////

  canRead(user: User): boolean {
    const allowed = ['admin', 'candidate', 'company']
    return this.checkAuthorization(user, allowed)
  }

  canEdit(user: User): boolean {
    const allowed = ['admin', 'candidate', 'company']
    return this.checkAuthorization(user, allowed)
  }

  canDelete(user: User): boolean {
    const allowed = ['admin']
    return this.checkAuthorization(user, allowed)
  }


  /////////////////////////////////////////////////////////
  ////////////////// User CRUD ///////////////////////////
  
  addUser(user: User) {
    const userRef = collection(this.firestore, 'users');
    return addDoc(userRef, user);
  }

  getUserDataById(user: User) {
    const userDocRef = doc(this.firestore, `users/${user.uid}`);
    return userDocRef;
  }

  getUsers(): Observable<User[]> {
    const userRef = collection(this.firestore, 'users');
    return collectionData(userRef, { idField: 'uid' }) as Observable<User[]>;
  }

  deleteUser(user: User) {
    const userDocRef = doc(this.firestore, `users/${user.uid}`);
    return deleteDoc(userDocRef);
  }

}