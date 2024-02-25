import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateAacountComponent } from './create-aacount/create-aacount.component';

const routes: Routes = [
  { path : '', redirectTo : 'private', pathMatch : 'full' },
  { path : 'login', component : LoginComponent},
  { path : 'create-account', component : CreateAacountComponent}
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PublicRoutingModule { }
