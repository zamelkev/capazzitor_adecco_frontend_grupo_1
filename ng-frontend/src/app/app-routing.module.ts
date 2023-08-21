import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
// import { IsLoggedInGuard } from './services/guards/is-logged-in.guard';
import { HomeComponent } from './views/home/home.component';
import { SignInComponent } from './views/auth/sign-in/sign-in.component';
import { SignUpComponent } from './views/auth/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './views/auth/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './views/auth/verify-email/verify-email.component';
import { UseGuidesComponent } from './views/use-guides/use-guides.component';
import { ViewsModule } from './views/views.module';
import { CompanyDashboardComponent } from './main-components/dashboard/company-dashboard/company-dashboard.component';
import { HasRoleGuard } from './services/guards/has-role.guard';
import { IsLoggedInGuard } from './services/guards/is-logged-in.guard';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
    
  { path: 'dashboard', canLoad: [/*IsLoggedInGuard,*/HasRoleGuard], /*canActivate: [HasRoleGuard],*/
    data: {
      // allowedRoles: [
      //   user.isAdmin === true, 
      //   user.isCandidate === true, 
      //   user.isCompany === true]
    },
    component: DashboardComponent
  },
  { path: 'login', component: SignInComponent },
  { path: 'register', component: SignUpComponent },
  { path: 'forgot-password', /*canLoad: [IsLoggedInGuard],*/ component: ForgotPasswordComponent },
  { path: 'verify-emailaddress', component: VerifyEmailComponent },
  { path: 'use-guides', component: UseGuidesComponent },
  { path: 'company-dashboard', canLoad: [/*IsLoggedInGuard,*/ HasRoleGuard], /*canActivate: [HasRoleGuard],*/
    data: {
      // allowedRoles: [
      //   user.isAdmin === true, 
      //   user.isCandidate === true, 
      //   user.isCompany === true]
    },
    component: CompanyDashboardComponent },
  // { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
