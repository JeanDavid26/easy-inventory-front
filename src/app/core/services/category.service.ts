import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Category } from "../../@models/entities/Category.interface";
import { environment } from "../../../environments/environment";
import { lastValueFrom } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private _httpClient : HttpClient
  ){}

  public async list () : Promise<Category[]> {
    const route = environment.urlApi + `category`
    return lastValueFrom(this._httpClient.get<Category[]>(route))
  }

  public async get (id : number) : Promise<Category> {
    const route = environment.urlApi + `category/${id}`
    return lastValueFrom(this._httpClient.get<Category>(route))
  }

  public insert (data : Category) : Promise<Category> {
    const route = environment.urlApi + `category`
    return lastValueFrom(this._httpClient.post<Category>(route, data))
  }

  public update (id:number, data : Category) : Promise<Category> {
    const route = environment.urlApi + `category/${id}`
    return lastValueFrom(this._httpClient.put<Category>(route, data))
  }
}
