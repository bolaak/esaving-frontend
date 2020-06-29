import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ApiProviders } from '../../../providers/api-providers.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { pageSizeOptions, itemsPerPage } from '../../../const';
import { MatSnackBar } from '@angular/material';
import { EditDialogService } from 'src/app/providers/dialogconfig';
import { url as apiURL } from '../../../function';
import { CcifUpdateClientsComponent } from './ccif-update-clients.component';
declare let $: any;
@Component({
  selector: 'app-ccif-clients',
  templateUrl: './ccif-clients.component.html',
  styleUrls: ['./ccif-clients.component.css']
})
export class CcifClientsComponent implements OnInit, AfterViewInit {
  imageUrl = apiURL('/download/');
  displayedColumns: string[] = ['photo', 'ref', 'nom', 'prenom', 'contact', 'secteur', 'date'];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);
  data = new MatTableDataSource<any>([undefined]);
  @ViewChild(MatPaginator) private _matPaginator: MatPaginator;
  private _pageEvent = new PageEvent();
  _editDialogRef: MatDialogRef<CcifUpdateClientsComponent>;
  _editDialogRe: MatDialogRef<CcifUpdateClientsComponent>;
  _progress = false; idcais: number; CLT: any;
  constructor(
    private _api: ApiProviders,
    private _snackBar: MatSnackBar,
    public _dialog: MatDialog,
    private _editDialogService: EditDialogService<CcifUpdateClientsComponent>,
    private _editDialogServic: EditDialogService<CcifUpdateClientsComponent>
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
    this._api.getClients(this._pageEvent.pageIndex, this._pageEvent.pageSize).subscribe((res: any) => {
      this._progress = false;
      this.data = res.body.data;
      this._matPaginator.length = res.body.metadata;
      console.log(res.body.data);

    }, (error) => {
      console.log(error);
      this._progress = false;
      this._snackBar.open(error.error, 'Echèc', {
        duration: 2000
      });
    }
    );
  }

  // async getCpe() {
  //   console.log(this.idcais);
  //   this._progress = true;
  //   this._api.getCaissierCpe(this.idcais).subscribe((res: any) => {
  //     this._progress = false;
  //     this.CLT = res.body.data;
  //     console.log(res.body.data);

  //   }, (error) => {
  //     console.log(error);
  //     this._progress = false;
  //   }
  //   );
  // }

  page(e: PageEvent) {
    console.log(e);
    this._pageEvent = e;
    this._pageEvent.pageIndex++;
    this.getDatas();
  }

  callToADD(data?: any) {
    this._editDialogRef = this._editDialogService.open(CcifUpdateClientsComponent, data);
    this._editDialogRef.afterClosed().subscribe(result => {
      this.getDatas();
    });
  }

  callToEDIT(data) {
    this._editDialogRe = this._editDialogServic.open(CcifUpdateClientsComponent, { data: data });
    this._editDialogRe.disableClose = true;
    this._editDialogRe.afterClosed().subscribe(result => {
      this.getDatas();
    });
  }

}
