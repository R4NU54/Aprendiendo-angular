import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, delay, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmailValidator implements AsyncValidator {
  constructor() {}

  // validate(control: AbstractControl): Observable<ValidationErrors | null> {
  //   const email = control.value;

  //   return of({
  //     emailTaken: true,
  //   }).pipe(delay(2000));
  // }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value;

    const httpCallOvservable = new Observable<ValidationErrors | null>(observer => {
      console.log({ email });

      if (email === 'ranusa2k@google.com') {
        observer.next({ emailTaken: true });
        observer.complete();
        // return
      }
      observer.next(null);
      observer.complete();
    }).pipe(delay(2000));
    return httpCallOvservable;
  }
}
