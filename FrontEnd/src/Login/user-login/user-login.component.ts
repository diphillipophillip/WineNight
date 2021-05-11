import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/Models/User';
import { UserService } from 'src/Services/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  userLoginForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.userLoginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    if (localStorage.getItem('adminToken') !== null) {
      this.router.navigate(['admin-dashboard']);
    }
    if (localStorage.getItem('userToken') !== null) {
      this.router.navigate(['user-dashboard']);
    }
  }

  onBack() {
    this.router.navigate(['/home']);
  }

  toAdmin() {
    this.router.navigate(['/admin-login']);
  }

  onSubmit() {
    let user = new User();
    user.email = this.userLoginForm.get('email').value;
    user.password = this.userLoginForm.get('password').value;
    this.userService.login(user).subscribe(data => {
      if (data.userToken) {
        localStorage.setItem('userToken', data.userToken);
        localStorage.setItem('email', data.email);
        this.router.navigate(['user-dashboard']);
      }
    });
  }
}
