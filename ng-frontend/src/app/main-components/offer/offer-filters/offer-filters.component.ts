import { Component, OnInit, Inject } from '@angular/core';
import {
  MAT_BOTTOM_SHEET_DATA,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';


@Component({
  selector: 'app-offer-filters',
  templateUrl: './offer-filters.component.html',
  styleUrls: ['./offer-filters.component.css'],
})
export class OfferFiltersComponent implements OnInit {
  filters: any = {};

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA)
    public data: {
      contractType: {
        title: string;
        values: [
          fulltime: string,
          noDefined: string,
          temporary: string,
          partTime: string,
          scholarship: string,
          selfEmployed: string
        ];
      };
      localization: {
        title: string;
        values: [];
      };
      creationDate: {
        title: string;
        values: [];
      };
      category: {
        title: string;
        values: [];
      };
      studiesLevel: {
        title: string;
        values: [];
      };
      estimatedSalary: {
        title: string;
        values: [];
      };
    },
    private matBottomSheetRef: MatBottomSheetRef
  ) {}

  ngOnInit(): void {}

  closeBottomSheet() {
    this.matBottomSheetRef.dismiss();
  }
}
