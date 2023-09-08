import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Company } from 'src/app/models/company.model';
import { Email } from 'src/app/models/email.model';
import { Telephone } from 'src/app/models/telephone.model';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent {

  empresas: Company[] = [
    {id: 1, nombreSocial: "Empresa1", nombreFiscal: "Empresa1", cif: "Y123456789", telefono: {idUsuario:1, prefijo:"+34", numero:123456789}, correo: {idUsuario:1, direccion:"Calle Falsa 1234", uso:"Sede Valencia"}, sector: "Desarrollo de Aplicaciones Web", estado: "activo", numeroEmpleados: 10, proyeccion: "internacional" },
    {id: 2, nombreSocial: "Empresa2", nombreFiscal: "Empresa1", cif: "Y123456789", telefono: {idUsuario:1, prefijo:"+34", numero:123456789}, correo: {idUsuario:1, direccion:"Calle Falsa 1234", uso:"Sede Valencia"}, sector: "Desarrollo de Aplicaciones Web", estado: "activo", numeroEmpleados: 10, proyeccion: "internacional" },
    {id: 3, nombreSocial: "Empresa3", nombreFiscal: "Empresa1", cif: "Y123456789", telefono: {idUsuario:1, prefijo:"+34", numero:123456789}, correo: {idUsuario:1, direccion:"Calle Falsa 1234", uso:"Sede Valencia"}, sector: "Desarrollo de Aplicaciones Web", estado: "activo", numeroEmpleados: 10, proyeccion: "internacional" },
    
  ];

}
//     id: number;
//     nombreSocial: string;
//     nombreFiscal: string;
//     cif: string;
//     telefono: Telephone;
//     correo: Email;
//     // direcciones: List<Direction>;
//     sector: string;
//     estado: string;
//     // ofertas: List<Offer>;
//     numeroEmpleados: number;
//     proyeccion: string;