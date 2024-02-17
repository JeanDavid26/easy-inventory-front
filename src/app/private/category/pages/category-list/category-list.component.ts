import { Component } from '@angular/core';
import { CategoryService } from '../../../../core/services/category.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Category } from '../../../../@models/entities/Category.interface';
import { BreadcrumbService } from '../../../../core/services/breadcrumb.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.scss'
})
export class CategoryListComponent {

  public tCategory : Category[] = []


  constructor(
    private _categoryService : CategoryService,
    private _router : Router,
    private _bcService : BreadcrumbService
  ){
    this._bcService.setBreadCrumb([
      {
        label : 'Catégorie',
        link : 'category'
      }
    ])
    this.initList()
  }

  public async initList() : Promise<void>{
   this.tCategory =  await this._categoryService.list()
  }

  public goToCategoryDetail(id : number) : void{
    this._router.navigateByUrl(`private/category/${id}`)
  }

}
