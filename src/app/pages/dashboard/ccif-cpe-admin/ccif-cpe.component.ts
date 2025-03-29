import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, PageEvent, MatDialogRef, MatSnackBar, MatDialog } from '@angular/material';
import { CcifUpdateCpeAdminComponent } from './ccif-update-cpe.component';
import { ApiProviders } from 'src/app/providers/api-providers.service';
import { EditDialogService } from 'src/app/providers/dialogconfig';
import { itemsPerPage, pageSizeOptions } from 'src/app/const';
import { url as apiURL } from '../../../function';
import { CcifCpeEtatComponent } from '../ccif-cpe/ccif-cpe-etat/ccif-cpe-etat.component';
import { EditDialogStatService } from 'src/app/providers/dialogStatConfig';
import { CcifStatCollRetComponent } from '../ccif-cpe/ccif-stat-coll-ret/ccif-stat-coll-ret.component';

@Component({
  selector: 'app-cpe-admin',
  templateUrl: './ccif-cpe.component.html',
  styleUrls: ['./ccif-cpe.component.css']
})
export class CcifCpeAdminComponent implements OnInit, AfterViewInit {
  imageUrl = apiURL('/download/');
  displayedColumns: string[] = ['photo', 'ref', 'login', 'nom', 'prenom', 'contact', 'date', 'actions'];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);
  data = new MatTableDataSource<any>([undefined]);
  @ViewChild(MatPaginator) private _matPaginator: MatPaginator;
  private _pageEvent = new PageEvent();
  _editDialogRef: MatDialogRef<CcifUpdateCpeAdminComponent>;
  _editDialogRe: MatDialogRef<CcifUpdateCpeAdminComponent>;
  _editDialogR: MatDialogRef<CcifCpeEtatComponent>;
  _editDialogRi: MatDialogRef<CcifStatCollRetComponent>;
  _progress = false;
  constructor(
    private _api: ApiProviders,
    private _snackBar: MatSnackBar,
    public _dialog: MatDialog,
    private _editDialogService: EditDialogService<CcifUpdateCpeAdminComponent>,
    private _editDialogServic: EditDialogService<CcifUpdateCpeAdminComponent>,
    private _editDialogEtat: EditDialogStatService<CcifCpeEtatComponent>,
    private _editDialogEta: EditDialogStatService<CcifStatCollRetComponent>,
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
    this._api.getCPE(this._pageEvent.pageIndex, this._pageEvent.pageSize).subscribe((res: any) => {
      this._progress = false;
      this.data = res.body.data;
      this._matPaginator.length = res.body.metadata;
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

  page(e: PageEvent) {
    this._pageEvent = e;
    this._pageEvent.pageIndex++;
    this.getDatas();
  }

  callToADD(data?: any) {
    this._editDialogRef = this._editDialogService.open(CcifUpdateCpeAdminComponent, data);
    this._editDialogRef.afterClosed().subscribe(result => {
      this.getDatas();
    });
  }

  callToEDIT(data) {
    this._editDialogRe = this._editDialogServic.open(CcifUpdateCpeAdminComponent, { data: data });
    this._editDialogRe.disableClose = true;
    this._editDialogRe.afterClosed().subscribe(result => {
      this.getDatas();
    });
  }

  collEtat(data) {
    this._editDialogR = this._editDialogEtat.open(CcifCpeEtatComponent,  { data: data } );
    this._editDialogR.disableClose = true;
    this._editDialogR.afterClosed().subscribe(result => {
      this.getDatas();
    });
  }

  collRetarEta(data) {
    this._editDialogRi = this._editDialogEta.open(CcifStatCollRetComponent,
        { data: data } );
    this._editDialogR.disableClose = true;
  }
}
