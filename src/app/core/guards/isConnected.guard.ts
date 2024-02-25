import { Injectable } from "@angular/core"
import { CanActivate, CanLoad, Router, UrlTree } from "@angular/router"
import { AuthenticationService } from "../services/authentication.service"
import { UserServcice } from "../services/user.service"
import { Observable } from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class IsConnectedGuard implements CanLoad, CanActivate {

  constructor (
    private _router: Router,
    private _authService: AuthenticationService,
    private _userService : UserServcice
  ) {}

  private async _isConnected (): Promise<boolean> {
    const isConnected = this._authService.isAuthenticated()

    if (!isConnected) {
      this._router.navigateByUrl('/public/login')
    } else {
      await this._userService.getUser()
    }

    return isConnected
  }

  canLoad (): boolean | Observable<boolean> | Promise<boolean> {
    return this._isConnected()
  }

  canActivate (): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this._isConnected()
  }
}
