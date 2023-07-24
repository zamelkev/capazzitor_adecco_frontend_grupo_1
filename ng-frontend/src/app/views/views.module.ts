import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CurrentNewsComponent } from './current-news/current-news.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    CurrentNewsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LoginComponent,
    SignupComponent,
    CurrentNewsComponent
  ]
})
export class ViewsModule { }
