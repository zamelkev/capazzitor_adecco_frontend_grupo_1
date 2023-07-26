import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Candidate } from 'src/app/models/candidate.model';


@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css'],
  
})
export class CandidateListComponent implements OnInit {
  
  candidates: any[] = [];
  panelOpenState = true;

  constructor() {
    this.candidates = this.candidates = [
      {
        idCandidato: 1,
        nombre: 'Eduardo',
        apellidos: 'Gomez',
        dni: '8974589757A',
        telefono: 111222333,
        correo: 'eduardogomez@gmail.com',
        direccion: 'Cruces',
        formacion: 'hosteleria',
        ofertas: 3
      },
      {
        idCandidato: 2,
        nombre: 'Juanito',
        apellidos: 'Perez',
        dni: '7856723734D',
        telefono: 222333444,
        correo: 'juanitoperez@gmail.com',
        direccion: 'Cruces',
        formacion: 'peluqueria',
        ofertas: 2
      },
      {
        idCandidato: 3,
        nombre: 'Pedro',
        apellidos: 'Lopez',
        dni: '9293029392F',
        telefono: 333444555,
        correo: 'pedrolopez@gmail.com',
        direccion: 'Bilbao',
        formacion: 'camarero',
        ofertas: 5
      },
      {
        idCandidato: 4,
        nombre: 'Alejandro',
        apellidos: 'Sanchez',
        dni: '3276672383J',
        telefono: 444555666,
        correo: 'alejandrosanchez@gmail.com',
        direccion: 'Rioja',
        formacion: 'enfermeria',
        ofertas: 1
      },
      {
        idCandidato: 5,
        nombre: 'Roberto',
        apellidos: 'Casas',
        dni: '9574539039I',
        telefono: 555666777,
        correo: 'robertocasas@gmail.com',
        direccion: 'Zaragoza',
        formacion: 'mecanica',
        ofertas: 3
      },
      {
        idCandidato: 6,
        nombre: 'Ander',
        apellidos: 'Rios',
        dni: '8472019748K',
        telefono: 666777888,
        correo: 'anderrios@gmail.com',
        direccion: 'Valencia',
        formacion: 'programacion',
        ofertas: 3
      }

    ]
  }
  
  ngOnInit(): void {}
  
}


/* idCandidato?: number;
    nombre?: string;
    apellidos?: string;
    dni?:string;
    telefono?: number;
    correo?: string;
    direccion?: string;
    formacion?: string;
    ofertas?: number; */