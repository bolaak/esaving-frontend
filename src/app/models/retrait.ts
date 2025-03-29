import {Model} from './model';

export class RetraitTontine extends Model {
    idRetrait?: number;
    libelleRetrait?: string;
    dateRetrait?: Date;
    lieuRetrait?: string;
    bureauRetrait?: string;
    montantRetrait?: number;
    montantLettreRetrait?: string;
    numeroCompte?: number;
    nomCompte?: string;
    idCompteTontine?: number;
}
