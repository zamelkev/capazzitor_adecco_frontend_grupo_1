import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { IsLoggedInGuard } from './services/guards/is-logged-in.guard';
import { HomeComponent } from './views/home/home.component';
import { SignInComponent } from './views/sign-in/sign-in.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './views/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './views/verify-email/verify-email.component';
import { UseGuidesComponent } from './views/use-guides/use-guides.component';
import { ViewsModule } from './views/views.module';

const routes: Routes = [
  { path: '', /*canLoad: [IsLoggedInGuard],*/ component: HomeComponent },
  { path: 'home', component: HomeComponent },
    
  { path: 'dashboard', canLoad: [IsLoggedInGuard] ,/*canActivate: [IsLoggedInGuard],*/ component: DashboardComponent },
  
  { path: 'login', component: SignInComponent },
  { path: 'register', component: SignUpComponent },
  { path: 'forgot-password', /*canLoad: [IsLoggedInGuard],*/ component: ForgotPasswordComponent },
  { path: 'verify-emailaddress', component: VerifyEmailComponent },
  { path: 'use-guides', component: UseGuidesComponent },
  // { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
