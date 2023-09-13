import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { initializeApp } from 'firebase/app';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc, getFirestore, getDocs, getDoc, QueryDocumentSnapshot, DocumentData, query, orderBy, where, getCountFromServer,
} from '@angular/fire/firestore';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { firebaseConfig } from '../app.module';
import { Candidate } from '../models/candidate.model';
import { Company } from '../models/company.model';
import { Offer } from '../models/offer.model';
import { User } from '../models/user.model';
import { AuthService } from './auth.service';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  user: User | any = this.authService.user$;
  app = initializeApp(firebaseConfig);
  db = getFirestore(this.app);

  constructor(
    private afs: AngularFirestore, // Inject Firestore service
    private router: Router,
    private firestore: Firestore,
    public  ngZone: NgZone, // NgZone service to remove outside scope warning
    private authService: AuthService,
  ) { }

  getOffers(): Observable<Offer[]> {
    const userRef = collection(this.firestore, 'offers');
    // const sortedUserRef = query(userRef, where("role", "==", "offer"));
    return collectionData(userRef, { idField: 'uid' }) as Observable<any[]>;
  }
  
  // getOffer(user: User | any): Observable<Offer[]> {
  //   const userRef = collection(this.firestore, 'offers');
  //   const sortedUserRef = query(userRef, where("correo", "==", user.email));
  //   return collectionData(sortedUserRef, { idField: 'uid' }) as Observable<any[]>;
  // }

  GetOffersByCandidate(user: User | Candidate | any): Observable<Offer[]> {
    const userRef = collection(this.firestore, 'offers');
    // const sortedUserRef = query(userRef, where("suscribedCandidate", "==", user.uid));
    return collectionData(userRef, { idField: 'uid' }) as Observable<any[]>;
  }

  GetOffersByCompany(user: User | Company | any): Observable<Offer[] | User[]> {
    const userRef = collection(this.firestore, 'offers');
    // const sortedUserRef = query(userRef, where("companyUid", "==", user.uid));
    return collectionData(userRef, { idField: 'uid' }) as Observable<any[]>;
  }

  DeleteOffer(offerId: number) {
    const userDocRef = doc(this.firestore, `offers/${offerId}`);
    return deleteDoc(userDocRef);
  }

  async addOfferData(user: User | any, offer: Offer | any) {
    try {
      console.log(user.uid);
      const offerRef = collection(this.firestore, 'offers');
      const offersSnapshot = await getCountFromServer(offerRef);
      let offersCount= offersSnapshot.data().count;
      let offerIdAux = offersCount ++;
      let offerId = `${offer.company}_${offerIdAux}`;

      let addedOffer;

      const offerData: Offer | User | any = {
        title: offer.title,
        id: offerId,
        state: offer.state,
        category: offer.category,
        subcategories: offer.subcategories,
        creationDate: offer.creationDate,
        updateDate: offer.updateDate,
        salaryRank: offer.salaryRank,
        city: offer.city,
        country: offer.country,
        company: user.displayName,
        companyUid: user.uid,
        email: user.email,
        contractType: offer.contractType,
        workingDay: offer.workingDay,
        description: offer.description,
        experienceMin: offer.experienceMin,
        studiesMin: offer.studiesMin,
        priority: offer.priority,
        applicants: offer.applicants = [user],
      };
      console.log('Offer data has probably been updated correctly');
      // return setDoc (offerRef, offerData, { merge: true });
      addedOffer = await addDoc (offerRef, offerData);
      console.log(addedOffer);

      } catch (e) {
        console.error('Error adding offer data: ', e);
      }
      return null;
    }
}
