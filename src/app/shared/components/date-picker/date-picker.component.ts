import { Component, ViewChild, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss',
  providers : [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatePickerComponent),
      multi: true,
    },
  ]
})
export class DatePickerComponent implements ControlValueAccessor {
  // The internal data model for form control value
  private innerValue: any = '';

  @ViewChild('datePicker') datePicker : HTMLInputElement
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

  setValue(event : any) : void {
    console.log(event)
    console.log('ici', this.datePicker.form)
    this.value = this.datePicker.valueAsDate
  }
}
