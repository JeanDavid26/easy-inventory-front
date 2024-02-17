import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Inventory } from "../../@models/entities/Inventory.interface"
import { environment } from "../../../environments/environment"
import { BehaviorSubject, lastValueFrom } from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  public inventory : BehaviorSubject<Inventory> = new BehaviorSubject(null)
  constructor(
    private _httpClient : HttpClient
  ){}

  public async list () : Promise<Inventory[]> {
    const route = environment.urlApi + `inventory`
    return lastValueFrom(this._httpClient.get<Inventory[]>(route))
  }

  public async get (id : number) : Promise<Inventory> {
    const route = environment.urlApi + `inventory/${id}`
    return lastValueFrom(this._httpClient.get<Inventory>(route)).then((inventory)=> {
      this.inventory.next(inventory)
      return inventory
    })
  }

  public insert (data : Inventory) : Promise<Inventory> {
    const route = environment.urlApi + `inventory`
    return lastValueFrom(this._httpClient.post<Inventory>(route, data)).then(async (inventory)=>{
      await this.get(inventory.id)
      return this.inventory.value
    })
  }

  public update (id:number, data : Inventory) : Promise<Inventory> {
    const route = environment.urlApi + `inventory/${id}`
    return lastValueFrom(this._httpClient.put<Inventory>(route, data)).then(async (inventory)=>{
      await this.get(id)
      return this.inventory.value
    })
  }
}
