import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {
  @ViewChild('myForm') myForm!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  public productValid(): boolean {
    return this.myForm?.controls.product?.invalid && this.myForm?.controls.product?.touched;
  }
  
  public priceValid(): boolean {
    return this.myForm?.controls.price?.value < 0  && this.myForm?.controls.price?.touched;
  }

  public saveData() {
    console.log(this.myForm);
  }

}
