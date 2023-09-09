import { Component, OnInit, Inject } from '@angular/core';
import { Offer } from 'src/app/models/offer.model';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-offer-detail',
  templateUrl: './offer-detail.component.html',
  styleUrls: ['./offer-detail.component.css'],
})
/*
export class Offer {
  title?: string;
  id?: number;
  state?: number;
  category?: {
    id?: number;
    value?: string;
  };
  subcategories?: [
    {
      id?: number;
      value?: string;
    }
  ];
  creationDate?: string;
  updateDate?: string;
  city?: {
    id?: number;
    value?: string;
  };
  country?: {
    id?: number;
    value?: string;
  };
  company?: string;
  contractType?: string;
  workingDay?: string;
  description?: string;
  experienceMin?: {
    id: number;
    value: string;
  };
  studiesMin?: {
    id?: number;
    value: string;
  };
  priority?: string;
  applicants?: number;
} 

 */
export class OfferDetailComponent implements OnInit {
  offerItem: Offer = {};

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA)
    public data: {
      title: string;
      id: number;
      creationDate: string;
      updateDate: string;
      city: {
        id: number;
        value: string;
      };
      autCommunity: {
        id: number;
        value: string;
      };
      company: string;
      contractType: string;
      workingDay: string;
      salary: {
        currency: string;
        value: number;
        grossNet: string;
        period: string;
      };
      description: string;
    },
    private matBottomSheetRef: MatBottomSheetRef
  ) {}
  /*     this.offerItem = this.offerItem =
    {
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
    };
 */

  ngOnInit(): void {}

  closeBottomSheet() {
    this.matBottomSheetRef.dismiss();
  }
}