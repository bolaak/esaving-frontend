import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, PageEvent, MatDialogRef, MatSnackBar, MatDialog } from '@angular/material';
import { ApiProviders } from 'src/app/providers/api-providers.service';
import { EditDialogService } from 'src/app/providers/dialogconfig';
import { itemsPerPage, pageSizeOptions } from 'src/app/const';
import { url as apiURL } from '../../../function';
import { CcifUpdateCollecteComponent } from './ccif-update-collecte.component';

@Component({
  selector: 'app-ccif-collecte',
  templateUrl: './ccif-collecte.component.html',
  styleUrls: ['./ccif-collecte.component.css']
})
export class CcifCollecteComponent implements OnInit, AfterViewInit {
  imageUrl = apiURL('/download/'); LIST: any; total: any;
  displayedColumns: string[] = ['photo', 'nom', 'prenom', 'montant', 'contact', 'date', 'actions'];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);
  data = new MatTableDataSource<any>([undefined]);
  @ViewChild(MatPaginator) private _matPaginator: MatPaginator;
  private _pageEvent = new PageEvent();
  _editDialogRef: MatDialogRef<CcifUpdateCollecteComponent>;
  _editDialogRe: MatDialogRef<CcifUpdateCollecteComponent>;
  _progress = false; etat: string;
  constructor(
    private _api: ApiProviders,
    private _snackBar: MatSnackBar,
    public _dialog: MatDialog,
    private _editDialogService: EditDialogService<CcifUpdateCollecteComponent>,
    private _editDialogServic: EditDialogService<CcifUpdateCollecteComponent>
  ) {}

  ngOnInit() {
    this._pageEvent.pageIndex = 1;
    this._pageEvent.pageSize = itemsPerPage;
    this._matPaginator.pageSizeOptions = pageSizeOptions;
    this.getDatas();
  }

    ngAfterViewInit() {
  }

  async getDatas() {
    this._progress = true;
    this._api.getCollAVerserByCPE(this._pageEvent.pageIndex, this._pageEvent.pageSize).subscribe((res: any) => {
      this._progress = false;
      this.data = res.body.data;
      this.total = res.body.data.reduce( (acc, current) => acc + current.collecte.montantCollecte, 0);
      console.log(this.total);
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
  applyFilter(filterValue: string) {
    this.data.filter = filterValue.trim().toLowerCase();
    if ((this.data.filter = filterValue)) {
      this._progress = false;
    }
  }
  // async getSumm() {
  //   this._progress = true;
  //   this._api.getSumm().subscribe((res: any) => {
  //     this._progress = false;
  //     this.LIST = res.body.data;
  //     console.log(this.LIST);
  //     let sum = 0;
  //     for ( let i = 0; i <= res.body.data.length - 1; i++) {
  //       sum += res.body.data[i].collecte.montantCollecte;
  //       console.log(sum);
  //       return sum;
  //     }

  //   });
  // }

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
    this._editDialogRef = this._editDialogService.open(CcifUpdateCollecteComponent, data);
    this._editDialogRef.afterClosed().subscribe(result => {
      this.getDatas();
    });
  }

  callToEDIT(data) {
    this._editDialogRe = this._editDialogServic.open(CcifUpdateCollecteComponent, { data: data });
    this._editDialogRe.disableClose = true;
    this._editDialogRe.afterClosed().subscribe(result => {
      this.getDatas();
    });
  }
}
