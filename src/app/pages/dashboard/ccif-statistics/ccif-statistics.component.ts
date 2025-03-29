import { Component, OnInit , AfterViewInit, ViewChild } from '@angular/core';
import { ApiProviders } from 'src/app/providers/api-providers.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { StatCpeComponent } from './stat-cpe/stat-cpe.component';
import { StatCpteTontComponent } from './stat-cpte-tont/stat-cpte-tont.component';
import { StatBalanceClientComponent } from './stat-balance-client/stat-balance-client.component';
import { StatComClientComponent } from './stat-com-client/stat-com-client.component';
import { StatComAgenceComponent } from './stat-com-agence/stat-com-agence.component';
import { StatComCollecteurComponent } from './stat-com-collecteur/stat-com-collecteur.component';

@Component({
  selector: 'app-ccif-statistics',
  templateUrl: './ccif-statistics.component.html',
  styleUrls: ['./ccif-statistics.component.css']
})
export class CcifStatisticsComponent implements OnInit , AfterViewInit {

  @ViewChild('iframe') private _iframe;
  startDate = new Date(1990, 0, 1);
  souscri: any;
  _progress = false; data: any; caissier: number; id_caissier: number; id_cpe: number; id_cpes: number;
  CPE: any; id_compte_tontine: number; id_cai: number; COLL: any; date_balance = new Date(); id_cais: number;
  id_client: number; date_debut = new Date(); date_fin = new Date(); Agence: any; id_agence: number;
  date1 = new Date(); date2 = new Date(); dateDe = new Date(); dateFi = new Date(); idcais: number; CLT: any;
  cpe_id: number;
  constructor(
    private _api: ApiProviders,
    private _dialog: MatDialog
    ) { }

  ngOnInit() {
    this.getDatas();
    this.getagence();
  }

  ngAfterViewInit() {}

  async getDatas() {
    this._progress = true;
    this._api.getCaissiers().subscribe((res: any) => {
      this._progress = false;
      this.data = res.body.data;
      console.log(res.body.data);

    }, (error) => {
      console.log(error);
      this._progress = false;
    }
    );
  }

  async getDataCpe() {
    console.log(this.id_caissier);
    this._progress = true;
    this._api.getCaissierCpe(this.id_caissier).subscribe((res: any) => {
      this._progress = false;
      this.CPE = res.body.data;
      console.log(res.body.data);

    }, (error) => {
      console.log(error);
      this._progress = false;
    }
    );
  }

  async getDatasCpe() {
    console.log(this.caissier);
    this._progress = true;
    this._api.getCaissierCpe(this.caissier).subscribe((res: any) => {
      this._progress = false;
      this.COLL = res.body.data;
      console.log(res.body.data);

    }, (error) => {
      console.log(error);
      this._progress = false;
    }
    );
  }
  async getSouscriTontine() {
    this._api.getclientSouscri(this.id_cai).subscribe((res: any) => {
      this.souscri = res.body.data;

    }, (error) => {
      console.log(error);
      this._progress = false;
    }
    );
  }

  async getSouscriTont() {
    this._api.getclientSouscri(this.id_cais).subscribe((res: any) => {
      this.souscri = res.body.data;

    }, (error) => {
      console.log(error);
      this._progress = false;
    }
    );
  }

  async getSousOfComm() {
    this._api.getclientSouscri(this.id_cais).subscribe((res: any) => {
      this.souscri = res.body.data;

    }, (error) => {
      console.log(error);
      this._progress = false;
    }
    );
  }

  async getagence() {
    this._api.getAgences().subscribe((res: any) => {
      this.Agence = res.body.data;
      console.log(this.Agence);

    }, (error) => {
      console.log(error);
      this._progress = false;
    }
    );
  }

  async getCpe() {
    console.log(this.idcais);
    this._progress = true;
    this._api.getCaissierCpe(this.idcais).subscribe((res: any) => {
      this._progress = false;
      this.CLT = res.body.data;
      console.log(res.body.data);

    }, (error) => {
      console.log(error);
      this._progress = false;
    }
    );
  }

  iframeState() {
    const editOrAddDialog = this._dialog.open(StatCpeComponent, {
      data: {
        idCpe: this.id_cpe,
      }, width: '90%'
    });
    editOrAddDialog.afterClosed().subscribe(result => {
      // this._bottomSheetRef.dismiss();
    });
  }

  iframeCpteTont() {
    const editOrAddDialog = this._dialog.open(StatCpteTontComponent, {
      data: {
        idCpeTon: this.id_compte_tontine,
      }, width: '90%'
    });
    editOrAddDialog.afterClosed().subscribe(result => {
      // this._bottomSheetRef.dismiss();
    });
  }

  iframeBalance() {
    const editOrAddDialog = this._dialog.open(StatBalanceClientComponent, {
      data: {
        dateBalance: this.convert(this.date_balance),
        idCpe: this.id_cpes,
      }, width: '90%'
    });
    editOrAddDialog.afterClosed().subscribe(result => {
      // this._bottomSheetRef.dismiss();
    });
  }

  iframeComm() {
    const editOrAddDialog = this._dialog.open(StatComClientComponent, {
      data: {
        dateDebu: this.convert(this.date_debut),
        dateFin: this.convert(this.date_fin),
        idClient: this.id_client,
      }, width: '90%'
    });
    editOrAddDialog.afterClosed().subscribe(result => {
      // this._bottomSheetRef.dismiss();
    });
  }

  iframeCommAg() {
    const editOrAddDialog = this._dialog.open(StatComAgenceComponent, {
      data: {
        dateDebu: this.convert(this.date1),
        dateFin: this.convert(this.date2),
        idAgence: this.id_agence,
      }, width: '90%'
    });
    editOrAddDialog.afterClosed().subscribe(result => {
      // this._bottomSheetRef.dismiss();
    });
  }

  iframeCommCPE() {
    const editOrAddDialog = this._dialog.open(StatComCollecteurComponent, {
      data: {
        dateDebu: this.convert(this.dateDe),
        dateFin: this.convert(this.dateFi),
        CpeID: this.cpe_id,
      }, width: '90%'
    });
    editOrAddDialog.afterClosed().subscribe(result => {
      // this._bottomSheetRef.dismiss();
    });
  }

  convert(z) {
    const now = new Date(z);
    const y = now.getFullYear();
    const m = now.getMonth() + 1;
    const d = now.getDate();

    const finalconv = '' + y + '-' + (m < 10 ? '0' : '') +  m + '-' + (d < 10 ? '0' : '') + d;
    return (finalconv);
  }

}
