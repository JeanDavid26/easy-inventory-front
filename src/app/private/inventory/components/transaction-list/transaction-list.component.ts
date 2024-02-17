import { Component } from '@angular/core';
import { Inventory } from '../../../../@models/entities/Inventory.interface';
import { InventoryService } from '../../../../core/services/inventory.service';
import { Router } from '@angular/router';
import { BreadcrumbService } from '../../../../core/services/breadcrumb.service';
import { filter, first, map } from 'rxjs';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrl: './transaction-list.component.scss'
})
export class TransactionListComponent {
  public inventory : Inventory

  constructor(
    private _inventoryService : InventoryService,
    private _router : Router,
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
        {
          label : `Transaction`,
          link : `inventory/${inventory.id}/transaction`
        },
      ])
    })


  }

  goToTransactionDetail(id :number) {
    this._router.navigateByUrl(`private/inventory/${this.inventory.id}/transaction/${id}`)
  }
}
