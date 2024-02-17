import { Component } from '@angular/core';
import { Transaction } from '../../../../@models/entities/Transaction.interface';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransactionService } from '../../../../core/services/transaction.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Inventory } from '../../../../@models/entities/Inventory.interface';
import { InventoryService } from '../../../../core/services/inventory.service';
import { TransactionTypeEnum } from '../../../../@models/enum/transaction-type.enum';
import { ToggleButton } from '../../../../shared/components/toggle-button/toggle-button.component';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { BreadcrumbService } from '../../../../core/services/breadcrumb.service';
import { Article } from '../../../../@models/entities/Article.interface';
import { ArticleService } from '../../../../core/services/article.service';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrl: './transaction-detail.component.scss'
})
export class TransactionDetailComponent {
  public id :number
  public inventory : Inventory
  public transaction : Transaction = null
  public form : FormGroup
  public tArticle : Article[] = []
  faPlus = faPlus
  faTrash = faTrash
  public tButtonTransactionType : ToggleButton[] = [
    { label : 'Import', value : TransactionTypeEnum.IMPORT},
    { label : 'Vente', value : TransactionTypeEnum.VENTE}
  ]
  constructor(
    private _transactionService: TransactionService,
    private _fb : FormBuilder,
    private _activatedRouteSnapshot : ActivatedRoute,
    private _router : Router,
    private _inventoryService : InventoryService,
    private _bcService : BreadcrumbService,
    private _articleService : ArticleService
  ) {
    this.inventory = this._inventoryService.inventory.value
    this.initForm().then(()=> {
      this._bcService.setBreadCrumb([
        {
          label : 'Stock',
          link : 'inventory'
        },
        {
          label : `${this.inventory.id ? this.inventory.label : 'Nouveau stock'}`,
          link : `inventory/${this.inventory.id}/content`
        },
        {
          label : `Transaction`,
          link : `inventory/${this.inventory.id}/transaction`
        },
        {
          label : `${this.id ? `${ this.transaction.type} - ${this.transaction.date.toLocaleDateString()}` : 'Nouvelle transaction'}`,
          link : `inventory/${this.inventory.id}/transaction/${this.id}`
        },
      ])
    })

  }

  tArticleQuantity () : FormArray {
    return this.form.get('tArticleQuantity') as FormArray
  }

  addArticleQuantity () : void {
    const formArticleQuantity = this._fb.group({
      articleId : null,
      quantity : null
    })
    this.tArticleQuantity().push(formArticleQuantity)
  }

  deleteArticleQuantity (index : number) : void {

    this.tArticleQuantity().removeAt(index)
  }

  public async initForm() {
    this.tArticle = await this._articleService.list()
    this.id = Number(this._activatedRouteSnapshot.snapshot.params['idTransaction'])
    if(this.id){
      this.transaction = await this._transactionService.get(this.id)
    }

    this.form = this._fb.group({
      inventoryId : this.inventory.id,
      date : [this.transaction?.date, Validators.required],
      type : [ this.transaction? this.transaction.type : TransactionTypeEnum.IMPORT, Validators.required],
      tArticleQuantity : this._fb.array([])
    })
  }

  public async enregistrer () : Promise<void> {
    const transaction : Transaction = {
      ...this.form.getRawValue()
    }
    if(!this.id){
      await this._transactionService.insert(transaction).then(()=> {
        this._inventoryService.get(this.inventory.id).then(()=>{
          this._router.navigateByUrl(`private/inventory/${this.inventory.id}/transaction`)
        })

      })
    }
  }
}
