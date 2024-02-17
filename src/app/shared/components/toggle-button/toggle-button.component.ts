import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrl: './toggle-button.component.scss',
  providers : [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToggleButtonComponent),
      multi: true,
    },
  ]
})
export class ToggleButtonComponent implements ControlValueAccessor {

  @Input() tButton : ToggleButton[] =[]
   // The internal data model for form control value
   private innerValue: any = '';

   // Placeholders for the callbacks which are later provided by the Forms API
   private onChange: (value: any) => void = () => {};
   private onTouched: () => void = () => {};

   // get accessor
   get value(): any {
     return this.innerValue;
   }

   // set accessor including call the onchange callback
   set value(v: any) {
     if (v !== this.innerValue) {
       this.innerValue = v;
       this.onChange(v);
     }
   }

   // Set touched on blur
   onBlur() {
     this.onTouched();
   }

   // From ControlValueAccessor interface
   writeValue(value: any): void {
     if (value !== this.innerValue) {
       this.innerValue = value;
     }
   }

   // From ControlValueAccessor interface
   registerOnChange(fn: any): void {
     this.onChange = fn;
   }

   // From ControlValueAccessor interface
   registerOnTouched(fn: any): void {
     this.onTouched = fn;
   }
}

export interface ToggleButton {
  label : string,
  value : string | number
}
