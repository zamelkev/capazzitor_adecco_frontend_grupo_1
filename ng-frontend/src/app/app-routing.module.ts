import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentNewsComponent } from './views/current-news/current-news.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'current-news', component: CurrentNewsComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
