import { Candidate } from "./candidate.model";
import { Company } from "./company.model";
import { Email } from "./email.model";

export class Offer {
    id?: number;
    company?: Company;
    descripcion?: string;
    detallesPuesto?: string;
    emplazamiento?: string;
    urgencia?: string;
    telefono?: string;
    correo?: Email;
    // candidatos?: List<Candidate>;
}