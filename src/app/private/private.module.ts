import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PrivateRoutingModule } from './private-routing.module';
import { InventoryModule } from './inventory/inventory.module';
import { CategoryModule } from './category/category.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ArticleModule } from './article/article.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    InventoryModule,
    CategoryModule,
    DashboardModule,
    ArticleModule,
    SharedModule
  ]
})
export class PrivateModule { }
