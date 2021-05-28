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
    product: [null, [Validators.required, Validators.minLength(3)]],
    price: [null, [Validators.required, Validators.min(0)]],
    stocks: [null, [Validators.required, Validators.min(0)]]
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  
    this.myForm.setValue({
      product: 'RTX',
      price: 10,
      stocks: 10
    });

  }

  public isValid(campo: string) {
    return this.myForm.controls[campo].errors && this.myForm.controls[campo].touched;
  }

  public saveData() {
    
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);
    this.myForm.reset();
  }

}
