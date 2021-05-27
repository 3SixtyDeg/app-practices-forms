import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Persona, Favorito } from '../../interfaces/persona.interface';



@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {
  @ViewChild('myForm') myForm!: NgForm;
  public favorite: string = '';
  public persona: Persona = {
    nombre: 'Diana',
    favoritos: [
      { id: 1, nombre: 'Metal Slug' },
      { id: 2, nombre: 'Capcom vs Marvel' }
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

  public nameValid(): boolean {
    return this.myForm?.controls?.name?.pristine && this.myForm?.controls?.name?.touched;
  }

  public addFavorite() {

    const itemFavorite: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.favorite
    }

    this.persona.favoritos.push({...itemFavorite});
    this.favorite = '';
  }

  public saveData() {

  }

  public delete(index: number) {
    this.persona.favoritos.splice(index, 1);
  }

}
