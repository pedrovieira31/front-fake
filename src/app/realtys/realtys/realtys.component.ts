import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Realty, realtyList } from '../model/realty';
import { RealtysService } from './../services/realtys.service';

@Component({
  selector: 'app-realtys',
  templateUrl: './realtys.component.html',
  styleUrls: ['./realtys.component.css'],
})
export class RealtysComponent implements OnInit {
  realtys: Realty[] = [];

  displayedColumns = [
    'tipo',
    'rua',
    'numero',
    'bairro',
    'uf',
    'valor',
    'condominio',
    'dataAnuncio',
    'actions',
  ];

  constructor(
    private realtysService: RealtysService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.realtys = this.realtysService.list();
  }

  ngOnInit(): void {}

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
  deleteRow(value: number) {
    const indexRealty = realtyList.findIndex((x) => x.id == value);
    realtyList.splice(indexRealty, 1);
    this.realtys = [...realtyList];
  }
}
