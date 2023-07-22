import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Firebase services + environment module
// import { AngularFireModule } from '@angular/fire/compat';
// import { AngularFireAuthModule } from '@angular/fire/compat/auth';
// import { AngularFireStorageModule } from '@angular/fire/compat/storage';
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
// import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
// Auth service
import { AuthService } from './services/auth.service';
// import { AlertService } from './services/alert.service';
import { UserService } from './services/user.service';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AboutUsModule } from './about-us/about-us.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { MainComponentsModule } from './main-components/main-components.module';
import { ViewsModule } from './views/views.module';
import { environment } from '../environments/environment';
import { AccountModule } from './account/account.module';
import { UsersModule } from './users/users.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

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
    UsersModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
