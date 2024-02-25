import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from "@angular/router";
import { AuthenticationService } from "../services/authentication.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn : 'root'
})
export class IsNotConnected implements CanLoad, CanActivate{
  constructor (
    private _router: Router,
    private _authService: AuthenticationService
  ) {}

  private _isNotConnected (): boolean {
    const isNotConnected = !this._authService.isAuthenticated()

    if (!isNotConnected) {
      this._router.navigateByUrl('/private')
    }

    return isNotConnected
  }

  canLoad (_route: Route, _segments: UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
    return this._isNotConnected()
  }

  canActivate (_next: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this._isNotConnected()
  }

}
