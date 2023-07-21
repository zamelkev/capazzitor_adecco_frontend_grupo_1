import { User } from "./user.model";

export class Telephone extends User {
    idUsuario?: number;
    prefijo?: string;
    numero?: number;
}