import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ApiProviders } from '../../../providers/api-providers.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { pageSizeOptions, itemsPerPage } from '../../../const';
import { MatSnackBar } from '@angular/material';
import { EditDialogService } from 'src/app/providers/dialogconfig';
import { CcifUpdateUsersComponent } from './ccif-update-users.component';
import { url as apiURL } from '../../../function';
declare let $: any;
@Component({
  selector: 'app-ccif-users',
  templateUrl: './ccif-users.component.html',
  styleUrls: ['./ccif-users.component.css']
})
export class CcifUsersComponent implements OnInit, AfterViewInit {
  imageUrl = apiURL('/download/');
  displayedColumns: string[] = ['photo', 'ref', 'nom', 'prenom', 'contact', 'roles', 'date', 'actions'];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);
  data = new MatTableDataSource<any>([undefined]);
  @ViewChild(MatPaginator) private _matPaginator: MatPaginator;
  private _pageEvent = new PageEvent();
  _editDialogRef: MatDialogRef<CcifUpdateUsersComponent>;
  _editDialogRe: MatDialogRef<CcifUpdateUsersComponent>;
  _progress = false;
  constructor(
    private _api: ApiProviders,
    private _snackBar: MatSnackBar,
    public _dialog: MatDialog,
    private _editDialogService: EditDialogService<CcifUpdateUsersComponent>,
    private _editDialogServic: EditDialogService<CcifUpdateUsersComponent>
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
    this._api.getUSERS(this._pageEvent.pageIndex, this._pageEvent.pageSize).subscribe((res: any) => {
      this._progress = false;
      this.data = res.body.data;
      // this.data = this.data.filter(function(list) {
      //   return list.acteur === 'MASTER';
      //  });
      console.log(this.data);
      this._matPaginator.length = res.body.metadata;
      // console.log(res.body.data);
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
    this._editDialogRef = this._editDialogService.open(CcifUpdateUsersComponent, data);
    this._editDialogRef.afterClosed().subscribe(result => {
      this.getDatas();
    });
  }

  callToEDIT(data) {
    this._editDialogRe = this._editDialogServic.open(CcifUpdateUsersComponent, { data: data });
    this._editDialogRe.disableClose = true;
    this._editDialogRe.afterClosed().subscribe(result => {
      this.getDatas();
    });
  }

}
