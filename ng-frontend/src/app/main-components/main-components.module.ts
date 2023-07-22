import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';


import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OfferDetailComponent } from './offer-detail/offer-detail.component';
import { OfferFormComponent } from './offer-form/offer-form.component';
import { SearcherComponent } from './searcher/searcher.component';
import { OfferListComponent } from './offer-list/offer-list.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { CandidateFormComponent } from './candidate-form/candidate-form.component';
import { CandidateDetailComponent } from './candidate-detail/candidate-detail.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { CompanyFormComponent } from './company-form/company-form.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { SocialNetworksComponent } from './social-networks/social-networks.component';
import { RightMenuComponent } from './right-menu/right-menu.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    OfferDetailComponent,
    OfferFormComponent,
    SearcherComponent,
    OfferListComponent,
    CandidateListComponent,
    CandidateFormComponent,
    CandidateDetailComponent,
    CompanyDetailComponent,
    CompanyFormComponent,
    CompanyListComponent,
    SocialNetworksComponent,
    RightMenuComponent,
    LeftMenuComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    OfferDetailComponent,
    OfferFormComponent,
    SearcherComponent,
    OfferListComponent,
    CandidateListComponent,
    CandidateFormComponent,
    CandidateDetailComponent,
    CompanyDetailComponent,
    CompanyFormComponent,
    CompanyListComponent,
    SocialNetworksComponent,
    RightMenuComponent,
    LeftMenuComponent,
  ],
})
export class MainComponentsModule {}
