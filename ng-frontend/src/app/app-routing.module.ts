import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us/about-us.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { CandidateDashboardComponent } from './dashboard/candidate-dashboard/candidate-dashboard.component';
import { CompanyDashboardComponent } from './dashboard/company-dashboard/company-dashboard.component';
import { CurrentNewsComponent } from './views/current-news/current-news.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'current-news', component: CurrentNewsComponent },
  
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'candidate-dashboard', component: CandidateDashboardComponent },
  { path: 'company-dashboard', component: CompanyDashboardComponent },
  
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
