import { Company } from "./company.model";
import { Email } from "./email.model";

export class Offer {
    id?: number;
    name?: string;
    company?: string;
    contractType?: string;
    workingDay?: string;
    description?: string;
    offerDetails?: string;
    location?: string;
    priority?: string;
    phone?: string;
    email?: string;
    susbscribedCandidates?: number;
}