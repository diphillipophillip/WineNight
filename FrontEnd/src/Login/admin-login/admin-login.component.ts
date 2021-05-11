import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Admin } from 'src/Models/Admin';
import { AdminService } from 'src/Services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  adminLoginForm: FormGroup;
  errorMessage;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('adminToken') !== null) {
      this.router.navigate(['admin-dashboard']);
    }
    if (localStorage.getItem('userToken') !== null) {
      this.router.navigate(['user-dashboard']);
    }
    this.adminLoginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onBack() {
    this.router.navigate(['/home']);
  }

  onSubmit() {
    let admin = new Admin();
    admin.email = this.adminLoginForm.get('email').value;
    admin.password = this.adminLoginForm.get('password').value;
    let data = {};
    this.adminService.login(admin).subscribe(data => {
      if (data.adminToken) {
        localStorage.setItem('adminToken', data.adminToken.toString());
        this.router.navigate(['admin-dashboard']);
      }
    });
  }
}
