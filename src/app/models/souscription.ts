import {Model} from './model';
import { Client } from './client';
import { Collecteur } from './cpe';

export class Subscribe extends Model {
  referenceTontine?: string;
  duree?: number;
  idCompteTontine?: number;
  montantTontine?: number;
  dateDebutTontine?: Date;
  dateFinTontine?: Date;
  idClient?: number;
  idCpe?: number;
  client = new Client();
}
