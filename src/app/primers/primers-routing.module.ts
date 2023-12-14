import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrimersComponent } from './primers.component';

const routes: Routes = [
{
  path:'',
  component: PrimersComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrimersRoutingModule { }
