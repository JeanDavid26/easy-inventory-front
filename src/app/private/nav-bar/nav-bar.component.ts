import { Component } from '@angular/core';
import { BreadcrumbItem, BreadcrumbService } from '../../core/services/breadcrumb.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  public breadcrumb : BreadcrumbItem[]

  constructor(
    private _breadcrumbService : BreadcrumbService
  ){
    this._breadcrumbService.breadcumb$.subscribe((breadcrumb)=>{
      this.breadcrumb = breadcrumb
    })
  }
}
