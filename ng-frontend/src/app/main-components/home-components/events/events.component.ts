import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {

  events: any[] = []
  panelOpenState = true;

  constructor() {
    this.events = this.events = [

    ]
  }
}

// Fecha, Localización, Autor, Título y Descripción: Datos para Json