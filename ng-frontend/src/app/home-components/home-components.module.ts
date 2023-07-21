import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BedsideComponent } from './bedside/bedside.component';
import { KnowUsComponent } from './know-us/know-us.component';
import { EventsComponent } from './events/events.component';



@NgModule({
  declarations: [
    BedsideComponent,
    KnowUsComponent,
    EventsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeComponentsModule { }
