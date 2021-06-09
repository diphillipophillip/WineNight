import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AdminService } from 'src/Services/admin.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import data from 'src/data.js';

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

  firstIngredientForm: FormGroup;
  secondIngredientForm: FormGroup;
  thirdIngredientForm: FormGroup;

  constructor(
    private service: AdminService,
    private formBuilder: FormBuilder
  ) {}

  @Output() wineValues = new EventEmitter<any[]>();

  sendWineValues(wines: any) {
    this.wineValues.emit(wines);
  }

  ngOnInit(): void {
    this.service.getCategories().subscribe(data => {
      this.categories = data;
    });

    this.firstIngredientForm = this.formBuilder.group({
      category: ['', Validators.required],
      specialty: ['', Validators.required],
      type: ['', Validators.required]
    });

    this.secondIngredientForm = this.formBuilder.group({
      category: ['', Validators.required],
      specialty: ['', Validators.required],
      type: ['', Validators.required]
    });

    this.thirdIngredientForm = this.formBuilder.group({
      category: ['', Validators.required],
      specialty: ['', Validators.required],
      type: ['', Validators.required]
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

  onSubmit() {
    let firstCategory = this.firstIngredientForm.get('category').value.name;
    let firstSpecialty = this.firstIngredientForm.get('specialty').value.name;

    let secondCategory = this.secondIngredientForm.get('category').value.name;
    let secondSpecialty = this.secondIngredientForm.get('specialty').value.name;

    let thirdCategory = this.thirdIngredientForm.get('category').value.name;
    let thirdSpecialty = this.thirdIngredientForm.get('specialty').value.name;

    let values = [];

    data[firstCategory].forEach(e => {
      if (e[firstSpecialty] !== undefined) {
        values.push(e[firstSpecialty]);
      }
    });

    data[secondCategory].forEach(e => {
      if (e[secondSpecialty] !== undefined) {
        values.push(e[secondSpecialty]);
      }
    });

    data[thirdCategory].forEach(e => {
      if (e[thirdSpecialty] !== undefined) {
        values.push(e[thirdSpecialty]);
      }
    });

    this.sendWineValues(values);
  }
}
