import { Component } from '@angular/core';
import {
  MatBottomSheet, MatBottomSheetConfig, MatBottomSheetRef 
} from '@angular/material/bottom-sheet';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { OfferDetailComponent } from '../offer-detail/offer-detail.component';
@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.css'],
})
export class BottomSheetComponent {

  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(config?: MatBottomSheetConfig) {
    this.bottomSheet.open(OfferDetailComponent, config);
  }
}

