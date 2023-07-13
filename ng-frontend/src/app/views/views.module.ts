import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PresentActualidadComponent } from './present-actualidad/present-actualidad.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CurrentNewsComponent } from './current-news/current-news.component';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    SignupComponent,
    PresentActualidadComponent,
    AboutUsComponent,
    CurrentNewsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ViewsModule { }
