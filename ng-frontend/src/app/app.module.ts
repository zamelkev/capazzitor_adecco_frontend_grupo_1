import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Main
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Firebase services + environment module
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
// import { environment } from '../environments/environment';

// Forms
import { ReactiveFormsModule } from '@angular/forms';

// Services
import { AuthService } from './services/auth.service';
// import { AlertService } from './services/alert.service';
// import { UserService } from './services/user.service';

// Modules
import { AboutUsModule } from './about-us/about-us.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { MainComponentsModule } from './main-components/main-components.module';
import { ViewsModule } from './views/views.module';
import { environment } from '../environments/environment';
import { AccountModule } from './account/account.module';

// Firebase
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';

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
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AboutUsModule,
    DashboardModule,
    MainComponentsModule,
    ViewsModule,
    // environment,
    AccountModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [AuthService, { provide: FIREBASE_OPTIONS, useValue: environment.firebase }],
  bootstrap: [AppComponent]
})
export class AppModule { }
