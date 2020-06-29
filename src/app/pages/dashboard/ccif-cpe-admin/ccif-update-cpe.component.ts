import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { ApiProviders } from 'src/app/providers/api-providers.service';
import { DialogComponent } from 'src/app/components/dialog-component';
import { MatSnackBar, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Agences } from '../../../models/agence';
import { Roles } from '../../../models/roles';
import { Collecteur } from '../../../models/cpe';
import Swal from 'sweetalert2';
import { Caissier } from '../../../models/caissier';

declare let $: any;
@Component({
  selector: 'app-ccif-cpe-admin',
  templateUrl: './ccif-update-cpe.component.html',
  styleUrls: ['./ccif-cpe.component.css']
})
export class CcifUpdateCpeAdminComponent extends DialogComponent implements OnInit {
  model = new Collecteur();
  agence: Agences[] = [];
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
    public dialogRef: MatDialogRef<CcifUpdateCpeAdminComponent>
  ) {
    super();
  }

  ngOnInit() {
    this.getCaissier();
    this.getDatas();
    this.GetAction();
    this.model = this.data.data.data;
    // tslint:disable-next-line:radix
    this.model.id = parseInt(this.data.data.data.idUtilisateur);
  }

  save() {
    this._progress = true;
    if (this.model.password !== this.confirmer) {
      this._progress = false;
        // this._snackBar.open('Ajout Effectué!', 'Succès', {
        //   duration: 2000
        // });
        Swal.fire({
          type: 'error',
          title: 'Opps ...',
          text: 'Mots de passe non conformes',
          // footer: '<a href>Saisissez des mots de passe identiques</a>'
        });
    } else {
      this._api.addCPE(this.model).subscribe(
        (resp: any) => {
          this._progress = false;
          // this._snackBar.open('Ajout Effectué!', 'Succès', {
          //   duration: 2000
          // });
        Swal.fire({
          type: 'success',
          title: 'Ajout ...',
          text: 'Effectué avec Succès',
          // footer: '<a href>Suivante</a>'
        });
          this.dialogRef.close();
        }, (error) => {
          console.log(error);
          this._progress = false;
          // this._snackBar.open(error.error, 'Echèc', {
          //   duration: 2000
          // });
        Swal.fire({
          type: 'error',
          title: 'Opps ...',
          text: error.error,
          // footer: '<a href>Echèc</a>'
        });
          this.dialogRef.close();
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
        // this._snackBar.open('Ajout Effectué!', 'Succès', {
        //   duration: 2000
        // });
        } else {
            this.image_url = this.file.nativeElement.files[0].name;
            this._api.sendFileToServer(this.file.nativeElement.files[0])
            .then((data: any) => {
                // this.progress = false;
                this.model.photo = data.data;
                console.log(data);
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
      // this._snackBar.open(error.error, 'Echèc', {
      //   duration: 2000
      // });
        Swal.fire({
          type: 'error',
          title: 'Opps ...',
          text: error.error,
          footer: '<a href>Echèc</a>'
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
      // this._snackBar.open(error.error, 'Echèc', {
      //   duration: 2000
      // });
        Swal.fire({
          type: 'error',
          title: 'Opps ...',
          text: error.error,
          footer: '<a href>Echèc</a>'
        });
    }
    );
  }

  async getCaissier() {
    this._api.getCaissiers().subscribe((res: any) => {
      console.log(res.body.data);
      this.caissier = res.body.data;

    }, (error) => {
      console.log(error);
      this._progress = false;
      // this._snackBar.open(error.error, 'Echèc', {
      //   duration: 2000
      // });
        Swal.fire({
          type: 'error',
          title: 'Opps ...',
          text: error.error,
          footer: '<a href>Echèc</a>'
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
        // this._snackBar.open('Utilisateur Supprimé !', 'Succès', {
        //   duration: 2000
        // });
        Swal.fire({
          type: 'success',
          title: 'Suppression ...',
          text: 'Effectué avec Succès',
          footer: '<a href>Suivante</a>'
        });
        this.dialogRef.close();
      },
      err => {
        // this._snackBar.open('Humm Erreur !', 'Echèc', {
        //   duration: 2000
        // });
        Swal.fire({
          type: 'error',
          title: 'Opps ...',
          text: 'Humm Erreur !',
          footer: '<a href>Echèc</a>'
        });
      }
    );
  }

}
