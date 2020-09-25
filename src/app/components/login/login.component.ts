import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // loginForm = new FormGroup({
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  // });

  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private route: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    console.warn(this.loginForm.value);

    if (
      this.loginForm.value.email == 'test@test.com' &&
      this.loginForm.value.password == 'pass'
    ) {
      this.route.navigate(['/home']);
    } else {
      alert('Wrong email and password');
    }
  }
}
