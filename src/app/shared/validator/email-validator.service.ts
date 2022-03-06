import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator {

  constructor(private http: HttpClient) { }

  public validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value;

    let params = new HttpParams()
      .set('q', email);

    return this.http.get<any[]>('http://localhost:3000/usuarios', {params: params})
      .pipe(
        delay(3000),
        map(response => {
          return (response.length === 0) ? null: { emailTomado: true }
        })
      )
  }

}
