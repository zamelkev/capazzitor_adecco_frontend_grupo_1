import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';



import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearcherComponent } from './searcher/searcher.component';
import { SocialNetworksComponent } from './social-networks/social-networks.component';
import { RightMenuComponent } from './right-menu/right-menu.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { OfferListComponent } from './offer-list/offer-list.component';
import { OfferFormComponent } from './offer-form/offer-form.component';
import { OfferDetailComponent } from '../main-components/offer-detail/offer-detail.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';





@NgModule({
  declarations: [
    AutocompleteComponent,
    HeaderComponent,
    FooterComponent,
    SearcherComponent,
    SocialNetworksComponent,
    RightMenuComponent,
    LeftMenuComponent,
    OfferListComponent,
    OfferFormComponent,
    OfferDetailComponent,
    SuggestionsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  exports: [
    AutocompleteComponent,
    HeaderComponent,
    FooterComponent,
    SearcherComponent,
    SocialNetworksComponent,
    RightMenuComponent,
    LeftMenuComponent,
    OfferListComponent,
    OfferFormComponent,
    OfferDetailComponent,
    SuggestionsComponent,
  ],
})
export class MainComponentsModule {}
