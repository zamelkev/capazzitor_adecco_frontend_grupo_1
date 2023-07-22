import { Direction } from "./direction.model";
import { Email } from "./email.model";
import { Telephone } from "./telephone.model";
import { User } from "./usuario.model";

export interface Company extends User {
    id: number;
    nombreSocial: string;
    nombreFiscal: string;
    cif: string;
    telefono: Telephone;
    correo: Email;
    // direcciones: List<Direction>;
    sector: string;
    estado: string;
    // ofertas: List<Offer>;
    numeroEmpleados: number;
    proyeccion: string;
}
