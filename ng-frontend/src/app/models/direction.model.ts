import { User } from "./usuario.model";

export class Direction extends User {
    idUsuario?: number;
    direccion?: string;
    cp?: number;
    localidad?: string;
    pais?: string;
}