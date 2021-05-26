import { Directive, Input } from '@angular/core';
import { Validator } from '@angular/forms';

@Directive({
  selector: '[appMin]'
})
export class MinDirective implements Validator {
  @Input() minimo! : number;

  constructor() { }

}
