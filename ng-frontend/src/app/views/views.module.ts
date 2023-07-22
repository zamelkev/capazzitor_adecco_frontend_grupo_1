import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CurrentNewsComponent } from './current-news/current-news.component';
import { OfferListComponent } from './offer-list/offer-list.component';
import { OfferFormComponent } from './offer-form/offer-form.component';
import { OfferDetailComponent } from './offer-detail/offer-detail.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CandidateServicesComponent } from './candidate-services/candidate-services.component';
import { CompanyServicesComponent } from './company-services/company-services.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FormationComponent } from './formation/formation.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { MainComponentsModule } from '../main-components/main-components.module';



@NgModule({
  declarations: [
    HomeComponent,
    CurrentNewsComponent,
    OfferListComponent,
    OfferFormComponent,
    OfferDetailComponent,
    AboutUsComponent,
    CandidateServicesComponent,
    CompanyServicesComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    FormationComponent,
    SignInComponent,
    SignUpComponent,
    VerifyEmailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MainComponentsModule
  ],
  exports: [
    HomeComponent,
    CurrentNewsComponent,
    OfferListComponent,
    OfferFormComponent,
    OfferDetailComponent,
    AboutUsComponent,
    CandidateServicesComponent,
    CompanyServicesComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    FormationComponent,
    SignInComponent,
    SignUpComponent,
    VerifyEmailComponent
  ]
})
export class ViewsModule { }
