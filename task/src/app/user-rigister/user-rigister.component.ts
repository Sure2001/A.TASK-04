// src/app/register/register.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-userregister',
  templateUrl: './user-rigister.component.html',
  styleUrls: ['./user-rigister.component.css'],
})
export class UserRigisterComponent {
  registerForm: FormGroup;
  submitted = false;


  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group(
      {
        name: ['', Validators.required],
        mobileNo: [
          '',
          [Validators.required, Validators.pattern('^[0-9]{10}$')],
        ],
        email: ['', [Validators.required, Validators.email]],
        dob: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue],
      },
      {
        validators: this.mustMatch('password', 'confirmPassword'),
      }
    );
  }

  // Custom validator to match passwords
  mustMatch(password: string, confirmPassword: string) {
    return (formGroup: AbstractControl) => {
      const passControl = formGroup.get(password);
      const confirmPassControl = formGroup.get(confirmPassword);

      if (
        confirmPassControl?.errors &&
        !confirmPassControl.errors['mustMatch']
      ) {
        return;
      }

      if (passControl?.value !== confirmPassControl?.value) {
        confirmPassControl?.setErrors({ mustMatch: true });
      } else {
        confirmPassControl?.setErrors(null);
      }
    };
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    // Output form data to console
    console.log('Form Submitted:', this.registerForm.value);
    alert('Registration Successful!');
    this.registerForm.reset();
    this.submitted = false;
  }
}
