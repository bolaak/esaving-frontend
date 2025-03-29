import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ApiProviders } from './../../providers/api-providers.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

declare let login: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit , AfterViewInit {
  user = new User();
  _progress = false;
  constructor(
    private _api: ApiProviders,
    private _router: Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    login();
  }

  async save() {
    this._progress = true;
    await this._api.login(this.user).subscribe(
      (data: any) => {
        console.log(data.roles[0]);
        this._progress = false;
        window.localStorage.setItem('data', data.body);
        window.localStorage.setItem('token', data['token']);
        window.localStorage.setItem('789', JSON.stringify(data.roles[0]));
        this._router.navigate(['/dashboard/home']);
        this.user.login = ''; this.user.password = '';
      }, (error) => {
        console.log(error);
        this._progress = false;
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Informations incorrectes!',
          // footer: '<a href>Entrez Svp des informations correctes</a>'
        });
      }
    );

  }

}
