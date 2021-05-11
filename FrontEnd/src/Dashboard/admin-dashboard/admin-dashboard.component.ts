import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem('userToken') !== null) {
      this.router.navigate(['user-dashboard']);
    }
    if (localStorage.getItem('adminToken') === null) {
      this.router.navigate(['home']);
    }
  }

  add: boolean = true;
  addToggle: boolean = true;
  updateToggle: boolean = true;
  deleteToggle: boolean = true;
  delete: boolean;
  update: boolean;

  addToggleButton() {
    this.addToggle = !this.addToggle;
  }

  updateToggleButton() {
    this.updateToggle = !this.updateToggle;
  }

  deleteToggleButton() {
    this.deleteToggle = !this.deleteToggle;
  }

  toLogout() {
    localStorage.removeItem('adminToken');
    this.router.navigate(['home']);
  }

  onChange(action: String) {
    switch (action) {
      case 'Add':
        this.add = true;
        this.delete = false;
        this.update = false;
        break;
      case 'Update':
        this.update = true;
        this.add = false;
        this.delete = false;
        break;
      case 'Delete':
        this.delete = true;
        this.add = false;
        this.update = false;
    }
  }
}
