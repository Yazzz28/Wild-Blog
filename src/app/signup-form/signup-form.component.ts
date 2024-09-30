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
  // Injecting FormBuilder using Angular's inject function
  formBuilder = inject(FormBuilder);

  // Defining the signUpForm form group with nested passwords group
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

  // Custom password security validator (example of a basic rule)
  securePasswordValidator() {
    return (control: AbstractControl) => {
      const value = control.value;
      if (!value) return null;
      // Example: at least 8 characters, 1 uppercase, 1 lowercase, and 1 number and 1 special character
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

  // Custom validator to check if password and confirmPassword match
  passwordMatchValidator(): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const password = formGroup.get('password')?.value;
      const confirmPassword = formGroup.get('confirmPassword')?.value;
      return password === confirmPassword ? null : { passwordsMismatch: true };
    };
  }

  // Function triggered on form submission
  onSubmit() {
    if (this.signUpForm.valid) {
      console.log('Form Submitted', this.signUpForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
