import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CreateAacountComponent } from './create-aacount/create-aacount.component';
import { PublicRoutingModule } from './public-routing.module';



@NgModule({
  declarations: [
    LoginComponent,
    CreateAacountComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
