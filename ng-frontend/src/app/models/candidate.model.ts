import { Direction } from "./direction.model";
import { Email } from "./email.model";
import { Telephone } from "./telephone.model";
import { User } from "./user.model";

export interface Candidate extends User {
    idCandidato?: number;
    nombre?: string;
    apellidos?: string;
    dni?:string;
    telefono?: number;
    correo?: string;
    direccion?: string;
    formacion?: string;
    ofertas?: number;
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