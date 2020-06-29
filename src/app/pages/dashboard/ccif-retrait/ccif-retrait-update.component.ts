import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { ApiProviders } from 'src/app/providers/api-providers.service';
import { DialogComponent } from 'src/app/components/dialog-component';
import { MatSnackBar, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { User } from '../../../models/user';
import { Agences } from '../../../models/agence';
import { Roles } from '../../../models/roles';
import { CcifUpdateUsersComponent } from '../ccif-users/ccif-update-users.component';
import { Subscribe } from 'src/app/models/souscription';
import { RetraitTontine } from 'src/app/models/retrait';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ccif-update-retrait',
  templateUrl: './ccif-retrait-update.component.html',
  styleUrls: ['./ccif-retrait.component.css']
})
export class CcifRetraitUpdateComponent extends DialogComponent implements OnInit {
    model = new RetraitTontine();
    agence: Agences[] = [];
    souscri: Subscribe[] = [];
    amount: any;
    roles: Roles[] = [];
    _progress = false;
    confirmer: String;
    ShowWindow: boolean;
    image_url;
    hide = true;
    hideen = true;
    idCompteTont: number;
    @ViewChild('file') file: ElementRef;
    constructor(
      private _api: ApiProviders,
      private _snackBar: MatSnackBar,
      @Inject(MAT_DIALOG_DATA) public data: any,
      public dialogRef: MatDialogRef<CcifRetraitUpdateComponent>
    ) {
      super();
    }

    ngOnInit() {
      this.getSouscriTontine();
      this.model = this.data.data.data;
      // tslint:disable-next-line:radix
      this.model.id = parseInt(this.data.data.data.idUtilisateur);
    }

    save() {
      this._progress = true;
      Swal.fire({
        title: 'Etes vous sûr?',
        text: 'De vouloir effectuer cette opération',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Oui, je retire!'
      }).then((result) => {
        if (result.value) {
          this._api.retrait(this.model).subscribe(
            (resp: any) => {
              this._progress = false;
              Swal.fire(
                'Retirer!',
                'Le montant a été retiré.',
                'success'
              );
              this.dialogRef.close();
            }, (error) => {
              console.log(error);
              this._progress = false;
              Swal.fire(
                'Echec!',
                'Retrait non effectué',
                'error'
              );
            }
          );

        }
      });
    }
    // save() {
    //   console.log(this.model);
    // }


    // GetAction() {
    //   if (this.data.data.actions === true) {
    //     this.ShowWindow = false;
    //   } else {
    //     console.log('delete');
    //     this.ShowWindow = true;
    //   }
    // }

    async getSouscriTontine() {
      this._api.getCpteTontByCaiss().subscribe((res: any) => {
        this.souscri = res.body.data;
        console.log(this.souscri);

      }, (error) => {
        console.log(error);
        this._progress = false;
        this._snackBar.open(error.error, 'Echèc', {
          duration: 2000
        });
      }
      );
    }

    async getAmountMise() {
      this._api.getAmount(this.model.idCompteTontine).subscribe((res: any) => {
        console.log(res.body.totalRetirable);
        this.amount = res.body.data;
        this.model.montantRetrait = res.body.totalRetirable;

      }, (error) => {
        console.log(error);
        this._progress = false;
        this._snackBar.open(error.error, 'Echèc', {
          duration: 2000
        });
      }
      );
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
