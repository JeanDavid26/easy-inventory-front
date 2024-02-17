import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Article } from "../../@models/entities/Article.interface"
import { environment } from "../../../environments/environment"
import { lastValueFrom } from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    private _httpClient : HttpClient
  ){}

  public async list () : Promise<Article[]> {
    const route = environment.urlApi + `article`
    return lastValueFrom(this._httpClient.get<Article[]>(route))
  }

  public async get (id : number) : Promise<Article> {
    const route = environment.urlApi + `article/${id}`
    return lastValueFrom(this._httpClient.get<Article>(route))
  }

  public insert (data : Article) : Promise<Article> {
    const route = environment.urlApi + `article`
    return lastValueFrom(this._httpClient.post<Article>(route, data))
  }

  public update (id:number, data : Article) : Promise<Article> {
    console.log(data)
    const route = environment.urlApi + `article/${id}`
    return lastValueFrom(this._httpClient.put<Article>(route, data))
  }

  public async softDelete (id : number) : Promise<Article> {
    const route = environment.urlApi + `article/${id}`
    return lastValueFrom(this._httpClient.delete<Article>(route))
  }
}
