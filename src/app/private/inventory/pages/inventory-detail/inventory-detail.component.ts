import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InventoryService } from '../../../../core/services/inventory.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Inventory } from '../../../../@models/entities/Inventory.interface';
import { InventoryTypeEnum } from '../../../../@models/enum/inventory-type.enum';
import { BreadcrumbService } from '../../../../core/services/breadcrumb.service';

@Component({
  selector: 'app-inventory-detail',
  templateUrl: './inventory-detail.component.html',
  styleUrl: './inventory-detail.component.scss'
})
export class InventoryDetailComponent {
  public id :number
  public inventory : Inventory
  public form : FormGroup
  public inventoryEnumType = InventoryTypeEnum
  constructor(
    private _activatedRoute : ActivatedRoute,
    private _inventoryService : InventoryService,
    private _fb : FormBuilder,
    private _router : Router,
    private _bcService : BreadcrumbService
  ){
    this.id = Number(this._activatedRoute.snapshot.params['id'])
    this._inventoryService.inventory.subscribe((inventory)=>{
      if(inventory){
        this.id = inventory.id
      } else {
        this.id = 0
      }
      this._bcService.setBreadCrumb([
        {
          label : 'Stock',
          link : 'inventory'
        },
        {
          label : `${this.id ? inventory.label : 'Nouveau stock'}`,
          link : `inventory/${this.id}`
        },
      ])
      this.initForm()
    })


  }

  public initForm() {
    const inventory = this._inventoryService.inventory.value
    this.form = this._fb.group({
      label : inventory?.label,
      type : inventory?.type
    })
  }
  public async enregistrer() : Promise<void> {
    const inventory = this.form.getRawValue()
    await this._inventoryService.insert(inventory)
    this._router.navigateByUrl(`private/inventory/${this.id}/content`)
  }
}
