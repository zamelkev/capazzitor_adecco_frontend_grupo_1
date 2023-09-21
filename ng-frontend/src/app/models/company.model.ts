import { Candidate } from "./candidate.model";
import { Direction } from "./direction.model";
import { Email } from "./email.model";
import { Offer } from "./offer.model";
import { Telephone } from "./telephone.model";
import { User } from "./user.model";

export interface Company extends User {
    nombreSocial: string | undefined;
    nombreFiscal: string | undefined;
    cif: string | undefined;
    telefono: number | undefined;
    correo: string | undefined;
    direcciones: string | undefined;
    sector: string | undefined;
    estado: string | undefined;
    ofertas: number | Offer[] | undefined;
    numeroEmpleados: number | Candidate[] | undefined;
    proyeccion: string | undefined;
}
