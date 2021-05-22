import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { UserService } from 'src/Services/user.service';
import { AdminService } from 'src/Services/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
}
