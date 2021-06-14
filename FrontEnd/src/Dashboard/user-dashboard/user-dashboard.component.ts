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

  wineScore = {
    'Bold Red': 0,
    'Medium Red': 0,
    'Light Red': 0,
    Rose: 0,
    'Rich White': 0,
    'Light White': 0,
    Sparkling: 0,
    'Sweet White': 0,
    Dessert: 0
  };

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
    let concatWines = [];
    wines.forEach(e => {
      e.forEach(i => {
        concatWines.push(i);
      });
    });
    concatWines.forEach(e => {
      this.wineScore[e] += 1;
    });
    console.log(this.wineScore);
  }
}
