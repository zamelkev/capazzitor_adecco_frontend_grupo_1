import { User } from "./usuario.model";

export class Telephone extends User {
    idUsuario?: number;
    prefijo?: string;
    numero?: number;
}