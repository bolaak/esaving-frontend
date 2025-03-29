import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ApiProviders } from '../../../providers/api-providers.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { pageSizeOptions, itemsPerPage } from '../../../const';
import { MatSnackBar } from '@angular/material';
import { EditDialogService } from 'src/app/providers/dialogconfig';
import { url as apiURL } from '../../../function';
import { CcifVersementUpdateComponent } from './ccif-versement-update.component';
import { Collecteur } from '../../../models/cpe';
import { Collecte } from '../../../models/collecte';
import Swal from 'sweetalert2';

declare let $: any;
declare let curencyPipe: any;
@Component({
  selector: 'app-ccif-verser',
  templateUrl: './ccif-versement.component.html',
  styleUrls: ['./ccif-versement.component.css']
})
export class CcifVersementComponent implements OnInit, AfterViewInit {
  imageUrl = apiURL('/download/');
  collecteur: Collecteur[] = [];
  collecte: Collecte[] = [];
  id_cpe: number;
  TOTAL: any;
  displayedColumns: string[] = [
    'photo', 'ref', 'nom', 'prenom', 'tontine', 'contact', 'secteur', 'date'];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);
  data = new MatTableDataSource<any>([undefined]);
  @ViewChild(MatPaginator) private _matPaginator: MatPaginator;
  private _pageEvent = new PageEvent();
  _editDialogRef: MatDialogRef<CcifVersementUpdateComponent>;
  _editDialogRe: MatDialogRef<CcifVersementUpdateComponent>;
  _progress = false;
  constructor(
    private _api: ApiProviders,
    private _snackBar: MatSnackBar,
    public _dialog: MatDialog,
    private _editDialogService: EditDialogService<CcifVersementUpdateComponent>,
    private _editDialogServic: EditDialogService<CcifVersementUpdateComponent>
  ) {
    this._pageEvent.pageIndex = 1;
    this._pageEvent.pageSize = itemsPerPage;
  }

  ngOnInit() {
    // this.getDatas();
    this.getMyCPE();
  }

  applyFilter(filterValue: string) {
    this.data.filter = filterValue.trim().toLowerCase();
    if ((this.data.filter = filterValue)) {
      this._progress = false;
    }
  }
  ngAfterViewInit() {
    curencyPipe();
    setTimeout(() => {
      this._matPaginator.pageIndex = 0;
      this._matPaginator.pageSize = itemsPerPage;
      this._matPaginator.pageSizeOptions = pageSizeOptions;
    });
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
        this._api.versement(this.id_cpe).subscribe(
          (resp: any) => {
            this._progress = false;
            console.log(resp);
            Swal.fire({
              type: 'success',
              title: 'Succès...',
              text: 'Versement effectuée avec succès',
              // footer: '<a href>Bravo!!!</a>'
            });
          },
          error => {
            console.log(error);
            this._progress = false;
            console.log('non');
            Swal.fire({
              type: 'error',
              title: 'Désolé...',
              text: error.error,
              // footer: '<a href>Choisir un collecteur élligible</a>'
            });
            // this._snackBar.open(error.error, 'Echèc', {
            //   duration: 2000
            // });
          }
        );
      }
    });
  }

  async getDatas() {
    this._progress = true;
    this._api.getVerserEnAttente(this.id_cpe).subscribe(
      (res: any) => {
        this._progress = false;
        console.log(res.body.totalCollecte);
        this.TOTAL = res.body.totalCollecte;
        this.data = res.body.listeCollectes;
        this.TOTAL = res.body.data.reduce( (acc, current) => acc + current.collecte.montantCollecte, 0);

        if (this.TOTAL === 0) {
          Swal.fire({
            type: 'error',
            title: 'Désolé...',
            text: 'Pas de versement pour ce collecteur',
            footer: '<a href>Choisir un collecteur élligible</a>'
          });
        }
      },
      error => {
        console.log(error);
        this._progress = false;
        Swal.fire({
          type: 'error',
          title: 'Désolé...',
          text: error.error,
          footer: '<a href>Choisir un collecteur élligible</a>'
        });
      }
    );
  }

  async getMyCPE() {
    this._progress = true;
    this._api.getCpesNo().subscribe(
      (res: any) => {
        console.log(res);
        this._progress = false;
        this.collecteur = res.body.data;
        console.log(res);
      },
      error => {
        console.log(error);
        this._progress = false;
        this._snackBar.open(error.error, 'Echèc', {
          duration: 2000
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

  callToADD(data?: any) {
    this._editDialogRef = this._editDialogService.open(
      CcifVersementUpdateComponent,
      data
    );
    this._editDialogRef.afterClosed().subscribe(result => {
      this.getDatas();
    });
  }

  callToEDIT(data) {
    this._editDialogRe = this._editDialogServic.open(
      CcifVersementUpdateComponent,
      { data: data }
    );
    this._editDialogRe.disableClose = true;
    this._editDialogRe.afterClosed().subscribe(result => {
      this.getDatas();
    });
  }
}
