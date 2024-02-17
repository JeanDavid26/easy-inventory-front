import { Component, OnDestroy } from '@angular/core';
import { Toast } from '../../../@models/interfaces/toast.interface';
import { ToastService } from '../toast.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent implements OnDestroy {
  public tToast : Toast[] = []

  public tSubsciption : Subscription[] = []
  constructor(private _toastService : ToastService){

    this.tSubsciption.push(
      this._toastService.newToast.subscribe((toast)=>{
      this.tToast.push(toast)
    })
    )

    this.tSubsciption.push(
      this._toastService.dismissToast.subscribe((id)=> {
        this.tToast = this.tToast.filter(obj => obj.id !== id)
      })
    )

  }

  ngOnDestroy(): void {
    this.tSubsciption.forEach((sub)=>{
      sub.unsubscribe()
    })
  }

  dismissToast(id : string) : void {
    this.tToast = this.tToast.filter((toast) => toast.id !== id)
  }
}
