import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/Services/admin.service';

@Component({
  selector: 'app-ingredient-and-prep',
  templateUrl: './ingredient-and-prep.component.html',
  styleUrls: ['./ingredient-and-prep.component.css']
})
export class IngredientAndPrepComponent implements OnInit {
  constructor(private service: AdminService) {}
  categories = [];
  selectedPrep; /* ngModel Binding for Prep */
  selectedCategory;
  selectedSpecialty;
  prepTypes = [];
  specialties = [];
  types = [];

  ngOnInit(): void {
    this.service.getCategories().subscribe(e => {
      this.categories = e;
    });
  }

  onPrepChange() {
    this.prepTypes = this.selectedPrep.specialties;
  }

  onSecondCategoryChange() {
    this.specialties = this.selectedCategory.specialties;
  }

  onSecondSpecialtyChange() {
    let specialty = this.selectedSpecialty.name;
    this.service.getTypes({ specialty: specialty }).subscribe(data => {
      this.types = data.types;
    });
  }
}
