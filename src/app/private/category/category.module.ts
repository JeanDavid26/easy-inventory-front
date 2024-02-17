import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './pages/category-list/category-list.component';
import { CategoryDetailComponent } from './pages/category-detail/category-detail.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    CategoryListComponent,
    CategoryDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CategoryModule { }
