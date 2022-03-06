import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';
import { camposIguales, emailPattern, nombreApellidoPattern, noPuedeSerStrider } from 'src/app/shared/validator/validaciones';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private emailValidatorService: EmailValidatorService) { }

  ngOnInit(): void {

    this.miFomulario.reset({
      nombre: 'Marco Granados',
      email: 'test1@test.com',
      username: 'example',
      password: '123456',
      password2: '123456'
    });

  }

  public get emailErrorMsg(): string {
    const errors = this.miFomulario.get('email')?.errors;

    if (errors?.required) {
      return 'Email es obligatorio';
    } else if (errors?.pattern) {
      return 'Formato de email no válido';
    } else if (errors?.emailTomado) {
      return 'El email ya fue tomado';
    }

    return '';
  }

  public miFomulario = this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.pattern(nombreApellidoPattern)]],
    email: ['', [Validators.required, Validators.pattern(emailPattern)], [this.emailValidatorService]],
    username: ['', [Validators.required, noPuedeSerStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]]
  }, {
    validators: [camposIguales('password', 'password2')]
  });

  public campoNoValido(campo:string): boolean | undefined {
    return this.miFomulario.get(campo)?.invalid &&
      this.miFomulario.get(campo)?.touched;
  }

  // public emailRequired(): boolean | undefined {
  //   return this.miFomulario.get('email')?.errors?.required &&
  //   this.miFomulario.get('email')?.touched;
  // }

  // public emailFormato(): boolean | undefined {
  //   return this.miFomulario.get('email')?.errors?.pattern &&
  //   this.miFomulario.get('email')?.touched;
  // }

  // public emailTomado(): boolean | undefined {
  //   return this.miFomulario.get('email')?.errors?.emailTomado &&
  //   this.miFomulario.get('email')?.touched;
  // }

  public submitFomulario(): void {
    this.miFomulario.markAllAsTouched();
  }

}
