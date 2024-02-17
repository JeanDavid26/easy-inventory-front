import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { RouterModule } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { ToggleButtonComponent } from './components/toggle-button/toggle-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { ToastComponent } from './toast/toast/toast.component';
import { InputErrorDirective } from './form-validation/input-error.directive';



@NgModule({
  declarations: [
    ButtonComponent,
    TableComponent,
    ToggleButtonComponent,
    DatePickerComponent,
    ToastComponent,
    InputErrorDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports : [
    ReactiveFormsModule,
    ButtonComponent,
    RouterModule,
    ToggleButtonComponent,
    FontAwesomeModule,
    DatePickerComponent,
    ToastComponent,
    InputErrorDirective
  ]
})
export class SharedModule { }
