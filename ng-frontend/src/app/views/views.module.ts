import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainComponentsModule } from '../main-components/main-components.module';

import { MatButtonModule } from '@angular/material/button';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet'; 


import { HomeComponent } from './home/home.component';
// import { CandidateServicesComponent } from './candidate-services/candidate-services.component';
// import { CompanyServicesComponent } from './company-services/company-services.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { UseGuidesComponent } from './use-guides/use-guides.component';
import { OffersComponent } from './offers/offers.component';


@NgModule({
  declarations: [
    HomeComponent,
    // CandidateServicesComponent,
    // CompanyServicesComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    SignInComponent,
    SignUpComponent,
    VerifyEmailComponent,
    UseGuidesComponent,
    OffersComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MainComponentsModule,
    MatButtonModule,
    MatBottomSheetModule,
  ],
  exports: [
    HomeComponent,
    // CandidateServicesComponent,
    // CompanyServicesComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    SignInComponent,
    SignUpComponent,
    VerifyEmailComponent,
    UseGuidesComponent,
  ],
})
export class ViewsModule {}
