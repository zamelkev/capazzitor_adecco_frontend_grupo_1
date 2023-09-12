import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Angular material modules
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet'; 
import { MAT_BOTTOM_SHEET_DEFAULT_OPTIONS } from '@angular/material/bottom-sheet';

//App components
import { HeaderComponent } from './home-components/header/header.component';
import { FooterComponent } from './home-components/footer/footer.component';
import { SearcherComponent } from './home-components/searcher/searcher.component';
import { SocialNetworksComponent } from './social-networks/social-networks.component';
import { OfferListComponent } from './offer/offer-list/offer-list.component';
import { OfferFormComponent } from './offer/offer-form/offer-form.component';
import { OfferDetailComponent } from './offer/offer-detail/offer-detail.component';
import { SuggestionsComponent } from './home-components/suggestions/suggestions.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { ListComponent } from './list/list.component';
import { SuggestCardComponent } from './suggest-card/suggest-card.component';
import { MeetUsComponent } from './home-components/meet-us/meet-us.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { TeamComponent } from './team/team.component';
import { EventsComponent } from './home-components/events/events.component';
import { NewsComponent } from './news/news.component';
import { NowadaysComponent } from './nowadays/nowadays.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { CandidateDashboardComponent } from './dashboard/candidate-dashboard/candidate-dashboard.component';
import { CompanyDashboardComponent } from './dashboard/company-dashboard/company-dashboard.component';
import { BedsideComponent } from './home-components/bedside/bedside.component';
import { OfferItemComponent } from './offer/offer-item/offer-item.component';
import { OfferItemListAdminComponent } from './offer/offer-item-list-admin/offer-item-list-admin.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { CandidateDetailComponent } from './cadidate/candidate-detail/candidate-detail.component';
import { CandidateFormComponent } from './cadidate/candidate-form/candidate-form.component';
import { CandidateListComponent } from './cadidate/candidate-list/candidate-list.component';
import { CompanyDetailComponent } from './company/company-detail/company-detail.component';
import { CompanyFormComponent } from './company/company-form/company-form.component';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { CompanyListAdminComponent } from './company/company-list-admin/company-list-admin.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserProfileComponent } from './dashboard/user-profile/user-profile.component';
import { OffersComponent } from '../views/offers/offers.component';






@NgModule({
  declarations: [
    AutocompleteComponent,
    HeaderComponent,
    FooterComponent,
    SearcherComponent,
    SocialNetworksComponent,
    OfferListComponent,
    OfferFormComponent,
    OfferDetailComponent,
    SuggestionsComponent,
    ListComponent,
    SuggestCardComponent,
    MeetUsComponent,
    OurServicesComponent,
    TeamComponent,
    EventsComponent,
    NewsComponent,
    NowadaysComponent,
    AdminDashboardComponent,
    CandidateDashboardComponent,
    CompanyDashboardComponent,
    BedsideComponent,
    OfferItemComponent,
    OfferItemListAdminComponent,
    BottomSheetComponent,
    CandidateDetailComponent,
    CandidateFormComponent,
    CandidateListComponent,
    CompanyDetailComponent,
    CompanyFormComponent,
    CompanyListComponent,
    CompanyListAdminComponent,
    UserListComponent,
    UserFormComponent,
    UserDetailComponent,
    UserProfileComponent,
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
    MatListModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatBottomSheetModule,
  ],
  exports: [
    AutocompleteComponent,
    HeaderComponent,
    FooterComponent,
    SearcherComponent,
    SocialNetworksComponent,
    OfferListComponent,
    OfferFormComponent,
    OfferDetailComponent,
    SuggestionsComponent,
    ListComponent,
    SuggestCardComponent,
    MeetUsComponent,
    OurServicesComponent,
    TeamComponent,
    EventsComponent,
    NewsComponent,
    NowadaysComponent,
    AdminDashboardComponent,
    CandidateDashboardComponent,
    CompanyDashboardComponent,
    BedsideComponent,
    OfferItemComponent,
    OfferItemListAdminComponent,
    BottomSheetComponent,
    CompanyDetailComponent,
    CompanyFormComponent,
    CompanyListComponent,
    CompanyListAdminComponent
  ],
  providers: [
    CandidateDetailComponent,
    CandidateFormComponent,
    CandidateListComponent,
    CompanyDetailComponent,
    CompanyFormComponent,
    CompanyListComponent,
    UserListComponent,
    UserFormComponent,
    UserDetailComponent
  ],
})
export class MainComponentsModule {}
