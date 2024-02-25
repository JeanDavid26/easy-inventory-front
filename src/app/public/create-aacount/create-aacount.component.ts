import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../core/services/authentication.service';
import { ToastService } from '../../shared/toast/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-aacount',
  templateUrl: './create-aacount.component.html',
  styleUrl: './create-aacount.component.scss'
})
export class CreateAacountComponent {
  public form :FormGroup

  constructor(
    private _authService : AuthenticationService,
    private _fb : FormBuilder,
    private _toastService : ToastService,
    private _router : Router
  ){
    this.form = this._fb.group({
      email : [ null , [ Validators.required ]],
      firstName : [ null , [ Validators.required ]],
      lastName : [ null , [ Validators.required ]],
      password : [ null , [ Validators.required ]]
    })
  }

  signUp() : void {
    const user = this.form.getRawValue()
    this._authService.signUp(user).then((user)=> {
      this._toastService.displayToast('sucess', 'Compte créé avec succès')
      this._router.navigateByUrl('public/login')
    })
  }
}
