import { Component, OnInit, NgIterable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from 'src/app/models/company.model';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css'],
})

export class CompanyListComponent implements OnInit {

  user: User | any = this.authService.userData;

  companies: Company[] | User[] | any /*| Observable<Company[]>*/ | NgIterable<any[]> | null | undefined = [];

  panelOpenState = false;

  constructor(private authService: AuthService) {
    // this.companies = [
    //   {
    //   uid: 1234,
    //   email: 'prueba@prueba.es',
    //   displayName: 'Prueba',
    //   password: '1234',
    //   role: 'candidate',
    //   photoURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
    //   emailVerified: true,
    //   id: 1234,
    //   nombreSocial: "Prueba",
    //   nombreFiscal: "Prueba SL",
    //   cif: "Y123456789",
    //   telefono: 123456789,
    //   correo: "prueba-sl@prueba-sl.es",
    //   direcciones: "C/ Falsa, nº 10, 15L",
    //   sector: "Automoción",
    //   estado: "Activo",
    //   ofertas: 15,
    //   numeroEmpleados: 50,
    //   proyeccion: "Nacional",
    //   }
    // ];
  }
  ngOnInit(): void {
    this.authService?.getCompany(this.user).subscribe( company => {
      this.companies = company;
      console.log(this.companies);
    });
  }

}