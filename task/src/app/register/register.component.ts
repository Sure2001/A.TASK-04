// src/app/register/register.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = {
    name: '',
    mobileNo: '',
    email: '',
    dob: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  };

  submitted = false;

  onSubmit(form: any): void {
    this.submitted = true;
    if (form.valid && this.user.password === this.user.confirmPassword) {
      alert('Form submitted successfully!');
      console.log('User data:', this.user);
      form.resetForm();
      this.submitted = false;
    }
  }
}

