import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us/about-us.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { CandidateDashboardComponent } from './dashboard/candidate-dashboard/candidate-dashboard.component';
import { CompanyDashboardComponent } from './dashboard/company-dashboard/company-dashboard.component';
import { CurrentNewsComponent } from './views/current-news/current-news.component';

import { LoginComponent } from './views/login/login.component';
import { SignupComponent } from './views/signup/signup.component';

const routes: Routes = [
  { path: 'about-us', component: AboutUsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'candidate-dashboard', component: CandidateDashboardComponent },
  { path: 'company-dashboard', component: CompanyDashboardComponent },
  { path: 'current-news', component: CurrentNewsComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
