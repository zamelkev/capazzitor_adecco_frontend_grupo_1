import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';


import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearcherComponent } from './searcher/searcher.component';
import { SocialNetworksComponent } from './social-networks/social-networks.component';
import { RightMenuComponent } from './right-menu/right-menu.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SearcherComponent,
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
    SearcherComponent,
    SocialNetworksComponent,
    RightMenuComponent,
    LeftMenuComponent,
  ],
})
export class MainComponentsModule {}
