import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CandidateDashboardComponent } from './candidate-dashboard/candidate-dashboard.component';
import { CompanyDashboardComponent } from './company-dashboard/company-dashboard.component';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    CandidateDashboardComponent,
    CompanyDashboardComponent
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
