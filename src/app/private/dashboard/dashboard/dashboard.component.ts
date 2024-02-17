import { Component } from '@angular/core';
import { BreadcrumbService } from '../../../core/services/breadcrumb.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(
    private _bcService : BreadcrumbService
  ){
    this._bcService.setBreadCrumb([
      {
        label : 'Tableau de bord',
        link : 'dashboard'
      }
    ])
  }
}
