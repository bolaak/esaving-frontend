import { Component, OnInit, Inject, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ApiProviders } from 'src/app/providers/api-providers.service';
import { DialogComponent } from 'src/app/components/dialog-component';
import { MatSnackBar, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Roles } from '../../../models/roles';
import { Caissier } from '../../../models/caissier';
import { Collecte } from 'src/app/models/collecte';
import { Subscribe } from 'src/app/models/souscription';
import Swal from 'sweetalert2';

declare let $: any;
declare let curencyPipe: any;
@Component({
  selector: 'app-update-ccif-collecte',
  templateUrl: './ccif-update-collecte.component.html',
  styleUrls: ['./ccif-collecte.component.css']
})
export class CcifUpdateCollecteComponent extends DialogComponent
  implements OnInit, AfterViewInit {
  model = new Collecte();
  souscri: Subscribe[] = [];
  roles: Roles[] = [];
  caissier: Caissier[] = [];
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
    public dialogRef: MatDialogRef<CcifUpdateCollecteComponent>
  ) {
    super();
  }

  ngOnInit() {
    this.getSouscriTontine();
    this.GetAction();
    this.model = this.data.data.data;
    // tslint:disable-next-line:radix
    this.model.id = parseInt(this.data.data.data.idUtilisateur);
  }

  ngAfterViewInit() {
    curencyPipe();
  }

  save() {
    this.convert(this.model.dateCollecte);
    this._progress = true;
    Swal.fire({
      title: 'Etes vous sûr?',
      text: 'De vouloir effectuer cette opération',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, je veux collecter!'
    }).then(result => {
      if (result.value) {
        this._api.newCollecte(this.model).subscribe(
          (resp: any) => {
            console.log(resp);
            console.log('success');
            this._progress = false;
            Swal.fire({
              type: 'success',
              title: 'Collecte ...',
              text: 'Effectuée avec Succès',
              // footer: '<a href>Suivante</a>'
            });
            this.dialogRef.close();
          },
          error => {
            console.log(error);
            this._progress = false;
            console.log('error');
            Swal.fire({
              type: 'error',
              title: 'Erreure Système',
              text: error.error,
              // footer: '<a href>Le système à rencontrer une erreur</a>'
            });
          }
        );
      }
    });
  }

  async getSouscriTontine() {
    this._progress = true;
    this._api.getClientSouscris().subscribe(
      (res: any) => {
        this._progress = false;
        this.souscri = res.body.data;
        console.log(this.souscri);
      },
      error => {
        this._progress = true;
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
    this._api.deleteCPE(this.model.id).subscribe(
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

  convert(z) {
    const now = new Date(z);
    const y = now.getFullYear();
    const m = now.getMonth() + 1;
    const d = now.getDate();

    const finalconv = '' + y + '-' + (m < 10 ? '0' : '') +  m + '-' + (d < 10 ? '0' : '') + d;
    return (finalconv);
  }
}
