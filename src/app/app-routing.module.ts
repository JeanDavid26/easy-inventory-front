import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsConnectedGuard } from './core/guards/isConnected.guard';
import { IsNotConnected } from './core/guards/IsNotConnected.guard';

const routes: Routes = [
  { path : '', redirectTo : 'private', pathMatch : 'full' },
  { path : 'private', loadChildren: () => import('./private/private.module').then(m => m.PrivateModule), canLoad : [IsConnectedGuard]},
  { path : 'public', loadChildren : () => import('./public/public.module').then(m => m.PublicModule), canLoad : [IsNotConnected]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
