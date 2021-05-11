import { Component, OnInit } from '@angular/core';
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
  categorySpecialtyNames = [];
  specialties = [];
  selectedCategory;
  selectedSpecialty;
  twoIngredientForm: FormGroup;

  ngOnInit(): void {
    this.service.getCategories().subscribe(data => {
      this.categories = data;
    });
    this.service.getSpecialties().subscribe(data => {
      console.log(data);
    });

    this.twoIngredientForm = this.formBuilder.group({
      firstCategory: ['', Validators.required],
      firstSpecialty: ['', Validators.required],
      firstType: ['', Validators.required]
    });
  }

  onCategoryChange() {
    this.categorySpecialtyNames = this.selectedCategory.specialties;
  }

  onSpecialtyChange() {}
}
