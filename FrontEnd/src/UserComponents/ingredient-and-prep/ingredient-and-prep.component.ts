import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AdminService } from 'src/Services/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import data from 'src/data.js';

@Component({
  selector: 'app-ingredient-and-prep',
  templateUrl: './ingredient-and-prep.component.html',
  styleUrls: ['./ingredient-and-prep.component.css']
})
export class IngredientAndPrepComponent implements OnInit {
  constructor(
    private service: AdminService,
    private formBuilder: FormBuilder
  ) {}
  categories = [];
  selectedPrep; /* ngModel Binding for Prep */
  selectedCategory;
  selectedSpecialty;
  prepTypes = [];
  specialties = [];
  types = [];
  prepForm: FormGroup;
  ingredientForm: FormGroup;

  @Output() wineValues = new EventEmitter<any[]>();

  sendWineValues(wines: any) {
    this.wineValues.emit(wines);
  }

  ngOnInit(): void {
    this.service.getCategories().subscribe(e => {
      this.categories = e;
    });

    this.prepForm = this.formBuilder.group({
      category: ['', Validators.required],
      type: ['', Validators.required]
    });

    this.ingredientForm = this.formBuilder.group({
      category: ['', Validators.required],
      specialty: ['', Validators.required],
      type: ['', Validators.required]
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

  onSubmit() {
    let preparation = this.prepForm.get('category').value.name;
    let prepType = this.prepForm.get('type').value;

    let category = this.ingredientForm.get('category').value.name;
    let specialty = this.ingredientForm.get('specialty').value.name;

    let values = [];

    data[preparation].forEach(e => {
      if (e[prepType] !== undefined) {
        values.push(e[prepType]);
      }
    });

    data[category].forEach(e => {
      if (e[specialty] !== undefined) {
        values.push(e[specialty]);
      }
    });

    this.sendWineValues(values);
  }
}
