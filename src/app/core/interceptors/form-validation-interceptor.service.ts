import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ValidateFormService } from '../../shared/form-validation/validate-form.service';

@Injectable({
  providedIn: 'root'
})
export class FormValidationInterceptorService implements HttpInterceptor {

  constructor(
    private _validateFormService : ValidateFormService
  ) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(
      catchError((err, _caught)=> {
        console.log(err)
        if (err instanceof HttpErrorResponse) {

          // Si erreur 422
          if (err.status === 422) {
            this._validateFormService.handleFormValidationError(err)
            next.handle(req)
          }

        }

        return throwError(() => err)

      })
    )
  }
}
