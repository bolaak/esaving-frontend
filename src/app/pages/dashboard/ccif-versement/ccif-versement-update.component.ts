import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { ApiProviders } from 'src/app/providers/api-providers.service';
import { DialogComponent } from 'src/app/components/dialog-component';
import { MatSnackBar, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Agences } from '../../../models/agence';
import { Roles } from '../../../models/roles';
import { Subscribe } from 'src/app/models/souscription';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ccif-update-verser',
  templateUrl: './ccif-versement-update.component.html',
  styleUrls: ['./ccif-versement.component.css']
})
export class CcifVersementUpdateComponent extends DialogComponent implements OnInit {
    model = new Subscribe();
    agence: Agences[] = [];
    roles: Roles[] = [];
    _progress = false;
    confirmer: String;
    ShowWindow: boolean;
    image_url;
    hide = true;
    hideen = true;
    @ViewChild('file') file: ElementRef;
    constructor(
      private _api: ApiProviders,
      private _snackBar: MatSnackBar,
      @Inject(MAT_DIALOG_DATA) public data: any,
      public dialogRef: MatDialogRef<CcifVersementUpdateComponent>
    ) {
      super();
    }

    ngOnInit() {
      this.GetAction();
      this.getDatas();
      this.getRoles();
      this.model = this.data.data.data;
      // tslint:disable-next-line:radix
      this.model.id = parseInt(this.data.data.data.idUtilisateur);
    }

    save() {
      this._progress = true;
      Swal.fire({
        title: 'Etes vous sûr?',
        text: 'De vouloir effectuer ce versement..!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Oui'
      }).then((result) => {
        if (result.value) {
          this._api.souscription(this.model).subscribe(
            (resp: any) => {
              this._progress = false;
              Swal.fire({
                type: 'success',
                title: 'versement ...',
                text: 'Effectuée avec Succès',
                footer: '<a href>Suivante</a>'
              });
              this.dialogRef.close();
            }, (error) => {
              console.log(error);
              this._progress = false;
              Swal.fire({
                type: 'error',
                title: 'Collecte ...',
                text: error.error,
                footer: '<a href>Suivante</a>'
              });
            }
          );
        }
      });
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
