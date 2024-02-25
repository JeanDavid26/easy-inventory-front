import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../../@models/entities/User.interface";
import { environment } from "../../../environments/environment";
import { lastValueFrom } from "rxjs";

@Injectable({
  providedIn : 'root'
})
export class UserServcice {

  private _currentUser : User
  constructor(
    private _httpClient : HttpClient
  ){}

  public getUser (): Promise<User> {
    if (this._currentUser) {
      return Promise.resolve(this._currentUser)
    }

    const route = environment.urlApi + 'auth/user'


    return lastValueFrom(this._httpClient.get<User>(route)).then(user => {
        this._currentUser = user
        return user
      })
  }


}
