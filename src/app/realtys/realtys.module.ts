import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { RealtyFormComponent } from './realty-form/realty-form.component';
import { RealtysRoutingModule } from './realtys-routing.module';
import { RealtysComponent } from './realtys/realtys.component';

@NgModule({
  declarations: [RealtysComponent, RealtyFormComponent],
  imports: [
    CommonModule,
    RealtysRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
  ],
})
export class RealtysModule {}
