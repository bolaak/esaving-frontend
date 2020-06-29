import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
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
  templateUrl: './user-image.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserImageComponent extends DialogComponent implements OnInit {
  Url = apiURL('/download/');   modelUser = new User();
  hide = true;
  model = new Confidential();
  users: User[] = [];
  @ViewChild('file') file: ElementRef;
  image_url;
  _editDialogRef: MatDialogRef<UserImageComponent>;
  zone = false; ancien: string; nouveau: string;
  _progress = false;

  constructor(
    private _api: ApiProviders,
    private router: Router,
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<UserImageComponent>,
    private _router: Router
  ) {
    super();
  }

  ngOnInit() {
    this.getCurrentAccount();
    const userid = localStorage.getItem('IdU');
    if (!userid) {
      this.router.navigate(['/dashboard']);
      return;
    }
    console.log(userid);
  }
  getCurrentAccount() {
    this._progress = true;
    this._api.currentAccount().subscribe((res: any) => {
      console.log(res);
      console.log(res.body.roles[0]);
      this.users = res.body;
      this.modelUser.login = res.body.login; this.modelUser.nom = res.body.nom; this.modelUser.prenom = res.body.prenom;
      this.modelUser.codeRole = res.body.roles[0].libelle; this.modelUser.sexe = res.body.sexe;
      this.modelUser.telephone = res.body.telephone; this.modelUser.referenceUtilisateur = res.body.referenceUtilisateur;
      this.modelUser.idAgence = res.body.agence.idAgence;
    }, (error) => {
      console.log(error);
      this._progress = false;
    }
    );
  }
  modifier() {
    this._api.editImage(this.modelUser).subscribe(
      (resp: any) => {
        this._progress = false;
        Swal.fire({
          type: 'success',
          title: 'Succès...',
          text: 'Photo de profile modifiée avec Succès',
          // footer: '<a href>Suivant</a>'
        });
        this.dialogRef.close();
        this.deconnexion();
      }, (error) => {
        console.log(error);
        this._progress = false;
        Swal.fire({
          type: 'error',
          title: 'Erreur lors de la modification...',
          text: error.error,
          // footer: '<a href>Vérifiez les infos SVP!!!</a>'
        });
      }
    );
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
                this.modelUser.photo = data.data;
                console.log(data.data);
            })
            .catch();
        }
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
