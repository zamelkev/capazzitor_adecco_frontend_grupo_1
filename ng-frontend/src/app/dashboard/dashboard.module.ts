import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CandidateDashboardComponent } from './candidate-dashboard/candidate-dashboard.component';
import { CompanyDashboardComponent } from './company-dashboard/company-dashboard.component';
import { User } from '../models/user.model';
import { user } from '@angular/fire/auth';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    CandidateDashboardComponent,
    CompanyDashboardComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AdminDashboardComponent,
    CandidateDashboardComponent,
    CompanyDashboardComponent
  ]
})
export class DashboardModule { }
