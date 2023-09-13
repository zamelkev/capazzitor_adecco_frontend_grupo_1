import { Component, OnInit, Inject } from '@angular/core';
import { Offer } from 'src/app/models/offer.model';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-offer-detail',
  templateUrl: './offer-detail.component.html',
  styleUrls: ['./offer-detail.component.css'],
})
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

  ngOnInit(): void {}

  closeBottomSheet() {
    this.matBottomSheetRef.dismiss();
  }
}