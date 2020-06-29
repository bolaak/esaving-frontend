import { Component, OnInit } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-ccif-collecteur',
  templateUrl: './ccif-collecteur.component.html',
  styleUrls: ['./ccif-collecteur.component.css']
})
export class CcifCollecteurComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.Tabs();
  }

    Tabs() {
      $('#myTab a').on('click', function (e) {
        e.preventDefault();
        $(this).tab('show');
      });
   }

}
