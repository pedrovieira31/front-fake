import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HttpClient, HttpHeaders } from '@angular/common/http';
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
          tipo: [null],
          valor: [null],
          dataAnuncio: new Date().toDateString(),
          rua: data.logradouro,
          numero: [null],
          complemento: [null],
          bairro: data.bairro,
          cidade: data.localidade,
          uf: data.uf,
          cep: data.cep,
          condominio: [null],
        });
      });
  }
  returnToGrid() {
    this.router.navigate([''], { relativeTo: this.route });
  }
  insertRealty() {
    console.log(this.form.value);
  }
}
