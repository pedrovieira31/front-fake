import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Realty } from '../model/realty';

@Injectable({
  providedIn: 'root',
})
export class RealtysService {
  constructor(private httpClient: HttpClient) {}
  list(): Realty[] {
    return [
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
  }
}
