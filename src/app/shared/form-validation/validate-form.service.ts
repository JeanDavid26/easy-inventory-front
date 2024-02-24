import { EventEmitter, Injectable } from '@angular/core';
import { ToastService } from '../toast/toast.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormError } from '../../@models/interfaces/form-error.interface';

@Injectable({
  providedIn: 'root'
})
export class ValidateFormService {

  public error$ : EventEmitter<FormError[]> = new EventEmitter<FormError[]>()
  constructor(
    private _toastService : ToastService
  ) { }

  public handleFormValidationError(error : HttpErrorResponse) : void {
    if(error.error && error.error.response){
      const tFormError : FormError[] = []
      error.error.response.forEach((err : any)=> {
        const formError = this._transformHttpErrorToFormError(err)
        tFormError.push( formError)
      })
      this.error$.emit(tFormError)
      this._toastService.displayToast('warning', 'Des champs sont mals renseignés')
    }

  }

  private _transformHttpErrorToFormError ( error : any) : FormError {

    const formError : FormError = {
      inputLabel : '',
      error : {}
    }
    formError.inputLabel = error.property
    formError.error = error.constraints
    return formError
  }
}
