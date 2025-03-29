import {Model} from './model';

export class Cpe {
    idCpe?: number;
    zoneCouverte?: string;
    idCaissier?: number;
}

export class Collecteur extends Model {
    idUtilisateur?: number;
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
    cpe = new Cpe();
}
