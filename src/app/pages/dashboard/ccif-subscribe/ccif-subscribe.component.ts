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
@Component({
  selector: 'app-ccif-subscribe',
  templateUrl: './ccif-subscribe.component.html',
  styleUrls: ['./ccif-subscribe.component.css']
})
export class CcifSubscribeComponent implements OnInit, AfterViewInit {
  imageUrl = apiURL('/download/');
  displayedColumns: string[] = ['photo', 'ref', 'nom', 'prenom', 'contact', 'mise', 'montant', 'debut', 'fin', 'actions'];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);
  data = new MatTableDataSource<any>([undefined]);
  @ViewChild(MatPaginator) private _matPaginator: MatPaginator;
  private _pageEvent = new PageEvent();
  _editDialogRef: MatDialogRef<CcifUpdateSubscribeComponent>;
  _editDialogRe: MatDialogRef<CcifUpdateSubscribeComponent>;
  _progress = false; TOTAL: any;
  constructor(
    private _api: ApiProviders,
    private _snackBar: MatSnackBar,
    public _dialog: MatDialog,
    private _editDialogService: EditDialogService<CcifUpdateSubscribeComponent>,
    private _editDialogServic: EditDialogService<CcifUpdateSubscribeComponent>
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
    this._api.getClientSouscri(this._pageEvent.pageIndex, this._pageEvent.pageSize).subscribe((res: any) => {
      this._progress = false;
      this.data = res.body.data;
      this.TOTAL = res.body.data.reduce( (acc, current) => acc + current.montantTontine, 0);
      this._matPaginator.length = res.body.metadata;

    }, (error) => {
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
    this._editDialogRef = this._editDialogService.open(CcifUpdateSubscribeComponent, data);
    this._editDialogRef.afterClosed().subscribe(result => {
      this.getDatas();
    });
  }

  callToEDIT(data) {
    this._editDialogRe = this._editDialogServic.open(CcifUpdateSubscribeComponent, { data: data });
    this._editDialogRe.disableClose = true;
    this._editDialogRe.afterClosed().subscribe(result => {
      this.getDatas();
    });
  }

}

