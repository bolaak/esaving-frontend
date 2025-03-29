import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ApiProviders } from '../../../providers/api-providers.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { pageSizeOptions, itemsPerPage } from '../../../const';
import { MatSnackBar } from '@angular/material';
import { EditDialogService } from 'src/app/providers/dialogconfig';
import { url as apiURL } from '../../../function';
import { Collecteur } from '../../../models/cpe';
import { Collecte } from '../../../models/collecte';
import { CcifRetraitUpdateComponent } from './ccif-retrait-update.component';
declare let $: any;
@Component({
  selector: 'app-ccif-retrait',
  templateUrl: './ccif-retrait.component.html',
  styleUrls: ['./ccif-retrait.component.css']
})
export class CcifRetraitComponent implements OnInit, AfterViewInit {
  imageUrl = apiURL('/download/');
  collecteur: Collecteur[] = [];
  collecte: Collecte[] = [];
  id_cpe: number;
  TOTAL: any;
  displayedColumns: string[] = ['ref', 'nom', 'prenom', 'montant', 'debut', 'fin', 'date', 'status'];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);
  data = new MatTableDataSource<any>([undefined]);
  @ViewChild(MatPaginator) private _matPaginator: MatPaginator;
  private _pageEvent = new PageEvent();
  _editDialogRef: MatDialogRef<CcifRetraitUpdateComponent>;
  _editDialogRe: MatDialogRef<CcifRetraitUpdateComponent>;
  _progress = false;
  constructor(
    private _api: ApiProviders,
    private _snackBar: MatSnackBar,
    public _dialog: MatDialog,
    private _editDialogService: EditDialogService<CcifRetraitUpdateComponent>,
    private _editDialogServic: EditDialogService<CcifRetraitUpdateComponent>
  ) {}

  ngOnInit() {
    this._pageEvent.pageIndex = 1;
    this._pageEvent.pageSize = itemsPerPage;
    this._matPaginator.pageSizeOptions = pageSizeOptions;
    this.getDatas();
  }

  applyFilter(filterValue: string) {
    this.data.filter = filterValue.trim().toLowerCase();
    if ((this.data.filter = filterValue)) {
      this._progress = false;
    }
  }
      ngAfterViewInit() {
    // setTimeout(() => {
    //   this._matPaginator.pageIndex = 0;
    //   this._matPaginator.pageSize = itemsPerPage;
    //   this._matPaginator.pageSizeOptions = pageSizeOptions;
    // });
  }

  async getDatas() {
    this._progress = true;
    this._api.getRetraitClient(this._pageEvent.pageIndex, this._pageEvent.pageSize).subscribe((res: any) => {
      this._progress = false;
      console.log(res.body.data);
      this._matPaginator.length = res.body.metadata;
      // this.TOTAL = res.body.totalCollecte;
      this.data = res.body.data;
      this.TOTAL = res.body.data.reduce( (acc, current) => acc + current.montantTontine, 0);

    }, (error) => {
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
    this._editDialogRef = this._editDialogService.open(CcifRetraitUpdateComponent, data);
    this._editDialogRef.afterClosed().subscribe(result => {
      this.getDatas();
    });
  }

  callToEDIT(data) {
    this._editDialogRe = this._editDialogServic.open(CcifRetraitUpdateComponent, { data: data });
    this._editDialogRe.disableClose = true;
    this._editDialogRe.afterClosed().subscribe(result => {
      this.getDatas();
    });
  }

}
