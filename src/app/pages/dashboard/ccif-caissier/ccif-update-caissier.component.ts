import { Component, OnInit, ViewChild, ElementRef, Inject} from '@angular/core';
import { DialogComponent } from 'src/app/components/dialog-component';
import { ApiProviders } from 'src/app/providers/api-providers.service';
import { Caissier } from 'src/app/models/caissier';
import { Agences } from 'src/app/models/agence';
import { Roles } from 'src/app/models/roles';
import { MatSnackBar, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ccif-update-caissier',
  templateUrl: './ccif-update-caissier.component.html',
  styleUrls: ['./ccif-caissier.component.css']
})
export class CcifUpdateCaissierComponent extends DialogComponent implements OnInit {
    model = new Caissier();
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
      public dialogRef: MatDialogRef<CcifUpdateCaissierComponent>
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
        this._api.addCaissier(this.model).subscribe(
          (resp: any) => {
            this._progress = false;
            // this._snackBar.open('Ajout Effectué!', 'Succès', {
            //   duration: 2000
            // });
          Swal.fire({
            type: 'success',
            title: 'Ajout ...',
            text: 'Effectué avec Succès',
            footer: '<a href>Suivante</a>'
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
              footer: '<a href>Echèc</a>'
            });
            this.dialogRef.close();
          }
        );
      }
    }

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
                  console.log(data);
              })
              .catch();
          }
      }
  }

    async getDatas() {
      console.log('Agences');
      this._api.getAgences().subscribe((res: any) => {
        this.agence = res.body.data;
        console.log(this.agence);

      }, (error) => {
        console.log(error);
        this._progress = false;
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
      this._api.deleteCaissier(this.model.id).subscribe(
        data => {
          this._progress = false;
          // this._snackBar.open('Caissier Supprimé !', 'Succès', {
          //   duration: 2000
          // });
        Swal.fire({
          type: 'success',
          title: 'Suppression ...',
          text: 'Effectué avec Succès',
          footer: '<a href>Cliquer pour continuer</a>'
        });
          this.dialogRef.close();
        },
        err => {
          Swal.fire({
            type: 'error',
            title: 'Opps ...',
            text: 'Hummm Erreur',
            footer: '<a href>Echèc</a>'
          });
        }
      );
    }

}
