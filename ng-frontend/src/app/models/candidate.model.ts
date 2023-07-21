import { Direction } from "./direction.model";
import { Email } from "./email.model";
import { Telephone } from "./telephone.model";
import { User } from "./user.model";

export class Candidate extends User {
    idCandidato?: number;
    nombre?: string;
    apellidos?: string;
    dni?:string;
    telefono?: Telephone;
    correo?: Email;
    direccion?: Direction;
    formacion?: any;
    ofertas?: any;
}
