import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { lastValueFrom } from "rxjs";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { LocalStorageService } from "./local-storage.service";
import { User } from "../../@models/entities/User.interface";

@Injectable({
  providedIn : 'root'
})
export class AuthenticationService {
  private readonly _keyAccessToken = 'EASYINVENTORY_JWT_TOKEN'
  private _access_token : string

  get access_token (): string {
    return this._access_token
  }


  constructor(
    private _httpClient : HttpClient,
    private _router : Router,
    private _localStorageService : LocalStorageService
  ) {}


  public signIn(email : string, password : string) : Promise<string> {
    const route = environment.urlApi + `auth/singin`
    return lastValueFrom(this._httpClient.post<string>(route, { email, password })).then((access_token)=> {
      this._localStorageService.setItem(this._keyAccessToken, access_token)
      this.redirectionConnexion()
      return access_token
    })
  }

  public signUp(user : User) : Promise<User> {
    const route = environment.urlApi + `auth/signup`
    return lastValueFrom(this._httpClient.post<User>(route, user))
  }

  public signOut() : void{
    this._localStorageService.removeItem(this._keyAccessToken)
    this.redirectionConnexion()
  }

  public isAuthenticated() : boolean {
    if (!this._access_token) {
      this._access_token = localStorage.getItem(this._keyAccessToken)
    }

    return this._access_token ? true : false
  }

  public redirectionConnexion () {
    if (this.isAuthenticated()) {
      this._router.navigateByUrl('/private')
    } else {
      this._router.navigateByUrl('/public')
    }
  }



}
