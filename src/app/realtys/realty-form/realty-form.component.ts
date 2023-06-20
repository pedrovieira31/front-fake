import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-realty-form',
  templateUrl: './realty-form.component.html',
  styleUrls: ['./realty-form.component.css'],
})
export class RealtyFormComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.form = this.formBuilder.group({
      nome: [null],
      tipo: [null],
      valor: [null],
      dataAnuncio: [null],
      rua: [null],
      numero: [null],
      complemento: [null],
      bairro: [null],
      cidade: [null],
      uf: [null],
      cep: [null],
    });
  }
  ngOnInit(): void {}
  changeCep() {
    this.http
      .get<any>(`https://viacep.com.br/ws/${this.form.value.cep}/json/`, {})
      .subscribe((data) => {
        this.form = this.formBuilder.group({
          rua: data.logradouro,
          uf: data.uf,
          cidade: data.localidade,
          cep: data.cep,
          bairro: data.bairro,
          complemento: data.complementom,
        });
      });
  }
}
