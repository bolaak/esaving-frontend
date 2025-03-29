import { Component, OnInit, Inject } from '@angular/core';
import { ApiProviders } from 'src/app/providers/api-providers.service';
import { url as apiURL } from '../../../function';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { DialogComponent } from 'src/app/components/dialog-component';
import { MatSnackBar, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Confidential } from 'src/app/models/confidential';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserDetailsComponent extends DialogComponent implements OnInit {
  imageUrl = apiURL('/download/');
  // JOUR = new Date();
  users: any[] = [];
  _progress = false;
  infoUsers: any; login: any; nom: any; prenom: any; sexe: any; contact: any; role: any; reference: any;
  _editDialogRef: MatDialogRef<UserDetailsComponent>;

  constructor(
    private _api: ApiProviders,
    private router: Router,
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<UserDetailsComponent>
  ) {
    super();
    }

  ngOnInit() {
    this.getCurrentAccount();
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
      console.log(res);
      console.log(res.body.roles[0]);
      this.users = res.body;
      this.login = res.body.login; this.nom = res.body.nom; this.prenom = res.body.prenom;
      this.role = res.body.roles[0].libelle; this.sexe = res.body.sexe; this.contact = res.body.telephone;
      this.infoUsers = res.body.roles[0]; this.reference = res.body.referenceUtilisateur;
      console.log(this.infoUsers.libelle);
    }, (error) => {
      console.log(error);
      this._progress = false;
    }
    );
  }

  fermer(): void {
    this._editDialogRef.close();
  }
}
