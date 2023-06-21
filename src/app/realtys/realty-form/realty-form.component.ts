import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Realty, realtyList } from '../model/realty';

@Component({
  selector: 'app-realty-form',
  templateUrl: './realty-form.component.html',
  styleUrls: ['./realty-form.component.css'],
})
export class RealtyFormComponent implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({
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
      condominio: [null],
    });
  }
  ngOnInit(): void {}
  changeCep() {
    this.http
      .get<any>(`https://viacep.com.br/ws/${this.form.value.cep}/json/`, {})
      .subscribe((data) => {
        this.form = this.formBuilder.group({
          tipo: this.form.value.tipo,
          valor: this.form.value.valor,
          dataAnuncio: new Date().toLocaleString('pt-BR').split(',')[0],
          rua: data.logradouro,
          numero: this.form.value.numero,
          complemento: this.form.value.complemento,
          bairro: data.bairro,
          cidade: data.localidade,
          uf: data.uf,
          cep: data.cep,
          condominio: this.form.value.condominio,
        });
      });
  }
  returnToGrid() {
    this.router.navigate([''], { relativeTo: this.route });
  }
  insertRealty() {
    let idRealty = realtyList.length + 1;
    let newRealty = {
      id: idRealty,
      tipo: this.form.value.tipo,
      bairro: this.form.value.bairro,
      valor: this.form.value.valor,
      dataAnuncio: this.form.value.dataAnuncio,
      numero: this.form.value.numero,
      rua: this.form.value.rua,
      cidade: this.form.value.cidade,
      uf: this.form.value.uf,
      cep: this.form.value.cep,
      condominio: this.form.value.condominio,
      complemento: this.form.value.complemento,
    };
    realtyList.push(newRealty);
    console.log(realtyList);
    this.router.navigate([''], { relativeTo: this.route });
  }
}
