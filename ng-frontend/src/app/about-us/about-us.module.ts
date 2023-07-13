import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { FormationComponent } from './formation/formation.component';
import { CandidateServicesComponent } from './candidate-services/candidate-services.component';
import { CompanyServicesComponent } from './company-services/company-services.component';



@NgModule({
  declarations: [
    AboutUsComponent,
    FormationComponent,
    CandidateServicesComponent,
    CompanyServicesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AboutUsComponent,
    FormationComponent,
    CandidateServicesComponent,
    CompanyServicesComponent
  ]
})
export class AboutUsModule { }
