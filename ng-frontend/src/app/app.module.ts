import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Firebase services + environment module
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';

// Auth service
import { AuthService } from './services/auth.service';
// Offer service
import { OfferService } from './services/offer.service';

// Main
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//import { FormControl } from '@angular/forms';

// import { environment } from '../environments/environment';

// Firebase
// import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
// import { provideAuth,getAuth } from '@angular/fire/auth';
// import { provideDatabase,getDatabase } from '@angular/fire/database';
// import { provideFirestore,getFirestore } from '@angular/fire/firestore';
// import { FIREBASE_OPTIONS } from '@angular/fire/compat';

//Angular material modules
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatChipsModule } from '@angular/material/chips';

//App modules
import { MainComponentsModule } from './main-components/main-components.module';
import { ViewsModule } from './views/views.module';
import { Firestore } from 'firebase/firestore';
// import { authTokeninterceptorProvider } from './services/interceptors/auth-token.interceptor';
//import { UsersModule } from './users/users.module';


export const firebaseConfig = {
  apiKey: "AIzaSyD5sMKznzYQst-vDhTbUDZKWrHPFn8Fm0U",
  authDomain: "portal-empleo-7f519.firebaseapp.com",
  databaseURL: "https://portal-empleo-7f519-default-rtdb.firebaseio.com",
  projectId: "portal-empleo-7f519",
  storageBucket: "portal-empleo-7f519.appspot.com",
  messagingSenderId: "700855171868",
  appId: "1:700855171868:web:33633e3bbe5a5d674bd8d9",
  measurementId: "G-F067FM1D9W"
};


@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    MainComponentsModule,
    ViewsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatBottomSheetModule,
    MatSelectModule,
    MatChipsModule,
    // AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    HttpClientModule,
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    // provideAuth(() => getAuth()),
    // provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore(initializeApp(firebaseConfig))),
    /*     UsersModule,
    //FormControl,
    BrowserModule,
    */
  ],
  providers: [
    AuthService,
    OfferService,
    AngularFirestore,
    { provide: FIREBASE_OPTIONS, useValue: firebaseConfig },
    { provide: AngularFireModule, useValue: firebaseConfig },
  // providers: [AuthService, { provide: FIREBASE_OPTIONS, useValue: environment.firebase }],
  ],
  // providers: [AuthService, { provide: FIREBASE_OPTIONS, useValue: environment.firebase }],
  bootstrap: [AppComponent],
})
export class AppModule {}