import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RealtyFormComponent } from './realty-form/realty-form.component';
import { RealtysComponent } from './realtys/realtys.component';

const routes: Routes = [
  { path: '', component: RealtysComponent },
  { path: 'new', component: RealtyFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RealtysRoutingModule {}
