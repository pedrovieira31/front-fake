import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RealtysRoutingModule } from './realtys-routing.module';
import { RealtysComponent } from './realtys/realtys.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';

@NgModule({
  declarations: [RealtysComponent],
  imports: [CommonModule, RealtysRoutingModule, AppMaterialModule],
})
export class RealtysModule {}
