import { Component, OnInit, ViewChild } from '@angular/core';
import { Company } from 'src/app/models/company.model';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-company-list-admin',
  templateUrl: './company-list-admin.component.html',
  styleUrls: ['./company-list-admin.component.css'],
})

export class CompanyListAdminComponent implements OnInit {

  companies: Company[] | User[] | any[] /*| Observable<User[]>*/ /*| NgIterable<any[]>*/ | null | undefined = [];

  panelOpenState = false;

  constructor(private authService: AuthService) {
    this.companies = [
      {
      uid: 1234,
      email: 'prueba@prueba.es',
      displayName: 'Prueba',
      password: '1234',
      role: 'candidate',
      photoURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
      emailVerified: true,
      id: 1234,
      nombreSocial: "Prueba",
      nombreFiscal: "Prueba SL",
      cif: "Y123456789",
      telefono: 123456789,
      correo: "prueba-sl@prueba-sl.es",
      direcciones: "C/ Falsa, nº 10, 15L",
      sector: "Automoción",
      estado: "Activo",
      ofertas: 15,
      numeroEmpleados: 50,
      proyeccion: "Nacional",
      }
    ];
  }
  ngOnInit(): void {
    this.authService?.getCompanies().subscribe( companies => {
      this.companies = companies;
    })
  }

}