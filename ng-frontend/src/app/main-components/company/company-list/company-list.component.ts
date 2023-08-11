import { Component, OnInit, ViewChild } from '@angular/core';
import { Company } from 'src/app/models/company.model';
import { Email } from 'src/app/models/email.model';
import { Telephone } from 'src/app/models/telephone.model';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css'],
})

export class CompanyListComponent implements OnInit {

  empresas: any[] = [];
  panelOpenState = false;

  constructor() {
    this.empresas = this.empresas = [
    {id: 1, nombreSocial: "Empresa1", nombreFiscal: "Empresa1", cif: "Y123456789", telefono: 123456789, correo: "contratacion@empresa1.com", direcciones: "C/ Falsa 1234, Valencia (España)", sector: "Desarrollo de Aplicaciones Web", estado: "activo", ofertas: 23, numeroEmpleados: 10, proyeccion: "internacional" },
    {id: 2, nombreSocial: "Empresa2", nombreFiscal: "Empresa2", cif: "X123456789", telefono: 123456789, correo: "contratacion@empresa2.com", direcciones: "C/ Falsa 1234, Barcelona (España)", sector: "Desarrollo de Aplicaciones Web", estado: "activo", ofertas: 23, numeroEmpleados: 50, proyeccion: "internacional" },
    {id: 3, nombreSocial: "Empresa2", nombreFiscal: "Empresa2", cif: "Y123456789", telefono: 123456789, correo: "contratacion@empresa2.com", direcciones: "C/ Falsa 1234, Valencia (España)", sector: "Desarrollo de Aplicaciones Web", estado: "activo", ofertas: 23, numeroEmpleados: 5, proyeccion: "provincial" },
    {id: 4, nombreSocial: "Empresa1", nombreFiscal: "Empresa1", cif: "Y123456789", telefono: 123456789, correo: "contratacion@empresa1.com", direcciones: "C/ Falsa 1234, Valencia (España)", sector: "Desarrollo de Aplicaciones Web", estado: "activo", ofertas: 23, numeroEmpleados: 10, proyeccion: "internacional" },
    {id: 5, nombreSocial: "Empresa2", nombreFiscal: "Empresa2", cif: "X123456789", telefono: 123456789, correo: "contratacion@empresa2.com", direcciones: "C/ Falsa 1234, Barcelona (España)", sector: "Desarrollo de Aplicaciones Web", estado: "activo", ofertas: 23, numeroEmpleados: 50, proyeccion: "internacional" },
    {id: 6, nombreSocial: "Empresa2", nombreFiscal: "Empresa2", cif: "Y123456789", telefono: 123456789, correo: "contratacion@empresa2.com", direcciones: "C/ Falsa 1234, Valencia (España)", sector: "Desarrollo de Aplicaciones Web", estado: "activo", ofertas: 23, numeroEmpleados: 5, proyeccion: "provincial" },
  ];
  }

  ngOnInit(): void {
    
  }

}