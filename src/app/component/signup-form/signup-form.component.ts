import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  Validators,
  ValidationErrors,
  ValidatorFn,
  AbstractControl,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule],
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
})
export class SignupFormComponent {
  formBuilder = inject(FormBuilder);

  signUpForm = this.formBuilder.group({
    firstname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
    lastname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
    email: ['', [Validators.required, Validators.email]],
    passwords: this.formBuilder.group(
      {
        password: ['', [Validators.required, this.securePasswordValidator(), Validators.minLength(8)]],
        confirmPassword: [''],
      },
      { validators: this.passwordMatchValidator() }
    ),
  });

  securePasswordValidator() {
    return (control: AbstractControl) => {
      const value = control.value;
      if (!value) return null;
      const hasUpperCase = /[A-Z]/.test(value);
      const hasLowerCase = /[a-z]/.test(value);
      const hasNumber = /\d/.test(value);
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
      const isValid =
        value.length >= 8 &&
        hasUpperCase &&
        hasLowerCase &&
        hasNumber &&
        hasSpecialChar;

       return isValid ? null : { securePassword: true };
    };
  }

  passwordMatchValidator(): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const password = formGroup.get('password')?.value;
      const confirmPassword = formGroup.get('confirmPassword')?.value;
      return password === confirmPassword ? null : { passwordsMismatch: true };
    };
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      console.log('Form Submitted', this.signUpForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
