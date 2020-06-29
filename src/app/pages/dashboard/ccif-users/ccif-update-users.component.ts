import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { ApiProviders } from 'src/app/providers/api-providers.service';
import { DialogComponent } from 'src/app/components/dialog-component';
import { MatSnackBar, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { User } from '../../../models/user';
import { Agences } from '../../../models/agence';
import { Roles } from '../../../models/roles';
import Swal from 'sweetalert2';

declare let $: any;
@Component({
  selector: 'app-up-ccif-users',
  templateUrl: './ccif-update-users.component.html',
  styleUrls: ['./ccif-users.component.css']
})
export class CcifUpdateUsersComponent extends DialogComponent implements OnInit {
  model = new User();
  agence: Agences[] = [];
  roles: Roles[] = [];
  _progress = false;
  confirmer: String;
  ShowWindow: boolean;
  image_url;
  profile: any; disabled = true;
  hide = true;
  hideen = true;
  @ViewChild('file') file: ElementRef;
  constructor(
    private _api: ApiProviders,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CcifUpdateUsersComponent>
  ) {
    super();
  }

  ngOnInit() {
    this.getDatas();
    this.getRoles();
    this.GetAction();
    this.model = this.data.data.data;
    // tslint:disable-next-line:radix
    this.model.id = parseInt(this.data.data.data.idUtilisateur);
  }

  CHOICE() {
    if (this.profile === 'DG') {
      console.log('DG');
      // tslint:disable-next-line:no-unused-expression
      this.model.codeRole = 'dg';
      console.log(this.model.codeRole);
      this.disabled = true;
    } else {
      console.log('CEX');
      // tslint:disable-next-line:no-unused-expression
      this.model.codeRole = 'cex';
      console.log(this.model.codeRole);
      this.disabled = false;
    }
  }
  save() {
    this._progress = true;
    if (this.model.password !== this.confirmer) {
      Swal.fire({
        type: 'error',
        title: 'Opps ...',
        text: 'Les mots de passe ne sont pas identiques',
        // footer: '<a href>Echèc</a>'
      });
    } else {
    this._api.addNewOtherUser(this.model).subscribe(
      (resp: any) => {
        this._progress = false;
        Swal.fire({
          type: 'success',
          title: 'Oops...',
          text: 'Ajouter avec Succès',
          footer: '<a href>Suivant</a>'
        });
        this.dialogRef.close();
      }, (error) => {
        console.log(error);
        this._progress = false;
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: error.error,
          footer: '<a href>Vérifiez les infos SVP!!!</a>'
        });
      }
    );
    }
  }
  // save() {
  //   console.log(this.model);
  // }

  onChangeImag() {
    this._progress = true;
    console.log(this.file);
    if (this.file.nativeElement.files && this.file.nativeElement.files.length) {
        this._progress = false;
        if (!/\.(gif|jpg|jpeg|tiff|png)$/i.test(this.file.nativeElement.files[0].name)) {
            this._progress = false;
            // alert('Format de donnée Incorrect');
        this._snackBar.open('Ajout Effectué!', 'Succès', {
          duration: 2000
        });
        } else {
            this.image_url = this.file.nativeElement.files[0].name;
            this._api.sendFileToServer(this.file.nativeElement.files[0])
            .then((data: any) => {
                // this.progress = false;
                this.model.photo = data.data;
                console.log(data.data);
            })
            .catch();
        }
    }
  }

  async getDatas() {
    this._api.getAgences().subscribe((res: any) => {
      this.agence = res.body.data;
      console.log(this.agence);

    }, (error) => {
      console.log(error);
      this._progress = false;
      this._snackBar.open(error.error, 'Echèc', {
        duration: 2000
      });
    }
    );
  }

  async getRoles() {
    this._api.getROLES().subscribe((res: any) => {
      console.log(res.body);
      this.roles = res.body;

    }, (error) => {
      console.log(error);
      this._progress = false;
      this._snackBar.open(error.error, 'Echèc', {
        duration: 2000
      });
    }
    );
  }

  GetAction() {
    if (this.data.data.actions === true) {
      this.ShowWindow = false;
    } else {
      console.log('delete');
      this.ShowWindow = true;
    }
  }

  DoDel() {
    console.log(this.model.id);
    this._progress = true;
    this._api.deleteOtherUser(this.model.id).subscribe(
      data => {
        this._progress = false;
        this._snackBar.open('Utilisateur Supprimé !', 'Succès', {
          duration: 2000
        });
        this.dialogRef.close();
      },
      err => {
        this._snackBar.open('Humm Erreur !', 'Echèc', {
          duration: 2000
        });
      }
    );
  }

}
