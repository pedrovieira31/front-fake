import { Component, OnInit } from '@angular/core';

import { Realty } from '../model/realty';
import { RealtysService } from './../services/realtys.service';
import { ActivatedRoute, Router } from '@angular/router';

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
}
