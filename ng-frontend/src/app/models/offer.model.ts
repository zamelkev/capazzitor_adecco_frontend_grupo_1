//import { Company } from "./company.model";
//import { Email } from "./email.model";

export class Offer {
  title?: string;
  id?: number;
  state?: number;
  category?: {
    id?: number;
    value?: string;
  };
  subcategories?: [
    {
      id?: number;
      value?: string;
    }
  ];
  creationDate?: string;
  updateDate?: string;
  city?: {
    id?: number;
    value?: string;
  };
  autCommunity?: {
    id?: number;
    value?: string;
  };
  country?: {
    id?: number;
    value?: string;
  };
  company?: string;
  contractType?: string;
  workingDay?: string;
  salary?: {
    currency?: string;
    value?: number;
    grossNet?: string;
    period?: string;
  };
  description?: string;
  experienceMin?: [
    {
      years?: string;
      value?: number;
    },
    {
      months?: string;
      value?: number;
    }
  ];
  studiesMin?: {
    id?: number;
    value?: string;
  };
  priority?: string;
  applicants?: number;
}