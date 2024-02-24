import { AfterViewInit, Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { ValidateFormService } from './validate-form.service';
import { FormError } from '../../@models/interfaces/form-error.interface';

@Directive({
  selector: '[appInputError]'
})
export class InputErrorDirective implements OnInit {
  inputLabel : string
  constructor(
    private el: ElementRef,
    private _renderer : Renderer2,
    private _validateForm : ValidateFormService
  ) {


  }
  ngOnInit(): void {
    this._getInputLabel()
    if(this.inputLabel){
      this._validateForm.error$
      .subscribe((tFormError)=> {
        const oFormError = tFormError.find(obj=> obj.inputLabel === this.inputLabel)
        if(oFormError){
          this._displayFormErrorMessage(oFormError)
        }
      })
    }
  }

  private _getInputLabel(){
    const divEl = this.el.nativeElement
    if(divEl){
      this.inputLabel = divEl.getAttribute('formControlName')
    }
    if(divEl.querySelector('select')){
      this.inputLabel = divEl.querySelector('select').getAttribute('formControlName')
    }
  }
  private _displayFormErrorMessage(err : FormError) {
    const divEl = this.el.nativeElement
    const divError = this._renderer.createElement('div')

    this._renderer.addClass(divError, 'error')
    const txt = this._renderer.createText(Object.values(err.error).join(','))
    const existingErrorDiv = divEl.querySelector('.error')
    if(existingErrorDiv){
      this._renderer.removeChild(divEl, existingErrorDiv)
    }

    this._renderer.appendChild(divError, txt)
    this._renderer.appendChild(divEl, divError)
  }

}
