import { Component, NgIterable, OnInit } from '@angular/core';
import { Offer } from 'src/app/models/offer.model';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-offer-item-list-admin',
  templateUrl: './offer-item-list-admin.component.html',
  styleUrls: ['./offer-item-list-admin.component.css'],
})
export class OfferItemListAdminComponent implements OnInit {

  offers: Offer[] | any[] | NgIterable<any> | null | undefined= [];
  user: User | any = this.authService.user$;
  panelOpenState = true;

  constructor(private authService: AuthService, private offerService: OfferService) {
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

  ngOnInit(): void {
    this.offerService.GetOffersByCompany(this.user).subscribe( offers => {
      this.offers = offers;
      console.log(this.offers);
    })
  };


}
