import { Component } from '@angular/core';
import { Inventory } from '../../../../@models/entities/Inventory.interface';
import { InventoryService } from '../../../../core/services/inventory.service';
import { BreadcrumbService } from '../../../../core/services/breadcrumb.service';
import { filter, first } from 'rxjs';

@Component({
  selector: 'app-inventory-content',
  templateUrl: './inventory-content.component.html',
  styleUrl: './inventory-content.component.scss'
})
export class InventoryContentComponent {
  public inventory : Inventory

  constructor(
    private _inventoryService : InventoryService,
    private _bcService : BreadcrumbService
  ){

    this.inventory = this._inventoryService.inventory.value
    this._inventoryService.inventory.subscribe((inventory)=>{
      this.inventory = inventory
    })

    this._inventoryService.inventory.pipe(
      filter(value => value !== null),
      first()
    ).subscribe((inventory)=>{
      this._bcService.setBreadCrumb([
        {
          label : 'Stock',
          link : 'inventory'
        },
        {
          label : `${inventory.id ? inventory.label : 'Nouveau stock'}`,
          link : `inventory/${this.inventory.id}/content`
        },
      ])
    })
  }
}
