import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ApiProviders } from 'src/app/providers/api-providers.service';
import { url as apiURL } from '../../../function';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
declare let sidebar: any;
import { EditDialogService } from 'src/app/providers/dialogconfig';
import { MatDialogRef } from '@angular/material';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
@Component({
  selector: 'app-layout',
  templateUrl: 'layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, AfterViewInit {
  imageUrl = apiURL('/download/');
  JOUR = new Date();
  users: any[] = [];
  _progress = false;
  infoUsers: any; picture: any; nom: any; prenom: any; agence: any; libelle: any;
  zone = false;
  _editDialogRef: MatDialogRef<ResetPasswordComponent>;
  constructor(
    private _api: ApiProviders,
    private _bottonSheet: MatBottomSheet,
    private _router: Router,
    private _editDialogService: EditDialogService<ResetPasswordComponent>,
  ) { }

  ngOnInit() {
    this.getCurrentAccount();
    console.log('Cool');
  }

  ngAfterViewInit() {
    sidebar();
  }

  getCurrentAccount() {
    this._api.currentAccount().subscribe((res: any) => {
      if (res.body.roles) {
      window.localStorage.setItem('789', JSON.stringify(res.body.roles));
      } else {
        return;
      }
      if (res.body.roles[0].codeRolePredefini === 'admin' && res.body.roles[0].codeRolePredefini === 'dg' ) {
        this.zone = false;
        console.log('Vraie');
      } else {
        this.zone = true;
        console.log('faux');
      }
      console.log(res.body);
      console.log(res.body.roles[0]);
      this.users = res.body;
      this.picture = res.body.photo; this.nom = res.body.nom; this.prenom = res.body.prenom;
      this.agence = res.body.agence;
      this.infoUsers = res.body.roles[0];
      console.log(res.body.roles[0].libelle);
      window.localStorage.setItem('IdU', res.body.idUtilisateur);
      window.localStorage.setItem('agenceID', res.body.idAgence);
    }, (error) => {
      console.log(error);
      this._progress = false;
    }
    );
  }

  openButtonSheet() {
    // tslint:disable-next-line: no-use-before-declare
    this._bottonSheet.open(BottomSheetOverviewExampleSheet);
  }

  deconnexion() {
    this._progress = true;
    Swal.fire({
      title: 'Etes vous sûr?',
      text: 'de vouloir vous déconnecter..!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non'
    }).then((result) => {
      if (result.value) {
        localStorage.clear();
        this._router.navigate(['/login']);
      }
    });
  }

  open() {
    this._editDialogRef = this._editDialogService.open(ResetPasswordComponent);
}
}

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: './bottom-sheet-overview-example-sheet.html',
})

// tslint:disable-next-line:component-class-suffix
export class BottomSheetOverviewExampleSheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) { }

  openLink(event: MouseEvent): void {
    // console.log(event);
    localStorage.clear();
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
