import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/Services/admin.service';

@Component({
  selector: 'app-multi-ingredient-pairing',
  templateUrl: './multi-ingredient-pairing.component.html',
  styleUrls: ['./multi-ingredient-pairing.component.css']
})
export class MultiIngredientPairingComponent implements OnInit {
  categories = [];
  firstCategoryChoice;
  firstSpecialties = [];
  firstSpecialtyChoice;
  firstTypes = [];

  secondCategoryChoice;
  secondSpecialties = [];
  secondSpecialtyChoice;
  secondTypes = [];

  thirdCategoryChoice;
  thirdSpecialties = [];
  thirdSpecialtyChoice;
  thirdTypes = [];

  constructor(private service: AdminService) {}

  ngOnInit(): void {
    this.service.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  onFirstCategoryChange() {
    this.firstSpecialties = this.firstCategoryChoice.specialties;
  }

  onFirstSpecialtyChange() {
    let specialty = this.firstSpecialtyChoice.name;

    this.service.getTypes({ specialty: specialty }).subscribe(data => {
      this.firstTypes = data.types;
    });
  }

  onSecondCategoryChange() {
    this.secondSpecialties = this.secondCategoryChoice.specialties;
  }

  onSecondSpecialtyChange() {
    let specialty = this.secondSpecialtyChoice.name;
    this.service.getTypes({ specialty: specialty }).subscribe(data => {
      this.secondTypes = data.types;
    });
  }

  onThirdCategoryChange() {
    this.thirdSpecialties = this.thirdCategoryChoice.specialties;
  }

  onThirdSpecialtyChange() {
    let specialty = this.thirdSpecialtyChoice.name;
    this.service.getTypes({ specialty: specialty }).subscribe(data => {
      this.thirdTypes = data.types;
    });
  }
}
