import { Component,  OnInit,  Optional,  Inject,  ViewChild,  ElementRef} from '@angular/core';
import { ApiProviders } from 'src/app/providers/api-providers.service';
import { MAT_DIALOG_DATA } from '@angular/material';
import Swal from 'sweetalert2';
import { Collecteur } from 'src/app/models/cpe';

@Component({
  selector: 'app-ccif-cpe-etat',
  templateUrl: './ccif-cpe-etat.component.html',
  styleUrls: ['./ccif-cpe-etat.component.css']
})
export class CcifCpeEtatComponent implements OnInit {
  model = new Collecteur(); date_debut = new Date(); date_fin = new Date();
  @ViewChild('iframeContrat') _iframe: ElementRef;
  _progress = false; statColl: boolean;
  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private _api: ApiProviders
  ) { }

  ngOnInit() {
    // console.log(this.data);
    // this.download();
    this.model = this.data.data.data;
    // tslint:disable-next-line:radix
    this.model.id = parseInt(this.data.data.data.idUtilisateur);
    console.log(this.model.id);
  }

  download() {
    this.statColl = false;
    this._progress = true;
    this._api.statCollByCpe(this.model.id, this.convert( this.date_debut), this.convert(this.date_fin)).subscribe(res => {
      // this.dataSource = res;
      console.log(res);
      this.statColl = true;
      // this.showProgressBar = false;
      // this.showRelevCompte = true;
      const reader = new FileReader();
      reader.readAsDataURL(res);
      reader.onloadend = () => {
        this._progress = false;
        this._iframe.nativeElement.src = reader.result;
      };
    }, (error) => {
      this.statColl = false;
      const reader = new FileReader();
      reader.readAsText(error.error);
      reader.onloadend = () => {
        this._progress = false;
        console.log(reader.result);
        Swal.fire({
          type: 'error',
          title: 'désolé...',
          text: reader.result.toString(),
          // footer: '<a href>Faites des opérations pour avoir des données statistiques</a>'
        });
      };
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
