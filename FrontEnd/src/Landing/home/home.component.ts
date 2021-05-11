import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem('adminToken')) {
      this.router.navigate(['/admin-dashboard']);
    }
    if (localStorage.getItem('userToken')) {
      this.router.navigate(['/user-dashboard']);
    }
  }

  toLogin() {
    this.router.navigate(['user-login']);
  }

  toSignup() {
    this.router.navigate(['user-signup']);
  }
}
