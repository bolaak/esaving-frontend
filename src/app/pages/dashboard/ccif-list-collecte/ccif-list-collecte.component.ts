import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, PageEvent, MatDialogRef, MatSnackBar, MatDialog } from '@angular/material';
import { ApiProviders } from 'src/app/providers/api-providers.service';
import { EditDialogService } from 'src/app/providers/dialogconfig';
import { itemsPerPage, pageSizeOptions } from 'src/app/const';
import { url as apiURL } from '../../../function';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ccif-list-coll',
  templateUrl: './ccif-list-collecte.component.html',
  styleUrls: ['./ccif-list-collecte.component.css']
})
export class CcifListCollComponent implements OnInit, AfterViewInit {
  imageUrl = apiURL('/download/'); collecteur: any; id_cpe: number; TOTAL: any;
  displayedColumns: string[] = ['photo', 'ref', 'nom', 'prenom', 'montant', 'contact', 'date'];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);
  data = new MatTableDataSource<any>([undefined]);
  @ViewChild(MatPaginator) private _matPaginator: MatPaginator;
  private _pageEvent = new PageEvent();
  // _editDialogRef: MatDialogRef<CcifUpdateCollecteComponent>;
  // _editDialogRe: MatDialogRef<CcifUpdateCollecteComponent>;
  _progress = false; etat = 'TOUT';
  constructor(
    private _api: ApiProviders,
    private _snackBar: MatSnackBar,
    public _dialog: MatDialog,
    // private _editDialogService: EditDialogService<CcifUpdateCollecteComponent>,
    // private _editDialogServic: EditDialogService<CcifUpdateCollecteComponent>
  ) {}

  ngOnInit() {
    this._pageEvent.pageIndex = 1;
    this._pageEvent.pageSize = itemsPerPage;
    this._matPaginator.pageSizeOptions = pageSizeOptions;
    this.getDatas();
    // this.getMyCPE();
  }

  applyFilter(filterValue: string) {
    this.data.filter = filterValue.trim().toLowerCase();
    if ((this.data.filter = filterValue)) {
      this._progress = false;
    }
  }
    ngAfterViewInit() {
  }

  async getDatas() {
    this._progress = true;
    this._api.getCollList(this._pageEvent.pageIndex, this._pageEvent.pageSize, this.etat).subscribe((res: any) => {
      this._progress = false;
      this.data = res.body.data;
      this.TOTAL = res.body.data.reduce( (acc, current) => acc + current.collecte.montantCollecte, 0);

      this._matPaginator.length = res.body.metadata;
      console.log(res);
      // this.TOTAL = res.body.metadata;

      if (res.body.data.length === 0) {
        Swal.fire({
          type: 'error',
          title: 'Désolé...',
          text: 'Aucun Versement pour ce collecteur',
          // footer: '<a href>Choisir un collecteur élligible</a>'
        });
      }

    }, (error) => {
      console.log(error);
      this._progress = false;
      this._snackBar.open(error.error, 'Echèc', {
        duration: 2000
      });
    }
    );
  }
  async getMyCPE() {
    this._progress = true;
    this._api.getCpes().subscribe(
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
    // this._editDialogRef = this._editDialogService.open(CcifUpdateCollecteComponent, data);
    // this._editDialogRef.afterClosed().subscribe(result => {
    //   this.getDatas();
    // });
  }

  callToEDIT(data) {
    // this._editDialogRe = this._editDialogServic.open(CcifUpdateCollecteComponent, { data: data });
    // this._editDialogRe.disableClose = true;
    // this._editDialogRe.afterClosed().subscribe(result => {
    //   this.getDatas();
    // });
  }
}
