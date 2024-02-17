import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { Transaction } from "../../@models/entities/Transaction.interface"
import { lastValueFrom } from "rxjs"
import { environment } from "../../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(
    private _httpClient : HttpClient
  ){}

  public async list () : Promise<Transaction[]> {
    const route = environment.urlApi + `transaction`
    return lastValueFrom(this._httpClient.get<Transaction[]>(route))
  }

  public async get (id : number) : Promise<Transaction> {
    const route = environment.urlApi + `transaction/${id}`
    return lastValueFrom(this._httpClient.get<Transaction>(route))
  }

  public insert (data : Transaction) : Promise<Transaction> {
    const route = environment.urlApi + `transaction`
    return lastValueFrom(this._httpClient.post<Transaction>(route, data))
  }

  public update (id:number, data : Transaction) : Promise<Transaction> {
    const route = environment.urlApi + `transaction/${id}`
    return lastValueFrom(this._httpClient.put<Transaction>(route, data))
  }
}
