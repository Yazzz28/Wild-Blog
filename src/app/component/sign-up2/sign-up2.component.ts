import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; // Ajouter ReactiveFormsModule ici
import { emailValidator } from '../../validator/email-validator';

@Component({
  selector: 'app-sign-up2',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up2.component.html',
  styleUrls: ['./sign-up2.component.scss'],
})
export class SignUp2Component {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      address: this.fb.group({
        street: [''],
        city: [''],
        zipCode: [''],
      }),
      credentials: this.fb.group({
        email: ['', [Validators.required, emailValidator]],
        password: ['', [Validators.required]],
      }),
    });
  }

  onSubmit() {
    console.log(this.userForm.value);
  }
}
