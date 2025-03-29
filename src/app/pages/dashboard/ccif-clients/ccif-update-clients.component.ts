import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { ApiProviders } from 'src/app/providers/api-providers.service';
import { DialogComponent } from 'src/app/components/dialog-component';
import { MatSnackBar, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { User } from '../../../models/user';
import { Agences } from '../../../models/agence';
import { Roles } from '../../../models/roles';
import { Client } from '../../../models/client';
import Swal from 'sweetalert2';

declare let $: any;
@Component({
    selector: 'app-up-ccif-clients',
    templateUrl: './ccif-update-clients.component.html',
    styleUrls: ['./ccif-clients.component.css']
})
export class CcifUpdateClientsComponent extends DialogComponent implements OnInit {
    model = new Client();
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
        public dialogRef: MatDialogRef<CcifUpdateClientsComponent>
    ) {
        super();
    }

    ngOnInit() {
        this.GetAction();
        this.model = this.data.data.data;
        // tslint:disable-next-line:radix
        this.model.id = parseInt(this.data.data.data.idClient);
    }

    save() {
        this._progress = true;

        this._api.addClient(this.model).subscribe(
            (resp: any) => {
                this._progress = false;
                // this._snackBar.open('Ajout Effectué!', 'Succès', {
                //     duration: 2000
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
        this._api.deleteClient(this.model.id).subscribe(
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
