import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem('adminToken') !== null) {
      this.router.navigate(['admin-dashboard']);
    }
    if (localStorage.getItem('userToken') === null) {
      this.router.navigate(['home']);
    }
  }

  toLogout() {
    localStorage.removeItem('userToken');
    localStorage.removeItem('email');
    this.router.navigate(['home']);
  }
}
