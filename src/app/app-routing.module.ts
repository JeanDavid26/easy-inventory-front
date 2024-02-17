import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path : '', redirectTo : 'private', pathMatch : 'full' },
  { path : 'private', loadChildren: () => import('./private/private.module').then(m => m.PrivateModule)},
  { path : 'public', loadChildren : () => import('./public/public.module').then(m => m.PublicModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
