import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components Import
import { AboutUsComponent } from './about-us/about-us/about-us.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { CandidateDashboardComponent } from './dashboard/candidate-dashboard/candidate-dashboard.component';
import { CompanyDashboardComponent } from './dashboard/company-dashboard/company-dashboard.component';
import { CurrentNewsComponent } from './views/current-news/current-news.component';
import { HomeComponent } from './views/home/home.component';
import { SignInComponent } from './account/sign-in/sign-in.component';
import { SignUpComponent } from './account/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './account/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './account/verify-email/verify-email.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'currentnews', component: CurrentNewsComponent },
  
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'candidate-dashboard', component: CandidateDashboardComponent },
  { path: 'company-dashboard', component: CompanyDashboardComponent },

  { path: 'signin', component: SignInComponent },
  { path: 'register', component: SignUpComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-emailaddress', component: VerifyEmailComponent },
  
  // { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
