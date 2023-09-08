import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/app/models/offer.model';
import { MatBottomSheetRef, MatBottomSheetConfig } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-offer-detail',
  templateUrl: './offer-detail.component.html',
  styleUrls: ['./offer-detail.component.css'],
})
/* 
export class Offer {
    id?: number;
    name?: string;
    company?: Company;
    contractType?: string;
    workingDay?: string;
    description?: string;
    offerDetails?: string;
    location?: string;
    priority?: string;
    phone?: string;
    email?: Email;
    susbscribedCandidates?: number;
}}
 */
export class OfferDetailComponent implements OnInit {
  offerItem: Offer = {};

  constructor(/*private bottomSheetRef: MatBottomSheetRef*/) { 
    this.offerItem = this.offerItem = {
      id: 1,
      name: 'Administrativo contable',
      company: 'QUICKTYPERS SL.',
      contractType: 'Indefinido',
      workingDay: 'Full time',
      description:
        'Empresa internacional del sector educativo y de marketing, con sede en Elche (Alicante), busca incorporar de manera inmediata un/a ADMINISTRATIVO/A CONTABLE.Buscamos un perfil administrativo, preferiblemente con experiencia en facturación. Es necesario tener una buena disposición para trabajar en equipo de manera presencial en nuestra oficina de Elche. El perfil adecuado es el de una persona con gran sentido de la responsabilidad. Buscamos alguien que sepa gestionar el tiempo, con habilidades analíticas y atención al detalle. Se requiere para ocupar el puesto:',
      offerDetails:
        'Preferiblemente Licenciatura/Grado Universitario en finanzas o Contabilidad.Con buenas habilidades comunicativas y de trabajo en   equipo.Persona dinámica, resolutiva y con iniciativa propia.Buena gestión del tiempo y del orden.Buen nivel de informática general, Microsoft Office, etc.Residencia en Elche, o alrededores.Disponibilidad Full Time, Jornada laboral Completa.',
      location: 'Alicante',
      priority: '',
      phone: '',
      email: '',
      subscribedCandidates: 5,
    };
  }

/* 	closeBottomSheet() {
		this.bottomSheetRef.afterDismissed().subscribe(() => {
			console.log('Bottom sheet is closed.');
		});
		this.bottomSheetRef.dismiss();
	}
 */
  ngOnInit(): void {}
}