import { Directive, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms';



@Directive({
  selector: '[appMin]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: MinDirective,
    multi: true
  }]
})
export class MinDirective implements Validator {
  @Input() minimo! : number;

  constructor() { }

  validate(control: FormControl) {
    let inputValue = control.value;
    return (inputValue < this.minimo) ? {'min': true} : null;
  }

}
