import {Model} from './model';

export class Collecte extends Model {
  idCollecte?: number;
  montantCollecte?: number;
  idCompteTontine?: number;
  statutDejaVerse?: boolean;
  dateCollecte: Date;
}



// {
//   "idCollecte": 0,
//   "dateCreation": "2019-09-12T10:23:08.362Z",
//   "montantCollecte": 0,
//   "idCompteTontine": 0,
//   "statutDejaVerse": true
// }
