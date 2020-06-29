import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataProvider } from './data-providers';
import { url as apiURL } from '../function';
import { map, catchError } from 'rxjs/operators';
import { User } from '../models/user';
import { Agences } from '../models/agence';
import { itemsPerPage } from '../const';
import { Caissier } from '../models/caissier';
import { Collecteur } from '../models/cpe';
import { Client } from '../models/client';
import { Subscribe } from '../models/souscription';
import { Collecte } from '../models/collecte';
import { Confidential } from '../models/confidential';
import { RetraitTontine } from '../models/retrait';
import { Reset } from '../models/reset';

@Injectable({
  providedIn: 'root'
})
export class ApiProviders {

  // Token = window.localStorage.getItem('token');
  Token() {
    const Token = window.localStorage.getItem('token');
    return Token;
  }

  IDU() {
    const userid = localStorage.getItem('IdU');
    // tslint:disable-next-line:radix
    return parseInt(userid);
  }

  AGENCEID() {
    const agence_id = localStorage.getItem('agenceID');
    // tslint:disable-next-line:radix
    return parseInt(agence_id);
  }
  constructor(
    private _http: HttpClient,
    private _data: DataProvider,
  ) { }


  private _requestOptions(queryParams?: any): any {
    const o: any = {
      headers: {
        'Content-Type': 'application/json',
      },
      observe: 'response',
      responseType: 'json',
      params: queryParams,
    };

    // let token = localStorage.getItem('token');
    const token = this._data.token;

    if (token) {
      o.headers.Authorization = 'Basic ' + token;
    }

    return o;
  }

  private _requestedOptions(queryParams?: any): any {
    const o: any = {
      headers: {
        'Content-Type': 'application/json',
      },
      observe: 'response',
      responseType: 'json',
      params: queryParams,
    };

    const token = this.Token();

    if (token) {
      o.headers.Authorization = 'Basic ' + token;
    }

    return o;
  }

  private _paginatedRequest<T>(path: string, itemFormatFunction: (data: any) => T, page = 1, size = itemsPerPage) {
    return this._http.get(
      apiURL(path),
      this._requestedOptions({
        page_no: page,
        page_size: size,
      })
    )
      .pipe(map((r: any) => this._formatToPaginatedData(r.body, itemFormatFunction)))
      .toPromise();
  }

  private _formatToPaginatedData<T>(body: any[], itemFormatFunction: (data: any) => T) {
    let total = 0;
    let items: T[] = [];

    if (body[0]) {
      total = body[0].Total;
      items = body.map((i: any) => itemFormatFunction(i));
    }

    return { total: total, items: items };
  }

  private _requestMapFn(r: any) {
    const b = r.body;

    if (b.originalError) {
      throw b;
    }

    if (typeof b.resultat === 'string') {
      if (b.resultat === 'OK') {
        return;
      } else {
        throw b.message || b;
      }
    }

    if ((b.resultat === 'OK') || !b.result) {
      return;
    }
    if ((b.result.resultat === 'OK') || !b.result) {
      return;
    }

    if (b.result[0] && (b.result[0].result || b.result[0].resultat) === 'OK') {
      return;
    }

    if (b.result[0] && (b.result[0].erreur || b.result[0].resultat)) {
      throw b.result[0].message || b.result[0].erreur || b.result[0].resultat;
    }

    throw b;
  }

  login(user: User) {
    return this._http.post(apiURL('/login'), {
      'login': user.login,
      'password': user.password
    }, this._requestOptions())
      .pipe(map((r: any) => {
        console.log(r);
        const b = r.body;

        if (b.token && b.utilisateur.idUtilisateur) {
          this._data.token = b.token;
          return b;
        }
        throw b;
      }));
  }
  // Convert to server
  private _agenceFromServer(data: any) {
    const model = new Agences();
    model.id = data.id;
    model.reference = data.reference;
    model.dateCreation = data.dateCreation;
    model.nomAgence = data.nomAgence;
    model.adresse = data.adresse;
    model.compteAgence = data.compteAgence;

    return model;
  }

  private _retraitFromServer(data: any) {
    const model = new RetraitTontine();
    model.id = data.id;
    model.libelleRetrait = data.libelleRetrait;
    model.lieuRetrait = data.lieuRetrait;
    model.lieuRetrait = data.dateRetrait;
    model.montantLettreRetrait = data.montantLettreRetrait;
    model.montantRetrait = data.montantRetrait;
    model.nomCompte = data.nomCompte;
    model.numeroCompte = data.numeroCompte;

    return model;
  }

  private _retraitToServer(model: RetraitTontine) {
    return {
      libelleRetrait: model.libelleRetrait,
      lieuRetrait: model.lieuRetrait,
      montantLettreRetrait: model.montantRetrait,
      montantRetrait: model.montantRetrait,
      nomCompte: model.nomCompte,
      numeroCompte: model.numeroCompte,
      idCompteTontine: model.idCompteTontine,
      dateRetrait: model.dateRetrait
    };
  }


  private _agenceToServer(model: Agences) {
    return {
      reference: model.reference,
      dateCreation: model.dateCreation,
      nomAgence: model.nomAgence,
      adresse: model.adresse,
      compteAgence: model.compteAgence
    };
  }

  private _collecteFromServer(data: any) {
    const model = new Collecte();
    model.id = data.id;
    model.montantCollecte = data.montantCollecte;
    model.idCompteTontine = data.idCompteTontine;
    model.statutDejaVerse = data.statutDejaVerse;
    return model;
  }


  private _collecteToServer(model: Collecte) {
    return {
      montantCollecte: model.montantCollecte,
      idCompteTontine: model.idCompteTontine,
      statutDejaVerse: model.statutDejaVerse,
    };
  }
  private _clientFromServer(data: any) {
    const model = new Client();
    model.id = data.id;
    model.referenceClient = data.referenceClient;
    model.dateCreation = data.dateCreation;
    model.nomClient = data.nomClient;
    model.prenomClient = data.prenomClient;
    model.sexeClient = data.sexeClient;
    model.secteur = data.secteur;
    model.commune = data.commune;
    model.quartier = data.quartier;
    model.telephoneClient = data.telephoneClient;
    model.photo = data.photo;
  }

  private _clientToserver(model: Client) {
    return {
      referenceClient: model.referenceClient,
      dateCreation: model.dateCreation,
      nomClient: model.nomClient,
      prenomClient: model.prenomClient,
      sexeClient: model.sexeClient,
      secteur: model.secteur,
      commune: model.commune,
      quartier: model.quartier,
      telephoneClient: model.telephoneClient,
      photo: model.photo,
    };
  }

  private _userToServer(model: User) {
    return {
      dateCreation: model.dateCreation,
      login: model.login,
      password: model.password,
      firstLogin: model.firstLogin,
      statut: model.statut,
      nom: model.nom,
      prenom: model.prenom,
      sexe: model.sexe,
      photo: model.photo,
      telephone: model.telephone,
      profilUtilisateur: model.profilUtilisateur,
      idAgence: model.idAgence,
      codeRole: model.codeRole
    };
  }

  private _userResetToServer(model: User) {
    return {
      login: model.login,
      password: model.password
    };
  }

  private _passwordToServer(model: Confidential) {
    return {
      oldPassword: model.oldPassword,
      newPassword: model.newPassword
    }
  }

  private _userFromServer(data: any) {
    const model = new User();
    model.id = data.id;
    model.login = data.login;
    model.password = data.password;
    model.firstLogin = data.firstLogin;
    model.statut = data.statut;
    model.nom = data.nom;
    model.prenom = data.prenom;
    model.sexe = data.sexe;
    model.photo = data.photo;
    model.telephone = data.telephone;
    model.profilUtilisateur = data.profilUtilisateur;
    model.idAgence = data.idAgence;
    model.codeRole = data.codeRole;

    return model;
  }


  // Send file
  sendFileToServer(file) {
    const fd = new FormData();
    fd.append('file', file);
    const httpOption = {
      headers: new HttpHeaders({
        Authorization: 'Basic ' + this.Token()
      })
    };
    return this._http.post(apiURL('/upload'), fd, httpOption).pipe(
      map((res) => {
        console.log(res);
        return res;
      })
    ).toPromise();
  }
  // Post request
  create(model: Agences) {
    return this._http.post<any>(apiURL('/agence'), model, {
      headers: {
        'Content-Type': 'application/json',
        // 'Accept': 'text/plain',
        'Authorization': 'Basic ' + this.Token()
      },
      observe: 'response'
    }).pipe(
      map((resp: any) => {
        return resp;
      })
    );
  }

  addNewOtherUser(model: User) {
    return this._http.post<any>(apiURL('/autre-utilisateur'), model, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + this.Token()
      },
      observe: 'response'
    }).pipe(
      map((resp: any) => {
        return resp;
      })
    );
  }

  editImage(model: User) {
    return this._http.put(
      apiURL('/compte/utilisateur-courant'),
      this._userToServer(model), {
      headers: { Authorization: 'Basic ' + this.Token() }
    })
      .pipe(
        map((resp: Response) => {
          return resp;
        })
      );
  }

  souscription(model: Subscribe) {
    model.idCpe = this.ID();
    model.idClient = 0;
    model.client.idClient = 0;
    return this._http.post<any>(apiURL('/souscription/nouveau'), model, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + this.Token()
      },
      observe: 'response'
    }).pipe(
      map((resp: any) => {
        return resp;
      })
    );
  }

  ID() {
    const ID = window.localStorage.getItem('IdU');
    // tslint:disable-next-line:radix
    return parseInt(ID);
  }
  addCaissier(model: Caissier) {
    return this._http.post<any>(apiURL('/caissier/nouveau'), model, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + this.Token()
      },
      observe: 'response'
    }).pipe(
      map((resp: any) => {
        return resp;
      })
    );
  }

  newCollecte(model: Collecte) {
    return this._http.post<any>(apiURL('/collecte/nouveau'), model, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Basic ' + this.Token()
      },
      observe: 'response',
      responseType: 'text' as 'json'
    }).pipe(
      map((resp: any) => {
        return resp;
      })
    );
  }

  addCPE(model: Collecteur) {
    return this._http.post<any>(apiURL('/cpe/nouveau'), model, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + this.Token()
      },
      observe: 'response'
    }).pipe(
      map((resp: any) => {
        return resp;
      })
    );
  }

  addCPEAdmin(model: Collecteur) {
    // LOL
    model.idAgence = this.AGENCEID();
    model.cpe.idCaissier = this.IDU();
    return this._http.post<any>(apiURL('/cpe/nouveau'), model, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + this.Token()
      },
      observe: 'response'
    }).pipe(
      map((resp: any) => {
        return resp;
      })
    );
  }

  addClient(model: Client) {
    return this._http.post<any>(apiURL('/client/nouveau'), model, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + this.Token()
      },
      observe: 'response'
    }).pipe(
      map((resp: any) => {
        return resp;
      })
    );
  }

  versement(id: any, obs?: string) {
    const option = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + this.Token()
      }),
      responseType: 'text' as 'json'
    };

    const a = new URLSearchParams();

    if (obs) {
      a.set('id_cpe', id);
    } else {
      a.set('id_cpe', id);
    }

    return this._http.post(apiURL('/versement/nouveau'), a.toString(),
      option)
      .pipe(
        map((resp: any) => {
          return resp;
        })
      );
  }

  // versement(id: any, obs?: string) {
  //   const option = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //       'Authorization': 'Basic ' + this.Token()
  //     })
  //   };

  //   const a = new URLSearchParams();

  //   if (obs) {
  //     a.set('id_cpe', id);
  //   } else {
  //     a.set('id_cpe', id);
  //   }

  //   return this._http.post(apiURL('/versement/nouveau'), a.toString(),
  //   option)
  //   .pipe(
  //     map((resp: any) => {
  //       return resp;
  //     })
  //   );
  // }

  retrait(model: RetraitTontine) {
    return this._http.post<any>(apiURL('/retrait/nouveau'), model, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + this.Token()
      },
      observe: 'response',
      responseType: 'text' as 'json'
    }).pipe(
      map((resp: any) => {
        return resp;
      })
    );
  }


  getAgenceRel(id) {
    return this._http.get<any>(apiURL('/accueil/agence/' + id), {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + this.Token()
      },
      observe: 'response',
      responseType: 'text' as 'json'
    }).pipe(
      map((resp: any) => {
        return resp;
      })
    );
  }
  // Pdf

  // getAgenceRel(id) {
  //   return this._http.get<any>(apiURL('/accueil/agence/' + id ), this._requestedOptions({
  //     page_no: 1,
  //     page_size: itemsPerPage,
  //   }));
  // }

  statComCPE(id, date_debut, date_fin) {
    return this._http
      .get(apiURL('/statistique/commission-par-cpe/' + id + '/' + this.convert_one(date_debut) + '/' + this.convert_two(date_fin)),
        {
          headers: { Authorization: 'Basic ' + this.Token() },
          responseType: 'blob'
        }
      )
      .pipe(
        map(resp => {
          return resp;
        })
      );
  }

  statComAGENCE(id, date_debut, date_fin) {
    return this._http
      .get(apiURL('/statistique/commission-par-agence/' + id + '/' + this.convert_one(date_debut) + '/' + this.convert_two(date_fin)),
        {
          headers: { Authorization: 'Basic ' + this.Token() },
          responseType: 'blob'
        }
      )
      .pipe(
        map(resp => {
          return resp;
        })
      );
  }

  statComCLIEN(id, date_debut, date_fin) {
    return this._http
      .get(apiURL('/statistique/commission-par-client/' + id + '/' + date_debut + '/' + date_fin),
        {
          headers: { Authorization: 'Basic ' + this.Token() },
          responseType: 'blob'
        }
      )
      .pipe(
        map(resp => {
          return resp;
        })
      );
  }

  statComAgence(id, date_debut, date_fin) {
    return this._http
      .get(apiURL('/statistique/commission-par-agence/' + id + '/' + date_debut + '/' + date_fin),
        {
          headers: { Authorization: 'Basic ' + this.Token() },
          responseType: 'blob'
        }
      )
      .pipe(
        map(resp => {
          return resp;
        })
      );
  }

  statComColl(id, date_debut, date_fin) {
    return this._http
      .get(apiURL('/statistique/commission-par-cpe/' + id + '/' + date_debut + '/' + date_fin),
        {
          headers: { Authorization: 'Basic ' + this.Token() },
          responseType: 'blob'
        }
      )
      .pipe(
        map(resp => {
          return resp;
        })
      );
  }

  statCollByCpe(id, date_debut, date_fin) {
    return this._http
      .get(apiURL('/statistique/collecte-par-cpe/' + id + '/' + date_debut + '/' + date_fin),
        {
          headers: { Authorization: 'Basic ' + this.Token() },
          responseType: 'blob'
        }
      )
      .pipe(
        map(resp => {
          return resp;
        })
      );
  }

  statRetardColl(id, dateRe) {
    return this._http
      .get(apiURL('/statistique/collecte-en-retard/' + id + '/' + dateRe),
        {
          headers: { Authorization: 'Basic ' + this.Token() },
          responseType: 'blob'
        }
      )
      .pipe(
        map(resp => {
          return resp;
        })
      );
  }

  balanceClient(id, date) {
    return this._http
      .get(apiURL('/statistique/balance-compte-client/' + id + '/' + date),
        {
          headers: { Authorization: 'Basic ' + this.Token() },
          responseType: 'blob'
        }
      )
      .pipe(
        map(resp => {
          return resp;
        })
      );
  }

  statClientColl(id) {
    return this._http
      .get(apiURL('/statistique/clients-par-collecteur/' + id),
        {
          headers: { Authorization: 'Basic ' + this.Token() },
          responseType: 'blob'
        }
      )
      .pipe(
        map(resp => {
          return resp;
        })
      );
  }

  histCpteTontine(id) {
    return this._http
      .get(apiURL('/statistique/historique-compte-tontine/' + id),
        {
          headers: { Authorization: 'Basic ' + this.Token() },
          responseType: 'blob'
        }
      )
      .pipe(
        map(resp => {
          return resp;
        })
      );
  }
  convert_one(dateDebut) {
    const dateD = new Date(dateDebut);
    return (dateDebut = dateD
      .toLocaleDateString('en-GB', { day: 'numeric', month: 'numeric', year: 'numeric' })
      .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '-'));
  }
  convert_two(dateFin) {
    const dateF = new Date(dateFin);
    return (dateFin = dateF
      .toLocaleDateString('en-GB', { day: 'numeric', month: 'numeric', year: 'numeric' })
      .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '-'));
  }

  // All paginated request
  getPaginatedAgences(page = 1, size = itemsPerPage) {
    return this._paginatedRequest('/agence', this._agenceFromServer, page, size);
  }

  getAgence(page_nos, page_sizes) {
    return this._http.get<any>(apiURL('/agence'), this._requestedOptions({
      page_no: page_nos,
      page_size: page_sizes,
    }));
  }

  getAgences() {
    const taille = 999;
    return this._http.get<any>(apiURL('/agence'), this._requestedOptions({
      page_no: 1,
      page_size: taille,
    }));
  }
  getCollByCPE(id) {
    return this._http.get<any>(apiURL('/collecte/lister/' + id), this._requestedOptions({
      page_no: 1,
      page_size: itemsPerPage,
    }));
  }

  getVerserEnAttente(id) {
    return this._http.get<any>(apiURL('/versement/lister/totaux-collectes-en-attente/' + id), this._requestedOptions({
      page_no: 1,
      page_size: itemsPerPage,
    }));
  }

  getRetraitClient(page_nos, page_sizes) {
    return this._http.get<any>(apiURL('/souscription/lister/caissier/' + this.IDU()), this._requestedOptions({
      page_no: page_nos,
      page_size: page_sizes,
    }));
  }

  getRetraitHist(page_nos, page_sizes) {
    return this._http.get<any>(apiURL('/retrait/lister/' + this.IDU()), this._requestedOptions({
      page_no: page_nos,
      page_size: page_sizes,
    }));
  }

  getStatistic() {
    return this._http.get<any>(apiURL('/accueil/agence/' + this.AGENCEID()), this._requestedOptions({
      page_no: 1,
      page_size: itemsPerPage,
    }));
  }

  getStatGlobal() {
    return this._http.get<any>(apiURL('/accueil/global'), this._requestedOptions({
      page_no: 1,
      page_size: itemsPerPage,
    }));
  }

  getCollAVerser(page_nos, page_sizes, id) {
    return this._http.get<any>
      (apiURL('/collecte/lister/' + id + '?etat_collecte=DEJA_VERSE'),
        this._requestedOptions({
          page_no: page_nos,
          page_size: page_sizes,
        }));
  }

  getCollList(page_nos, page_sizes, etat) {
    return this._http.get<any>
      (apiURL('/collecte/lister/' + this.IDU() + '?etat_collecte=' + etat),
        this._requestedOptions({
          page_no: page_nos,
          page_size: page_sizes,
        }));
  }

  getCollAVerserByCPE(page_nos, page_sizes) {
    return this._http.get<any>
      (apiURL('/collecte/lister/a-verser/' + this.IDU()),
        this._requestedOptions({
          page_no: page_nos,
          page_size: page_sizes,
        }));
  }

  getSumm() {
    return this._http.get<any>
      (apiURL('/collecte/lister/a-verser/' + this.IDU()),
        this._requestedOptions({
          page_no: 1,
          page_size: itemsPerPage,
        }));
  }


  getCaissier(page_nos, page_sizes) {
    return this._http.get<any>(apiURL('/caissier/tout'), this._requestedOptions({
      page_no: page_nos,
      page_size: page_sizes,
    }));
  }

  getCaissiers() {
    return this._http.get<any>(apiURL('/caissier/tout'), this._requestedOptions({
      page_no: 1,
      page_size: 10000,
    }));
  }

  getCaissierCpe(id) {
    return this._http.get<any>(apiURL('/cpe/cpe-par-caissier/' + id), this._requestedOptions({
      page_no: 1,
      page_size: 10000,
    }));
  }

  getCPE(page_nos, page_sizes) {
    return this._http.get<any>(apiURL('/cpe/tout'), this._requestedOptions({
      page_no: page_nos,
      page_size: page_sizes,
    }));
  }

  getCpes() {
    return this._http.get<any>(apiURL('/cpe/tout'), this._requestedOptions({
      page_no: 1,
      page_size: itemsPerPage,
    }));
  }

  getCpesNo() {
    return this._http.get<any>(apiURL('/cpe/tout'), this._requestedOptions({
      page_no: 1,
      page_size: 100000,
    }));
  }

  getUSERS(page_nos, page_sizes) {
    return this._http.get<any>(apiURL('/autre-utilisateur'), this._requestedOptions({
      page_no: page_nos,
      page_size: page_sizes,
    }));
  }

  currentAccount() {
    return this._http.get(apiURL('/compte/utilisateur-courant'), this._requestedOptions());
  }

  getROLES() {
    return this._http.get<any>(apiURL('/role-predefini/utilisable'), this._requestedOptions({
      page_no: 1,
      page_size: itemsPerPage,
    }));
  }

  getClients(page_nos, page_sizes) {
    return this._http.get<any>(apiURL('/client/lister'), this._requestedOptions({
      page_no: page_nos,
      page_size: page_sizes,
    }));
  }

  getClientSouscri(page_nos, page_sizes) {
    return this._http.get<any>
      (apiURL('/souscription/lister/cpe/' + this.IDU()), this._requestedOptions({
        page_no: page_nos,
        page_size: page_sizes,
      }));
  }

  getClientSouscris() {
    return this._http.get<any>
      (apiURL('/souscription/lister/cpe/' + this.IDU() + '?statut_tontine=EN_COURS&type_trie=ALPHABETIQUE'), this._requestedOptions({
        page_no: 1,
        page_size: itemsPerPage,
      }));
  }

  getCpteTontByCaiss() {
    return this._http.get<any>
      (apiURL('/souscription/tontine-retirable/caissier/' + this.IDU()), this._requestedOptions({
        page_no: 1,
        page_size: itemsPerPage,
      }));
  }

  getclientSouscri(id) {
    return this._http.get<any>
      (apiURL('/souscription/lister/caissier/' + id + '?statut_tontine=TOUT&type_trie=ALPHABETIQUE'), this._requestedOptions({
        page_no: 1,
        page_size: 1000,
      }));
  }

  getAmount(id) {
    return this._http.get<any>
      (apiURL('/retrait/montant-retirable/' + id), this._requestedOptions({
        page_no: 1,
        page_size: itemsPerPage,
      }));
  }

  getTontineTout(id, statut) {
    return this._http.get<any>
      (apiURL('/souscription/lister/cpe/' + id + '?statut_tontine=' + statut + '&type_trie=ALPHABETIQUE'), this._requestedOptions({
        page_no: 1,
        page_size: itemsPerPage,
      }));
  }
  //  Update

  agenceByID(id) {
    return this._http
      .get(apiURL('/agence/' + id),
        {
          headers: { Authorization: 'Basic ' + this.Token() }
        })
      .pipe(
        map((resp: Response) => {
          return resp;
        })
      );
  }

  editAgence(model: Agences) {
    return this._http.put(
      apiURL('/agence/' + model.idAgence),
      this._agenceToServer(model), {
      headers: { Authorization: 'Basic ' + this.Token() }
    })
      .pipe(
        map((resp: Response) => {
          return resp;
        })
      );
  }

  editClient(model: Client) {
    return this._http.put(
      apiURL('/client/modifier/' + model.id),
      this._clientToserver(model), {
      headers: { Authorization: 'Basic ' + this.Token() }
    })
      .pipe(
        map((resp: Response) => {
          return resp;
        })
      );
  }

  editOtherUser(model: User) {
    return this._http.put(
      apiURL('/autre-utilisateur/' + model.idAgence),
      this._userToServer(model), {
      headers: { Authorization: 'Basic ' + this.Token() }
    })
      .pipe(
        map((resp: Response) => {
          return resp;
        })
      );
  }

  editUserPWD(model: Confidential) {
    return this._http.put(
      apiURL('/compte/modification-mot-de-passe'),
      this._passwordToServer(model), {
      headers: { Authorization: 'Basic ' + this.Token() }
    })
      .pipe(
        map((resp: Response) => {
          return resp;
        })
      );
  }

  resetUserPWD(model: User) {
    return this._http.put(
      apiURL('/compte/reinitialisation-mot-de-passe'),
      this._userToServer(model), {
      headers: { Authorization: 'Basic ' + this.Token() }
    })
      .pipe(
        map((resp: Response) => {
          return resp;
        })
      );
  }

  resetUserPWDS(model: Reset) {
    return this._http.put(
      apiURL('/compte/reinitialisation-mot-de-passe'),
      this._userResetToServer(model), {
      headers: { Authorization: 'Basic ' + this.Token() }
    })
      .pipe(
        map((resp: Response) => {
          return resp;
        })
      );
  }
  // Delete
  delAgence(id) {
    return this._http.delete(apiURL('/agence/' + id), {
      headers: { Authorization: 'Basic ' + this.Token() }
    });
  }
  deleteUserCompte(login) {
    return this._http.delete(apiURL('/agence/' + login), {
      headers: { Authorization: 'Basic ' + this.Token() }
    });
  }

  deleteOtherUser(id) {
    return this._http.delete(apiURL('/autre-utilisateur/' + id), {
      headers: { Authorization: 'Basic ' + this.Token() }
    });
  }

  deleteCaissier(id) {
    return this._http.delete(apiURL('/caissier/' + id), {
      headers: { Authorization: 'Basic ' + this.Token() }
    });
  }

  deleteCPE(id) {
    return this._http.delete(apiURL('/cpe/' + id), {
      headers: { Authorization: 'Basic ' + this.Token() }
    });
  }

  deleteClient(id) {
    return this._http.delete(apiURL('/client/supprimer/' + id), {
      headers: { Authorization: 'Basic ' + this.Token() }
    });
  }
}
