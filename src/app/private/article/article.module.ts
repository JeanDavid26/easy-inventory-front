import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './pages/article-list/article-list.component';
import { ArticleDetailComponent } from './pages/article-detail/article-detail.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    ArticleListComponent,
    ArticleDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ArticleModule { }
