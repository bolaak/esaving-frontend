import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ApiProviders } from '../../../providers/api-providers.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { pageSizeOptions, itemsPerPage } from '../../../const';
import { MatSnackBar } from '@angular/material';
import { EditDialogService } from 'src/app/providers/dialogconfig';
import { url as apiURL } from '../../../function';
import { CcifUpdateSubscribeComponent } from './ccif-update-subscribe.component';
import { Collecteur } from 'src/app/models/cpe';
import { Subscribe } from 'src/app/models/souscription';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ccif-souscrits',
  templateUrl: './ccif-sous-encour.component.html',
  styleUrls: ['./ccif-subscribe.component.css']
})
export class CcifSousEncourComponent implements OnInit, AfterViewInit {
  imageUrl = apiURL('/download/');
  statut: string; id_cpe: number;
  collecteur: Collecteur[] = [];
  souscri: Subscribe[] = [];
  displayedColumns: string[] = ['photo', 'ref', 'nom', 'prenom', 'contact', 'mise', 'montant', 'debut', 'fin'];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);
  data = new MatTableDataSource<any>([undefined]);
  @ViewChild(MatPaginator) private _matPaginator: MatPaginator;
  private _pageEvent = new PageEvent();
  _editDialogRef: MatDialogRef<CcifUpdateSubscribeComponent>;
  _editDialogRe: MatDialogRef<CcifUpdateSubscribeComponent>;
  _progress = false;
  constructor(
    private _api: ApiProviders,
    private _snackBar: MatSnackBar,
    public _dialog: MatDialog,
    private _editDialogService: EditDialogService<CcifUpdateSubscribeComponent>,
    private _editDialogServic: EditDialogService<CcifUpdateSubscribeComponent>
  ) {
    this._pageEvent.pageIndex = 1;
    this._pageEvent.pageSize = itemsPerPage;
  }

  ngOnInit() {
    // tslint:disable-next-line:no-unused-expression
    this.statut === 'TOUT';
    this.getMyCPE();
  }

  applyFilter(filterValue: string) {
    this.data.filter = filterValue.trim().toLowerCase();
    if ((this.data.filter = filterValue)) {
      this._progress = false;
    }
  }
     ngAfterViewInit() {
    setTimeout(() => {
      this._matPaginator.pageIndex = 0;
      this._matPaginator.pageSize = itemsPerPage;
      this._matPaginator.pageSizeOptions = pageSizeOptions;
    });
  }

  async getDatas() {
    this._progress = true;
    this._api.getTontineTout(this.id_cpe, this.statut).subscribe((res: any) => {
      this._progress = false;
      this.data = res.body.data;
      console.log(res.body.data);

      if (res.body.metadata === 0) {
        Swal.fire({
          type: 'error',
          title: 'Désolé...',
          text: 'Aucune souscription pour ce collecteur',
          // footer: '<a href>Choisir un collecteur élligible</a>'
        });
      }

    }, (error) => {
      this._progress = false;
      Swal.fire({
        type: 'error',
        title: 'Désolé...',
        text: error.error,
        // footer: '<a href>Choisir un collecteur élligible</a>'
      });
    }
    );
  }

  async getTontine() {
    this._api.getTontineTout(this.id_cpe, this.statut).subscribe((res: any) => {
      this.souscri = res.body.data;
      console.log(this.souscri);

    }, (error) => {
      console.log(error);
      this._progress = false;
      Swal.fire({
        type: 'error',
        title: 'Désolé...',
        text: error.error,
        // footer: '<a href>Choisir un collecteur élligible</a>'
      });
    }
    );
  }

  private _onDialogClosed(data: any) {
    if (data === true) {
      this.getDatas();
    }
  }

  page(e: PageEvent) {
    this._pageEvent = e;
    this._pageEvent.pageIndex++;
    this.getDatas();
  }

  async getMyCPE() {
    this._progress = true;
    this._api.getCpes().subscribe((res: any) => {
      console.log(res);
      this._progress = false;
      this.collecteur = res.body.data;
      console.log(res);

    }, (error) => {
      console.log(error);
      this._progress = false;
      this._snackBar.open(error.error, 'Echèc', {
        duration: 2000
      });
    }
    );
  }

  // callToADD(data?: any) {
  //   this._editDialogRef = this._editDialogService.open(CcifUpdateSubscribeComponent, data);
  //   this._editDialogRef.afterClosed().subscribe(result => {
  //     this.getDatas();
  //   });
  // }

  // callToEDIT(data) {
  //   this._editDialogRe = this._editDialogServic.open(CcifUpdateSubscribeComponent, { data: data });
  //   this._editDialogRe.disableClose = true;
  //   this._editDialogRe.afterClosed().subscribe(result => {
  //     this.getDatas();
  //   });
  // }

}

