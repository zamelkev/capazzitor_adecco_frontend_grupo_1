import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CurrentNewsComponent } from './current-news/current-news.component';
import { OfferListComponent } from './offer-list/offer-list.component';
import { OfferFormComponent } from './offer-form/offer-form.component';
import { OfferDetailComponent } from './offer-detail/offer-detail.component';



@NgModule({
  declarations: [
    HomeComponent,
    CurrentNewsComponent,
    OfferListComponent,
    OfferFormComponent,
    OfferDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomeComponent,
    CurrentNewsComponent
  ]
})
export class ViewsModule { }
