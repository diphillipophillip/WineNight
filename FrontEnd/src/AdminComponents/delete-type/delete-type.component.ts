import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/Services/admin.service';

@Component({
  selector: 'app-delete-type',
  templateUrl: './delete-type.component.html',
  styleUrls: ['./delete-type.component.css']
})
export class DeleteTypeComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService
  ) {}

  deleteTypeForm: FormGroup;
  data = [];
  selectedCategory;
  specialties = [];

  ngOnInit(): void {
    this.adminService.getCategories().subscribe(data => (this.data = data));
    this.deleteTypeForm = this.formBuilder.group({
      category: ['', Validators.required],
      specialty: ['', Validators.required],
      type: ['', Validators.required]
    });
  }

  onChange() {
    this.specialties = this.selectedCategory.specialties;
  }

  onSubmit() {
    let type = this.deleteTypeForm.get('type').value;
    let specialty = this.deleteTypeForm.get('specialty').value;
    let body = {
      specialty: specialty,
      type: type
    };
    this.adminService.clearFoodType(body).subscribe(e => {
      console.log(e);
    });
  }
}
