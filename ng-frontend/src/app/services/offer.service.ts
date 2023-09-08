import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { initializeApp } from 'firebase/app';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc, getFirestore, getDocs, getDoc, QueryDocumentSnapshot, DocumentData, query, orderBy, where,
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
    const sortedUserRef = query(userRef, where("suscribedCandidate", "==", user.uid));
    return collectionData(sortedUserRef, { idField: 'uid' }) as Observable<any[]>;
  }

  GetOffersByCompany(user: User | Company | any): Observable<Offer[] | User[]> {
    const userRef = collection(this.firestore, 'offers');
    // const sortedUserRef = query(userRef, where("uid", "==", user.uid));
    return collectionData(userRef, { idField: 'uid' }) as Observable<any[]>;
  }

  DeleteOffer(user: User) {
    const userDocRef = doc(this.firestore, `offers/${user.uid}`);
    return deleteDoc(userDocRef);
  }

  async addOfferData(user: User | any, offer: Offer | any) {
    try {
      console.log(user.uid);
      const offerRef = collection(this.firestore, 'offers');
      let addedOffer;

      const offerData: Offer | any = {
        name: offer.name,
        company: user,
        contractType: offer.contractType,
        workingDay: offer.workingDay,
        shortDescription: offer.shortDescription,
        description: offer.description,
        offerDetails: offer.offerDetails,
        location: offer.location,
        priority: offer.priority,
        phone: offer.phone,
        email: offer.email,
        // subscribedCandidates: offer.subscribedCandidates = [user],
      };
      console.log('Offer data has probably been updated correctly');
      // return setDoc (offerRef, offerData, { merge: true });
      addedOffer = await addDoc (offerRef, offerData);

      } catch (e) {
        console.error('Error adding offer data: ', e);
      }
      return null;
    }
}
