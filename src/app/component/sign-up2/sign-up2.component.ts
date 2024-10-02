import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-sign-up2',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up2.component.html',
  styleUrls: ['./sign-up2.component.scss'],
})
export class SignUp2Component {
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialize the form with FormBuilder
    this.signUpForm = this.fb.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      address: this.fb.group({
        city: ['', Validators.required],
        street: ['', Validators.required],
        zip: ['', Validators.required]
      })
    });
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      const newUser: User = this.signUpForm.value;
      console.log('User registered:', newUser);
    } else {
      console.log('Form is invalid');
    }
  }
}
