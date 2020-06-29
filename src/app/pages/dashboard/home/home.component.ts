import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ApiProviders } from 'src/app/providers/api-providers.service';
import { MatSnackBar } from '@angular/material';

declare let ccifChat: any;
@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
   infoUsers: any;
  _dashboard: any;
  _dashb: any;
  _progress: boolean;
  _viewDash = true;
  _viewDash2 = true;
  constructor(
    private _api: ApiProviders,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.getCurrentAccount();
  }

  ngAfterViewInit() {
    ccifChat();
  }

  async _getDatas() {
    this._progress = true;
    this._api.getStatistic().subscribe((res: any) => {
      this._progress = false;
      console.log(res);
      // this.TOTAL = res.body.totalCollecte;
      this._dashboard = res.body;

    }, (error) => {
      console.log(error);
      this._progress = false;
      this._snackBar.open(error.error, 'Echèc', {
        duration: 2000
      });
    }
    );
  }

  async _getGlobal() {
    this._progress = true;
    this._api.getStatGlobal().subscribe((res: any) => {
      this._progress = false;
      console.log(res.body);
      // this.TOTAL = res.body.totalCollecte;
      this._dashboard = res.body;

    }, (error) => {
      console.log(error);
      this._progress = false;
      this._snackBar.open(error.error, 'Echèc', {
        duration: 2000
      });
    }
    );
  }

  getCurrentAccount() {
    this._api.currentAccount().subscribe((res: any) => {
      console.log(res);
      console.log(res.body.roles[0]);
      this.infoUsers = res.body.roles[0];
      console.log(this.infoUsers.libelle);
      console.log(res.body.firstLogin);

      if (this.infoUsers.libelle === 'Administrateur' || this.infoUsers.libelle === 'Directeur général' ) {
        this._getGlobal();
      } else {
        this._getDatas();
      }
    }, (error) => {
      console.log(error);
      this._progress = false;
    }
    );
  }
}
