import { Direction } from "./direction.model";
import { Email } from "./email.model";
import { Telephone } from "./telephone.model";
import { User } from "./user.model";

export interface Company extends User {
    id: number;
    nombreSocial: string;
    nombreFiscal: string;
    cif: string;
    telefono: number;
    correo: string;
    // direcciones: List<Direction>;
    sector: string;
    estado: string;
    // ofertas: List<Offer>;
    numeroEmpleados: number;
    proyeccion: string;
}

/*  id: number;
    nombreSocial: string;
    nombreFiscal: string;
    cif: string;
    telefono: number;
    correo: string;
    direcciones: string;
    sector: string;
    estado: string;
    ofertas: number;
    numeroEmpleados: number;
    proyeccion: string; */