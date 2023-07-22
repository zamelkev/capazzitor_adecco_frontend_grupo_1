import { User } from "./usuario.model";

export class Email extends User{
    idUsuario?: number;
    direccion?: string;
    uso?: string;
}