import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Toast } from '../../@models/interfaces/toast.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  public newToast : EventEmitter<Toast> = new EventEmitter<Toast>()
  public dismissToast : EventEmitter<string> = new EventEmitter<string>()
  constructor() { }

  displayToast(type : 'sucess' | 'warning' | 'error', message? : string) : void {
    const toast: Toast = { id: uuidv4(), type, message };
    this.newToast.emit(toast);

    if(type === 'sucess' || type === 'warning'){
      setTimeout(() => this.dismissToast.emit(toast.id), 3000);
    }
  }
}
