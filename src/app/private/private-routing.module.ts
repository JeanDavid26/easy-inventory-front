import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { CategoryListComponent } from './category/pages/category-list/category-list.component';
import { ArticleListComponent } from './article/pages/article-list/article-list.component';
import { InventoryListComponent } from './inventory/pages/inventory-list/inventory-list.component';
import { CategoryDetailComponent } from './category/pages/category-detail/category-detail.component';
import { ArticleDetailComponent } from './article/pages/article-detail/article-detail.component';
import { InventoryDetailComponent } from './inventory/pages/inventory-detail/inventory-detail.component';
import { InventoryContentComponent } from './inventory/components/inventory-content/inventory-content.component';
import { TransactionListComponent } from './inventory/components/transaction-list/transaction-list.component';
import { TransactionDetailComponent } from './inventory/components/transaction-detail/transaction-detail.component';
import { InventoryResolver } from './inventory/inventory.resolver';

const routes: Routes = [
  { path: '', component: NavBarComponent, children: [
    { path : 'dashboard', component : DashboardComponent },
    { path : 'category', component : CategoryListComponent },
    { path : 'category/:id', component : CategoryDetailComponent },
    { path : 'article/:id', component : ArticleDetailComponent},
    { path : 'article', component : ArticleListComponent },
    { path : 'inventory', component : InventoryListComponent},
    { path : 'inventory/:id', component : InventoryDetailComponent, resolve :{ inventory : InventoryResolver}, children : [
      { path : 'content', component : InventoryContentComponent},
      { path : 'transaction', component : TransactionListComponent },
      { path : 'transaction/:idTransaction', component : TransactionDetailComponent }

    ] }
  ] }
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PrivateRoutingModule { }
