import { Injectable } from '@angular/core';
import {
  FormControl,
  ValidationErrors,
  FormGroup,
  FormArray,
  AbstractControl,
} from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class ValidatorsService {
  public firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  public cantBeStrider = (control: FormControl): ValidationErrors | null => {
    const value: string = control.value.trim().toLowerCase();

    if (value === 'strider') {
      return {
        noStrider: true,
      };
    }
    return null;
  };

  public isValidField(form: FormGroup, field: string) {
    return form.controls[field].errors && form.controls[field].touched;
  }

  public isFieldOneEqualFieldTwo(fieldOne: string, fieldTwo: string) {
    return (form: AbstractControl) => {
      const fieldValue1 = form.get(fieldOne)?.value;
      const fieldValue2 = form.get(fieldTwo)?.value;

      if (fieldValue1 !== fieldValue2) {
        form.get(fieldTwo)?.setErrors({ notEqual: true });
        return { notEqual: true };
      }
      form.get(fieldTwo)?.setErrors(null);
      return null;
    };
  }
}
