import { Component, OnInit } from '@angular/core';
import { ApiProviders } from 'src/app/providers/api-providers.service';
import Swal from 'sweetalert2';
import { MatTableDataSource } from '@angular/material';
import { Agences } from 'src/app/models/agence';

@Component({
  selector: 'app-ccif-relevee',
  templateUrl: './ccif-relevee.component.html',
  styleUrls: ['./ccif-relevee.component.css']
})
export class CcifReleveeComponent implements OnInit {
 _dashboard: any;
 _progress: boolean;
 agence: Agences[] = []; idAgence: number;
 // tslint:disable-next-line:max-line-length
 displayedColumns: string[] = [ 'commission', 'retrait', 'tontine', 'versement', 'clients', 'collecteurs', 'souscription', 'encours', 'expirees'];
 data = new MatTableDataSource<any>([undefined]);

  constructor(private _api: ApiProviders ) { }

  ngOnInit() {
    this.listAgences();
  }

  async _getDatas() {
    let datas: any[] = [];
    this._progress = true;
    this._api.getAgenceRel(this.idAgence).subscribe((res: any) => {
      // this._progress = false;
      console.log(JSON.parse(res.body));
      datas.push(JSON.parse(res.body));
      this.data.data = datas;
      // console.log(this.data);
    }, (error) => {
      console.log(error);
      this._progress = false;
      Swal.fire({
        type: 'error',
        title: 'Oops ...',
        text: error.error,
        footer: '<a href>Le système à rencontrer une erreur</a>'
      });
    }
    );
  }
  async listAgences() {
    this._api.getAgences().subscribe((res: any) => {
      this.agence = res.body.data;
      console.log(this.agence);
    }, (error) => {
      console.log(error);
      this._progress = false;
      Swal.fire({
        type: 'error',
        title: 'Oops ...',
        text: error.error,
        footer: '<a href>Le système à rencontrer une erreur</a>'
      });
    }
    );
  }

}
