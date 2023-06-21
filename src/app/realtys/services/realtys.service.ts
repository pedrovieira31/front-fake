import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Realty, realtyList } from '../model/realty';

@Injectable({
  providedIn: 'root',
})
export class RealtysService {
  constructor(private httpClient: HttpClient) {}
  list(): Realty[] {
    console.log(realtyList);
    return realtyList;
  }
}
