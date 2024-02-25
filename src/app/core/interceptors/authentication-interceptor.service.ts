import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Router } from "@angular/router"
import { AuthenticationService } from "../services/authentication.service"
import { ToastService } from "../../shared/toast/toast.service"
import { Observable, catchError, throwError } from "rxjs"
import { LocalStorageService } from "../services/local-storage.service"

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
  constructor (
    private _authService: AuthenticationService,
  ) {}

  private _addTokenToBearer (req: HttpRequest<any>): HttpRequest < any > {

    if (this._authService.access_token) {
      return req.clone({ setHeaders: { Authorization: 'Bearer ' + this._authService.access_token } })
    }

    return req
  }

  intercept (request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(this._addTokenToBearer(request))
      .pipe(
        catchError((err, _caught) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401 ) {
              this._authService.signOut()
            }
          }
          const error = new Error(err)
          return throwError(() => error)
        })
      )
  }
}
