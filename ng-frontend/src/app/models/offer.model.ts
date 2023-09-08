import { Candidate } from "./candidate.model";
import { Company } from "./company.model";
import { Email } from "./email.model";

export class Offer {
    id?: number;
    name?: string;
    company?: string | Company;
    contractType?: string;
    workingDay?: string;
    sortDescription?: string;
    description?: string;
    offerDetails?: string;
    salary?: string;
    location?: string;
    priority?: string;
    phone?: string;
    email?: string;
    subscribedCandidates?: number | Candidate[] | any[];
}