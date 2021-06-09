import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import data from 'src/data.js';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  twoIngredientPairing = true;
  ingredientAndPrep = false;
  multiIngredientPairing = false;

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

  changeOption(option: String) {
    switch (option) {
      case 'twoIngredientPairing':
        this.twoIngredientPairing = true;
        this.ingredientAndPrep = false;
        this.multiIngredientPairing = false;
        break;
      case 'ingredientAndPrep':
        this.twoIngredientPairing = false;
        this.ingredientAndPrep = true;
        this.multiIngredientPairing = false;
        break;
      case 'multiIngredientPairing':
        this.twoIngredientPairing = false;
        this.ingredientAndPrep = false;
        this.multiIngredientPairing = true;
        break;
    }
  }

  wineValues(wines: any[]) {
    console.log(wines);
  }
}
