import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  providers : [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ]
})
export class InputComponent implements ControlValueAccessor, OnInit {

  @Input() type : 'text' | 'number' = 'text'
  @Input() label : string = ''
  @Input() required  : boolean = false
  @Input() numberOptions : {
    min? : number
    max? : number
  }
  // Actual value of the form control
  value: string | number = '';

  // Function to call when the value changes
  onChange: any = () => {}

  // Function to call when the input is touched
  onTouched: any = () => {}

  ngOnInit(): void {

  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  updateValue(val: string | null) {
    if (this.type === "number" && this.numberOptions) {
      if (val !== null && val !== undefined) {
        const numVal = Number(val);
        if (!isNaN(numVal)) {
          val = this.handleNumberOptions(numVal).toString();
        }
      }
    }
    this.writeValue(val);
    this.onChange(val);
    this.onTouched();
  }

  handleNumberOptions(val: number): number {
    if (this.numberOptions.min !== undefined && val < this.numberOptions.min) {
      return this.numberOptions.min;
    }
    if (this.numberOptions.max !== undefined && val > this.numberOptions.max) {
      return this.numberOptions.max;
    }
    return val;
  }
}
