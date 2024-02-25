import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormValidationInterceptorService } from './interceptors/form-validation-interceptor.service';
import { AuthenticationInterceptor } from './interceptors/authentication-interceptor.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers : [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FormValidationInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true
    }

  ]
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded.')
    }
  }

}
