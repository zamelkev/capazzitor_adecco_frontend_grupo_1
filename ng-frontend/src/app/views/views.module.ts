import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainComponentsModule } from '../main-components/main-components.module';

import { HomeComponent } from './home/home.component';
import { CurrentNewsComponent } from './current-news/current-news.component';


@NgModule({
  declarations: [
    HomeComponent,
    CurrentNewsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MainComponentsModule
  ],
  exports: [
    HomeComponent,
    CurrentNewsComponent
  ]
})
export class ViewsModule { }
