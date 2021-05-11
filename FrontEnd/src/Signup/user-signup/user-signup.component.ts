import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { MustMatch } from './mustMatchValidator';
import { UserService } from 'src/Services/user.service';
import { User } from 'src/Models/User';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  registerUserForm: FormGroup;
  emailValidation: boolean = true;
  passwordValidation: boolean = true;

  ngOnInit(): void {
    if (localStorage.getItem('adminToken') !== null) {
      this.router.navigate(['admin-dashboard']);
    }
    if (localStorage.getItem('userToken') !== null) {
      this.router.navigate(['user-dashboard']);
    }
    this.registerUserForm = this.formBuilder.group(
      {
        email: [
          '',
          [
            Validators.required,
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')
          ]
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.pattern(
              '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
            )
          ]
        ],
        confirmPassword: ['']
      },
      {
        validator: MustMatch('password', 'confirmPassword')
      }
    );
  }

  get f() {
    return this.registerUserForm.controls;
  }

  onSubmit() {
    let email = this.registerUserForm.get('email').value;
    let password = this.registerUserForm.get('password').value;
    let user = new User();
    user.email = email;
    user.password = password;
    this.userService.register(user).subscribe(data => {
      if (data.userToken) {
        localStorage.setItem('userToken', data.userToken.toString());
        localStorage.setItem('email', data.email);
        this.router.navigate(['user-dashboard']);
      }
    });
  }

  onBack() {
    this.router.navigate(['/home']);
  }
}
