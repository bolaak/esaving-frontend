import {Model} from './model';

export class Agences extends Model {
    reference?: string;
    dateCreation?: Date;
    nomAgence?: string;
    adresse?: string;
    compteAgence?: number;
  idAgence: string;
}