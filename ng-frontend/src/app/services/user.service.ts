import { User } from '../models/user.model';
import { Injectable, OnInit } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: Firestore) { }

  addUser(user: any) {
    const userRef = collection(this.firestore, 'users');
    return addDoc(userRef, user);
  }

  getUsers(): Observable<User[]> {
    const userRef = collection(this.firestore, 'users');
    return collectionData(userRef, { idField: 'uid' }) as Observable<User[]>;
  }

  deleteUser(user: User) {
    const placeDocRef = doc(this.firestore, `users/${user.uid}`);
    return deleteDoc(placeDocRef);
  }

}
