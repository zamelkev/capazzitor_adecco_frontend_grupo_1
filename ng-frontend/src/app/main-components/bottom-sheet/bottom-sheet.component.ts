import { Component } from '@angular/core';
//import { MatListModule } from '@angular/material/list';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { OfferDetailComponent } from '../../main-components/offer/offer-detail/offer-detail.component';
@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.css'],
})
export class BottomSheetComponent {
  
  constructor(private matBottomSheet: MatBottomSheet) {}

  openBottomSheet() {
    this.matBottomSheet.open(OfferDetailComponent,
      {
        data: {
          "title": "Administrativo contable",
          "id": 21875,
          "state": 1,
          "category": {
            "id": 1,
            "value": "Administración",
          },
          "subcategories": [
            {
              "id": 1,
              "value": "Contabilidad",
            }
          ],
          "creationDate": "25/11/2022",
          "updateDate": "02/12/2022",
          "city": {
            "id": 20,
            "value": "Elche",
          },
          "autCommunity": {
            "id": 10,
            "value": "Comunidad Valenciana ",
          },
          "country": {
            "id": 1,
            "value": "España",
          },
          "company": "QUICKTYPERS SL",
          "contractType": "Contrato indefinido",
          "workingDay": "Fulltime",
          "salary": {
            "currency": "€",
            "value": 18000,
            "grossNet": "Brutos / ",
            "period": "año"
          },
          "description": "Empresa internacional del sector educativo y de marketing, con sede en Elche (Alicante), busca incorporar de manera inmediata un/a ADMINISTRATIVO/A CONTABLE. Buscamos un perfil administrativo, preferiblemente con experiencia en facturación. Es necesario tener una buena disposición para trabajar en equipo de manera presencial en nuestra oficina de Elche.",
          "experienceMin": [
            {
              "years": "años",
              "value": 1,
            },
            {
              "months": "meses",
              "value": 6,
            }
          ],
          "studiesMin": {
            "id": 1,
            "value": "Universitarios",
          },
          "priority": "Incorporación inmediata",
          "applicants": 7,
        }
      }
    );
  }
}

