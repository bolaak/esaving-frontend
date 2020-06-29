import {Model} from './model';

export class User extends Model {
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
    codeRole?: string;

    static fromJSON(data: any) {
        if (typeof data === 'string') {
            data = JSON.parse(data);
        }

        const user = new User();
        user.referenceUtilisateur = data.referenceUtilisateur;
        user.dateCreation = new Date(data.dateCreation);
        user.login = data.login;
        user.password = data.password;
        user.firstLogin = data.firstLogin;
        user.statut = data.statut;
        user.nom = data.nom;
        user.prenom = data.prenom;
        user.sexe = data.sexe;
        user.photo = data.photo;
        user.telephone = data.telephone;
        user.profilUtilisateur = data.profilUtilisateur;
        user.idAgence = data.idAgence;
        user.codeRole = data.codeRole;

        return user;
    }
}

// {
//     "token": "YWRtaW46YWRtaW5hZG1pbg==",
//     "utilisateur":{
//     "idUtilisateur": 1,
//     "dateCreation": "2019-07-30",
//     "login": "admin",
//     "password": "F6FDFFE48C908DEB0F4C3BD36C032E72",
//     "firstLogin": "0",
//     "statut": "actif",
//     "nom": "MEDOATINSA",
//     "prenom": "Augustin",
//     "sexe": "Masculin",
//     "photo": null,
//     "telephone": "67212889",
//     "profilUtilisateur": null,
//     "idAgence": 0
//     },