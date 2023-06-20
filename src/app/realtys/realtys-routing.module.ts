import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RealtysComponent } from './realtys/realtys.component';

const routes: Routes = [{ path: '', component: RealtysComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RealtysRoutingModule {}
