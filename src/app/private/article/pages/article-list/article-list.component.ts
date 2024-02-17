import { Component } from '@angular/core';
import { ArticleService } from '../../../../core/services/article.service';
import { Router } from '@angular/router';
import { Article } from '../../../../@models/entities/Article.interface';
import { BreadcrumbService } from '../../../../core/services/breadcrumb.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss'
})
export class ArticleListComponent {

  public tArticle : Article[] = []

  constructor(
    private _articleService : ArticleService,
    private _router : Router,
    private _bcService : BreadcrumbService
  ){
    this._bcService.setBreadCrumb([
      {
        label : 'Article',
        link : 'article'
      }
    ])
    this.initList()
  }

  public async initList() : Promise<void>{
   this.tArticle =  await this._articleService.list()
  }

  public goToArticleDetail(id : number) : void{
    this._router.navigateByUrl(`private/article/${id}`)
  }
}
