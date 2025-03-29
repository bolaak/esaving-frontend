import { Component, OnInit } from '@angular/core';
import { ApiProviders } from 'src/app/providers/api-providers.service';
import { url as apiURL } from '../../../function';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { EditDialogService } from 'src/app/providers/dialogconfig';
import { MatDialogRef } from '@angular/material';
import { UserPasswordComponent } from './user-password.component';
import { UserDetailsComponent } from './user-details.component';
import { UserImageComponent } from './user-image.component';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
    Url = apiURL('/download/');

    model = new User();
    users: User[] = [];
    _editDialogRef: MatDialogRef<UserPasswordComponent>;
    _editDialogReff: MatDialogRef<UserDetailsComponent>;
    _editDialogRefff: MatDialogRef<UserImageComponent>;
    zone = false; img: any; nom: any; prenom: any; login: any; tel: any; role: any; agence: any; genre: any;
    _progress = false;
    adminImage = 'https://static.vecteezy.com/system/resources/previews/000/290/093/non_2x/administration-vector-icon.jpg';
    constructor(
        private _api: ApiProviders,
        private router: Router,
        private _editDialogService: EditDialogService<UserPasswordComponent>,
        private _editDialogComp: EditDialogService<UserDetailsComponent>,
        private _editDialogCompo: EditDialogService<UserImageComponent>
    ) { }

    ngOnInit() {
        this.getCurrentAccount();
        console.log('Cool');
        const userid = localStorage.getItem('IdU');
        if (!userid) {
            this.router.navigate(['/dashboard']);
            return;
        }
        console.log(userid);
    }


    getCurrentAccount() {
        this._progress = true;
        this._api.currentAccount().subscribe((res: any) => {
            this._progress = false;
            console.log(res.body);
            this.users = res.body;
            console.log(this.users);
            window.localStorage.setItem('IdU', res.body.idUtilisateur);
            this.role = res.body.roles[0].libelle;
            this.img = res.body.photo; this.nom = res.body.nom;
            this.prenom = res.body.prenom; this.login = res.body.login;
            this.tel = res.body.telephone; this.agence = res.body.agence.nomAgence;
            this.genre = res.body.sexe;
            if (this.role === 'Administrateur') {
                this.zone = true;
            } else {
                this.zone = false;
            }
        }, (error) => {
            console.log(error);
            this._progress = false;
        }
        );
    }

    open() {
        this._editDialogRef = this._editDialogService.open(UserPasswordComponent);
    }

    details() {
        this._editDialogReff = this._editDialogComp.open(UserDetailsComponent, { width: '200px' });
    }

    image() {
        this._editDialogRefff = this._editDialogCompo.open(UserImageComponent, { width: '200px' });
    }

}