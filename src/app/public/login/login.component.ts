import { Component } from '@angular/core';
import { AuthenticationService } from '../../core/services/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from '../../shared/toast/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  public form : FormGroup

  constructor(
    private _authService :AuthenticationService,
    private _fb : FormBuilder,
    private _toastService : ToastService
  ){
    this.form = this._fb.group({
      email : [ null,[ Validators.required]],
      password : [null, [ Validators.required]]
    })
  }

  signIn() {
    const userCredential = this.form.getRawValue()
    this._authService.signIn(userCredential.email, userCredential.password).then((res)=> {
      if(res){
        this._toastService.displayToast('sucess')
      }
    })
  }

}
