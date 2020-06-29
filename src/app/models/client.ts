import {Model} from './model';

export class Client extends Model {
    idClient?: number;
    referenceClient?: string;
    dateCreation?: Date;
    nomClient?: string;
    prenomClient?: string;
    sexeClient?: string;
    secteur?: string;
    commune?: string;
    quartier?: string;
    telephoneClient?: string;
    photo?: string;

}