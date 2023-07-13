import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CurrentNewsComponent } from './current-news/current-news.component';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    SignupComponent,
    CurrentNewsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    LoginComponent,
    SignupComponent,
    CurrentNewsComponent
  ]
})
export class ViewsModule { }
