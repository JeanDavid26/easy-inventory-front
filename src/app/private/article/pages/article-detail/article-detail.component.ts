import { Component } from '@angular/core';
import { Article } from '../../../../@models/entities/Article.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArticleService } from '../../../../core/services/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../../../../@models/entities/Category.interface';
import { CategoryService } from '../../../../core/services/category.service';
import { BreadcrumbService } from '../../../../core/services/breadcrumb.service';
import { ToastService } from '../../../../shared/toast/toast.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrl: './article-detail.component.scss'
})
export class ArticleDetailComponent {
  public id :number
  public article : Article = null
  public form : FormGroup
  public tCategory : Category[]
  constructor(
    private _articleService: ArticleService,
    private _categoryService : CategoryService,
    private _fb : FormBuilder,
    private _activatedRouteSnapshot : ActivatedRoute,
    private _router : Router,
    private _bcService : BreadcrumbService,
    private _toastService : ToastService
  ) {
    this.initForm().then(()=> {
      this._bcService.setBreadCrumb([
        {
          label : 'Article',
          link : 'article'
        },
        {
          label : `${this.id ? this.article.label : 'Nouveau article'}`,
          link : `article/${this.id}`
        },
      ])
    })
  }

  public async initForm() {
    this.tCategory = await this._categoryService.list()
    this.id = Number(this._activatedRouteSnapshot.snapshot.params['id'])
    if(this.id){
      this.article = await this._articleService.get(this.id)
    }

    this.form = this._fb.group({
      label : [this.article?.label, Validators.required],
      referenceCode : [ this.article?.referenceCode, Validators.required],
      categoryId : [ this.article?.categoryId, Validators.required],
      unitPrice : [ this.article?.unitPrice, Validators.required],

    })
  }

  public async enregistrer () : Promise<void> {
    const article : Article = {
      ...this.form.getRawValue()
    }
    if(!this.id){
      await this._articleService.insert(article).then(()=> {
        this._toastService.displayToast('sucess')
        this._router.navigateByUrl('private/article')
      })
    }else {
      await this._articleService.update(this.id, article)
    }

  }

  softDelete() : void {
    this._articleService.softDelete(this.id).then(()=> {
        this._router.navigateByUrl('private/article')
    })
  }
}
