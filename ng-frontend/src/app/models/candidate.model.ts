import { Direction } from "./direction.model";
import { Email } from "./email.model";
import { Offer } from "./offer.model";
import { Telephone } from "./telephone.model";
import { User } from "./user.model";

export interface Candidate extends User {
    nombreYapellidos?: string;
    dni?:string;
    telefono?: number;
    correo?: string;
    direccion?: string;
    formacion?: string[] | string;
    ofertas?: number | Offer[];
}
