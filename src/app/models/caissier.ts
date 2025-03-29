import {Model} from './model';

export class Caissier extends Model {
    referenceUtilisateur?: string;
    dateCreation?: Date;
    login?: string;
    password?: string;
    firstLogin?: string;
    statut?: string;
    nom?: string;
    prenom?: string;
    sexe?: string;
    photo?: string;
    telephone?: string;
    profilUtilisateur?: string;
    idAgence?: number;

}