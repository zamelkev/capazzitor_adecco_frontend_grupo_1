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
        description: 'Contrato indefinido / Jornada fulltime / 18K',
      },
      {
        id: 1,
        name: 'Desarrollador frontend',
        description: 'Contrato temporal / Jornada fulltime / 25K',
      },
    ];
  }

  ngOnInit(): void {}
}
