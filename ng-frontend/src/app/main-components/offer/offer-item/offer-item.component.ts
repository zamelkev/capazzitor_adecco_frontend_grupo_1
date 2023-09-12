import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/app/models/offer.model';

@Component({
  selector: 'app-offer-item',
  templateUrl: './offer-item.component.html',
  styleUrls: ['./offer-item.component.css'],
})
export class OfferItemComponent implements OnInit {
 // offerItem: any = {};
  offers: Offer[] = [];
  panelOpenState = true;

  constructor() {
   //this.offerItem = this.offerItem;
    this.offers = this.offers = [
      {
        title: 'Administrativo contable',
        id: 21875,
        city: {
          id: 20,
          value: 'Elche',
        },
        autCommunity: {
          id: 10,
          value: 'Comunidad Valenciana ',
        },
        company: 'QUICKTYPERS SL',
        contractType: 'Contrato indefinido',
        workingDay: 'Fulltime',
        salary: {
          currency: '€',
          value: 18000,
          grossNet: 'Brutos / ',
          period: 'año',
        },
        description:
          'Empresa internacional del sector educativo y de marketing, con sede en Elche (Alicante), busca incorporar de manera inmediata un/a ADMINISTRATIVO/A CONTABLE. Buscamos un perfil administrativo, preferiblemente con experiencia en facturación. Es necesario tener una buena disposición para trabajar en equipo de manera presencial en nuestra oficina de Elche.',
      },
      {
      },
    ];
   }

  ngOnInit(): void {}
}
