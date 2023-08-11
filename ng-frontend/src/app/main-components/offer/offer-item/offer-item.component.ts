import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer-item',
  templateUrl: './offer-item.component.html',
  styleUrls: ['./offer-item.component.css'],
})
export class OfferItemComponent implements OnInit {
 // offerItem: any = {};
  offers: any[] = [];
  panelOpenState = true;

  constructor() {
   //this.offerItem = this.offerItem;
    this.offers = this.offers = [
      {
        id: 1,
        name: 'Administrativo contable',
        heading: 'Contrato indefinido / Jornada fulltime / 18K',
        shortDescription:
          'Empresa internacional del sector educativo y de marketing, con sede en Elche (Alicante), busca incorporar de manera inmediata un/a ADMINISTRATIVO/A...',
      },
      {
        id: 2,
        name: 'Desarrollador frontend',
        heading: 'Contrato temporal / Jornada fulltime / 25K',
        shortDescription:
          'Actualmente, nos encontramos en búsqueda de un Programador Senior de FrontEnd con sólidos conocimientos en Angular para formar parte del equipo de...',
      },
    ];
  }

  ngOnInit(): void {}
}
