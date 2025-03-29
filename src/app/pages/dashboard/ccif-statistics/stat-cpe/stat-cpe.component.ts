import { Component, OnInit, Optional, Inject, ViewChild, ElementRef } from '@angular/core';
import { ApiProviders } from 'src/app/providers/api-providers.service';
import { MAT_DIALOG_DATA } from '@angular/material';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-stat-cpe',
  templateUrl: './stat-cpe.component.html',
  styleUrls: ['./stat-cpe.component.css']
})
export class StatCpeComponent implements OnInit {
  @ViewChild('iframeContrat') _iframe: ElementRef;
  _progress = false;
  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private _api: ApiProviders,
  ) { }

  ngOnInit() {
    console.log(this.data);
    this.download();
  }


  download() {
    this._progress = true;
    this._api.statClientColl(this.data.idCpe).subscribe(res => {
        // this.dataSource = res;
        console.log(res);
        // this.showProgressBar = false;
        // this.showRelevCompte = true;
        const reader = new FileReader();
        reader.readAsDataURL(res);
        reader.onloadend = () => {
            this._progress = false;
            this._iframe.nativeElement.src = reader.result;
        };
    }, (error) => {
      const reader = new FileReader();
      reader.readAsText(error.error);
      reader.onloadend = () => {
        this._progress = false;
        console.log(reader.result);
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: reader.result.toString(),
          footer: '<a href>Faites des opérations pour avoir des données statistiques</a>'
        });
      };
    });
}

}
