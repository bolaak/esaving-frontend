import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ccif-echeancier',
  templateUrl: './ccif-echeancier.component.html',
  styleUrls: ['./ccif-echeancier.component.css']
})
export class CcifEcheancierComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log(this.cal('04-05-2014', '05-06-2014'));
    // console.log(this.exemple('05-06-2014'));
  }

  cal(date1, date2) {
    const dt1 = new Date(date1);
    const dt2 = new Date(date2);
    const op_one = Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate());
    const op_two = Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate());
    const opp = ( 1000 * 60 * 60 * 24 );
     // tslint:disable-next-line:radix
     const diff = Math.floor(( op_one  - op_two ) / opp );
    return diff;
  }
}
