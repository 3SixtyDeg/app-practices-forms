import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  // public myForm: FormGroup = new FormGroup({
  //   'product': new FormControl('RTX'),
  //   'price': new FormControl(10),
  //   'stocks': new FormControl(15)
  // });

  public myForm: FormGroup = this.formBuilder.group({
    product: ['RTX', [Validators.required, Validators.minLength(3)]],
    price: [10, [Validators.required, Validators.min(0)]],
    stocks: [10, [Validators.required, Validators.min(0)]]
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
