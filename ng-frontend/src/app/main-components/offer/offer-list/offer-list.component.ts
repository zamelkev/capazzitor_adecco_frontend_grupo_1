import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.css']
})
  
export class OfferListComponent implements OnInit {
  isVisible: boolean = true;
 //offers: any[] = [];

  constructor() {
    this.isVisible = this.isVisible = true;
  }


  ngOnInit(): void {
      
  }
}
