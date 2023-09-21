import { Candidate } from "./candidate.model";
import { Company } from "./company.model";
import { Email } from "./email.model";

export class Offer {
    
        title?: string;
        id?: number;
        state?: number;
        category?: string;
        // {
        //   id?: number;
        // value?: string;
        // };
        subcategories?: string;
        // [
        //   {
        //     id?: number;
        //     value?: string;
        //   }
        // ];
        creationDate?: string;
        updateDate?: string;
        city?: string; 
        // {
        //   id?: number;
        //   value?: string;
        // };
        country?: string;
        // {
        //   id?: number;
        //   value?: string;
        // };
        autCommunity?: string;
        salaryRank?: string;
        company?: string;
        companyUid?: number;
        companyPhoto?: string; 
        email?: string;
        contractType?: string;
        workingDay?: string;
        description?: string;
        experienceMin?: string;
        // {
        //   id: number;
        //   value: string;
        // };
        studiesMin?: string;
        // {
        //   id?: number;
        //   value: string;
        // };
        priority?: string;
        applicants?: number | Candidate[] | any[];
}