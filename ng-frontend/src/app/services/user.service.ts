import {
  CollectionReference,
  DocumentData,
  collection,
} from '@firebase/firestore';

import { collectionData, Firestore } from '@angular/fire/firestore';
import { Injectable, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersCollection: CollectionReference<DocumentData>;

  constructor(private readonly firestore: Firestore) {
    this.usersCollection = collection(this.firestore, 'users');
  }

  getAll() {
    return collectionData(this.usersCollection, {
      idField: 'id',
    }) as Observable<User[]>;
  }

}
