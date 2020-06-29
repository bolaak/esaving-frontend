import { Component, OnInit, Inject } from '@angular/core';
import { ApiProviders } from 'src/app/providers/api-providers.service';
import { Agences } from 'src/app/models/agence';
import { DialogComponent } from 'src/app/components/dialog-component';
import { MatSnackBar, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ccif-update-agence',
  templateUrl: './ccif-update-agence.component.html',
  styleUrls: ['./ccif-agence.component.css']
})
export class CcifUpdateAgenceComponent extends DialogComponent implements OnInit {
  model = new Agences();
  _progress = false;
  ShowWindow: boolean;
  constructor(
    private _api: ApiProviders,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CcifUpdateAgenceComponent>
  ) {
    super();
  }

  ngOnInit() {
    this.GetAction();
    this.model = this.data.data.data;
    // tslint:disable-next-line:radix
    this.model.id = parseInt(this.data.data.data.idAgence);
  }

  save() {
    this._progress = true;

    (this.model.id ? this._api.editAgence(this.model) : this._api.create(this.model)).subscribe(
      (resp: any) => {
        this._progress = false;
        if (this.model.id) {
          Swal.fire({
            type: 'success',
            title: 'Succès ...',
            text: 'Modification effectué avec Succès',
            // footer: '<a href>Suivante</a>'
          });
          this.dialogRef.close();
        } else {
        Swal.fire({
          type: 'success',
          title: 'Succès ...',
          text: 'Ajout effectué avec Succès',
          // footer: '<a href>Suivante</a>'
        });
          this.dialogRef.close();
        }
      }, (error) => {
        console.log(error);
        this._progress = false;
        Swal.fire({
          type: 'error',
          title: 'Désolé ...',
          text: error.error,
          // footer: '<a href>Echèc</a>'
        });
      }
    );
  }

  Dataloading() {
    this._progress = true;
    this._api.agenceByID(this.data.data.id).subscribe((resp: any) => {
      this._progress = false;
      console.log(resp);
      this.model = resp;
    });
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
    this._progress = true;
    this._api.delAgence(this.model.id).subscribe(
      data => {
        this._progress = false;
        this._snackBar.open('Agence Supprimée !', 'Succès', {
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
