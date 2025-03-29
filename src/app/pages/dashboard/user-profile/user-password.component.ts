import { Component, OnInit, Inject } from '@angular/core';
import { ApiProviders } from 'src/app/providers/api-providers.service';
import { url as apiURL } from '../../../function';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { DialogComponent } from 'src/app/components/dialog-component';
import { MatSnackBar, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Confidential } from 'src/app/models/confidential';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-pwd',
  templateUrl: './user-password.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserPasswordComponent extends DialogComponent implements OnInit {
  Url = apiURL('/download/');
  hide = true;
  model = new Confidential();
  users: User[] = [];
  _editDialogRef: MatDialogRef<UserPasswordComponent>;
  zone = false; ancien: string; nouveau: string;
  _progress = false;

  constructor(
    private _api: ApiProviders,
    private router: Router,
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<UserPasswordComponent>,
    private _router: Router
  ) {
    super();
  }

  ngOnInit() {
    console.log('Cool');
    const userid = localStorage.getItem('IdU');
    if (!userid) {
      this.router.navigate(['/dashboard']);
      return;
    }
    console.log(userid);
  }

  modifier() {
    this._progress = true;
    if (this.model.oldPassword !== this.ancien) {
      this._progress = false;
      Swal.fire({
        type: 'error',
        title: 'Désolé ..!',
        text: 'Ancien mot de passe incorrect',
        // footer: '<a href>Réessayez svp ..!</a>'
      });
    } else if (this.model.newPassword !== this.nouveau) {
      this._progress = false;
      Swal.fire({
        type: 'error',
        title: 'Désolé ..!',
        text: 'Nouveau mot de passe incorrect',
        // footer: '<a href>Réessayez svp ..!</a>'
      });
    } else if (this.model.oldPassword === this.model.newPassword) {
      this._progress = false;
      Swal.fire({
        type: 'error',
        title: 'Désolé ..!',
        text: 'Entrer un nouveau code autre que l\'ancien',
        // footer: '<a href>Réessayez svp ..!</a>'
      });
    } else {
      this._api.editUserPWD(this.model).subscribe(
        (resp: any) => {
          this._progress = false;
          this._snackBar.open('Opération effectuée!', 'Succès', {
            duration: 2000
          });
          Swal.fire({
            type: 'success',
            title: 'Succès',
            text: 'Mot de passe changé',
            // footer: '<a href>Suivante</a>'
          });
          this.deconnexion();
          this.dialogRef.close();
        }, (error) => {
          console.log(error);
          this._progress = false;
          Swal.fire({
            type: 'error',
            title: 'Désolé ..!',
            text: error.error,
            // footer: '<a href>Réessayez svp ..!</a>'
          });
          this.dialogRef.close();
        }
      );
    }
  }

  deconnexion() {
    localStorage.clear();
    this._router.navigate(['/login']);
  }

  fermer(): void {
    this._editDialogRef.close();
  }
}
