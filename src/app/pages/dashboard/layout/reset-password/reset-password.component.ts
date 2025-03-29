import { Component, OnInit, Inject } from '@angular/core';
import { ApiProviders } from 'src/app/providers/api-providers.service';
import { url as apiURL } from '../../../../function';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { DialogComponent } from 'src/app/components/dialog-component';
import { MatSnackBar, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import Swal from 'sweetalert2';
import { Reset } from 'src/app/models/reset';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent extends DialogComponent implements OnInit {
  Url = apiURL('/download/');
  hide = true; login: any; password: any; nouveau: any;
  model = new Reset();
  users: User[] = [];
  _editDialogRef: MatDialogRef<ResetPasswordComponent>;
  zone = false; ancien: string;
  _progress = false;

  constructor(
    private _api: ApiProviders,
    private router: Router,
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<ResetPasswordComponent>,
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

  reset() {
    this._progress = true;
    if (this.model.password !== this.nouveau) {
      this._progress = false;
      Swal.fire({
        type: 'error',
        title: 'Désolé ..!',
        text: 'mots de passe non identiques',
        // footer: '<a href>Réessayez svp ..!</a>'
      });
    } else {
      this._api.resetUserPWDS(this.model).subscribe(
        (resp: any) => {
          this._progress = false;
          Swal.fire({
            type: 'success',
            title: 'Succès',
            text: 'Mot de passe réinitialisé',
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
