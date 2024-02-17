import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn : 'root'
})
export class BreadcrumbService {

  public breadcumb$ : BehaviorSubject<BreadcrumbItem[]> = new BehaviorSubject<BreadcrumbItem[]>([])

  public setBreadCrumb (tBreadCrumbItem : BreadcrumbItem[]) : void {
    this.breadcumb$.next(tBreadCrumbItem);
  }
}

export interface BreadcrumbItem {
  label : string
  link : string
}
