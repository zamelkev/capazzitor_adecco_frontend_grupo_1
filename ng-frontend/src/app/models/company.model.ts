import { Direction } from "./direction.model";
import { Email } from "./email.model";
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
    ofertas: number | undefined;
    numeroEmpleados: number | undefined;
    proyeccion: string | undefined;
}
