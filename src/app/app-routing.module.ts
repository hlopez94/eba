import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuModulosComponent } from './menu-modulos/menu-modulos.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
{
  path: '',
  component: MenuModulosComponent
},
{
  path: 'Primers',
  loadChildren: () => import('./primers/primers.module').then(m => m.PrimersModule)
},
{
  path:'**',
  component:NotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
