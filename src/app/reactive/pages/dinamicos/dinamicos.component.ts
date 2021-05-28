import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl, Validator } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  public myForm : FormGroup = this.formBuilder.group({
    name: [null, [Validators.required, Validators.minLength(3)]],
    favorites: this.formBuilder.array([
      ['Metal Gear', Validators.required],
      ['Metal Slug', Validators.required]
    ], Validators.required)
  });

  public newFavorite: FormControl = this.formBuilder.control('', Validators.required);

  public get favoritesArr() {
    return this.myForm.get('favorites') as FormArray;
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  public isValid(campo: string) {
    return this.myForm.controls[campo].errors 
      && this.myForm.controls[campo].touched;
  }

  public saveData() {
    
    if (this.myForm.invalid) {
      return this.myForm.markAllAsTouched();
    }

    this.myForm.reset();
  }

  public addFavorite() {
    
    if (this.newFavorite.invalid) {
      return;
    }

    this.favoritesArr.push(new FormControl(this.newFavorite.value, Validators.required));
    this.newFavorite.reset();
  }

  public deleteFavorite(index: number) {
    this.favoritesArr.removeAt(index);
  }

}
