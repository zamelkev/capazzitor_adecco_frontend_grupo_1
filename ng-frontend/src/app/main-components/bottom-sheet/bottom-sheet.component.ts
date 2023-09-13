import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
//import { OfferDetailComponent } from '../../main-components/offer/offer-detail/offer-detail.component';
import { OfferFiltersComponent } from '../offer/offer-filters/offer-filters.component';
@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.css'],
})
export class BottomSheetComponent {
  
  constructor(private matBottomSheet: MatBottomSheet) {}

  openFiltersSheet() {
    this.matBottomSheet.open(OfferFiltersComponent, {
      data: {
      "contractType": {
        "title": "Tipo de contrato",
        "values": [
          "Jornada completa",
          "Indefinido",
          "Temporal",
          "Media jornada",
          "Beca / Prácticas",
          "Autónomo"
        ],
      },
      "localization": {
        "title": "Localización",
        "values": [],
      },
      "creationDate": {
        "title": "Fecha de publicación",
        "values": [],
      },
      "category": {
        "title": "Sector",
        "values": [],
      },
      "studiesLevel": {
        "title": "Nivel formativo",
        "values": [],
      },
      "estimatedSalary": {
        "title": "Salario estimado",
        "values": [],
      },
      }
    });
  }
}

