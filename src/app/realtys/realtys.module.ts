import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RealtysRoutingModule } from './realtys-routing.module';
import { RealtysComponent } from './realtys/realtys.component';


@NgModule({
  declarations: [
    RealtysComponent
  ],
  imports: [
    CommonModule,
    RealtysRoutingModule
  ]
})
export class RealtysModule { }
