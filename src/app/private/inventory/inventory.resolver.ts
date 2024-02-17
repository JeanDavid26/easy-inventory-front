import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { InventoryService } from '../../core/services/inventory.service';
import { Inventory } from '../../@models/entities/Inventory.interface';

@Injectable
({ providedIn: 'root' })
export class InventoryResolver implements Resolve<Inventory> {
constructor(private _inventoryService: InventoryService) {}

resolve(
route: ActivatedRouteSnapshot,
state: RouterStateSnapshot
): Observable<Inventory>|Promise<Inventory>|Inventory {
  const id = Number(route.paramMap.get('id'))
  if(id){
    return this._inventoryService.get(id)
  }else {
    this._inventoryService.inventory.next(null)
    return null
  }

}
}
