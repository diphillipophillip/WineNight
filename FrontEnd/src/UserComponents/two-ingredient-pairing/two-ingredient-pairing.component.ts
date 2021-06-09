import {
  Component,
  OnInit,
  SystemJsNgModuleLoader,
  Output
} from '@angular/core';
import { UserService } from 'src/Services/user.service';
import { AdminService } from 'src/Services/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import data from 'src/data.js';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-two-ingredient-pairing',
  templateUrl: './two-ingredient-pairing.component.html',
  styleUrls: ['./two-ingredient-pairing.component.css']
})
export class TwoIngredientPairingComponent implements OnInit {
  constructor(
    private service: AdminService,
    private formBuilder: FormBuilder
  ) {}
  categories = [];
  specialties = [];
  secondSpecialties = [];
  types = [];
  secondTypes = [];
  selectedCategory; /*ngModel Binding */
  twoIngredientForm: FormGroup;

  secondSelectedCategory; /*ngModel Binding for second Category */
  twoIngredientFormSecond: FormGroup;

  @Output() wineValues = new EventEmitter<any[]>();

  sendWineValues(wines: any) {
    this.wineValues.emit(wines);
  }

  ngOnInit(): void {
    this.service.getCategories().subscribe(data => {
      this.categories = data;
    });

    this.twoIngredientForm = this.formBuilder.group({
      firstCategory: ['', Validators.required],
      firstSpecialty: ['', Validators.required],
      firstType: ['', Validators.required]
    });

    this.twoIngredientFormSecond = this.formBuilder.group({
      secondCategory: ['', Validators.required],
      secondSpecialty: ['', Validators.required],
      secondType: ['', Validators.required]
    });
  }

  onCategoryChange() {
    this.specialties = this.selectedCategory.specialties;
    if (this.selectedCategory === '') {
      this.types = [];
    }
  }

  onSecondCategoryChange() {
    this.secondSpecialties = this.secondSelectedCategory.specialties;
    if (this.secondSelectedCategory === '') {
      this.secondTypes = [];
    }
  }

  onSpecialtyChange() {
    let specialty = this.twoIngredientForm.get('firstSpecialty').value;
    this.service.getTypes({ specialty: specialty }).subscribe(data => {
      this.types = data.types;
    });
    if (specialty === '') {
      this.types = [];
    }
  }

  onSecondSpecialtyChange() {
    let specialty = this.twoIngredientFormSecond.get('secondSpecialty').value;
    this.service.getTypes({ specialty: specialty }).subscribe(data => {
      this.secondTypes = data.types;
    });
    if (specialty === '') {
      this.secondTypes = [];
    }
  }

  onSubmit() {
    let firstCategory = this.twoIngredientForm.get('firstCategory').value.name;
    let firstSpecialty = this.twoIngredientForm.get('firstSpecialty').value;

    let secondCategory = this.twoIngredientFormSecond.get('secondCategory')
      .value.name;

    let secondSpecialty = this.twoIngredientFormSecond.get('secondSpecialty')
      .value;

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

    this.sendWineValues(values);
  }
}
