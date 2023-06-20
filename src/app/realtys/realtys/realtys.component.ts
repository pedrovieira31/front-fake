import { Component, OnInit } from '@angular/core';

import { Realty } from '../model/realty';

@Component({
  selector: 'app-realtys',
  templateUrl: './realtys.component.html',
  styleUrls: ['./realtys.component.css'],
})
export class RealtysComponent implements OnInit {
  realtys: Realty[] = [
    {
      tipo: 'Apartamento',
      bairro: 'Centro',
      valor: 1300.0,
      dataAnuncio: '20/06/2023',
    },
    {
      tipo: 'Casa',
      bairro: 'Belvedere',
      valor: 2000.0,
      dataAnuncio: '31/08/2019',
    },
  ];
  displayedColumns = ['tipo', 'bairro', 'valor', 'dataAnuncio'];

  constructor() {
    //this.realtys = [];
  }
  ngOnInit(): void {}
}
