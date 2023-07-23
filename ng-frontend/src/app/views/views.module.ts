import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CurrentNewsComponent } from './current-news/current-news.component';
import { CandidateServicesComponent } from './candidate-services/candidate-services.component';
import { CompanyServicesComponent } from './company-services/company-services.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FormationComponent } from './formation/formation.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { MainComponentsModule } from '../main-components/main-components.module';
import { UseGuidesComponent } from './use-guides/use-guides.component';



@NgModule({
  declarations: [
    HomeComponent,
    CurrentNewsComponent,
    CandidateServicesComponent,
    CompanyServicesComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    FormationComponent,
    SignInComponent,
    SignUpComponent,
    VerifyEmailComponent,
    UseGuidesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MainComponentsModule
  ],
  exports: [
    HomeComponent,
    CurrentNewsComponent,
    CandidateServicesComponent,
    CompanyServicesComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    FormationComponent,
    SignInComponent,
    SignUpComponent,
    VerifyEmailComponent,
    UseGuidesComponent
  ]
})
export class ViewsModule { }
