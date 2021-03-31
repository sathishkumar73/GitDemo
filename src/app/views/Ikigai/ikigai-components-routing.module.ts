import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IkigaiComponentsComponent } from './ikigai-components/ikigai-components.component';

const routes: Routes = [
  {
    path: '', component: IkigaiComponentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IkigaiComponentsRoutingModule { }
