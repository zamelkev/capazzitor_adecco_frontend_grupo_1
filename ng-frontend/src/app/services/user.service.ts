// import { Injectable } from '@angular/core';
// import { User } from '../models/user.model';
// import { Firestore, collection, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
// import { Observable } from 'rxjs';
// import { AuthService } from './auth.service';
// // import { app } from '../app.module';


// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {
  
//   users: User[] = [];
//   user: User | any = this.authService?.user$;

//   constructor(
//     private firestore: Firestore,
//     private authService: AuthService,) { }
  
//   addUser(user: User) {
//     const userRef = collection(this.firestore, 'users');
//     return addDoc(userRef, user);
//   }

//   getUserDataById(user: User) {
//     const userDocRef = doc(this.firestore, `users/${user.uid}`);
//     return userDocRef;
//   }

//   getUsers(): Observable<User[]> {
//     const userRef = collection(this.firestore, 'users');
//     return collectionData(userRef, { idField: 'uid' }) as Observable<User[]>;
//   }

//   deleteUser(user: User) {
//     const userDocRef = doc(this.firestore, `users/${user.uid}`);
//     return deleteDoc(userDocRef);
//   }

// }
