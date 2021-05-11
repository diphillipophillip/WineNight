import { Component, OnInit, OnChanges } from '@angular/core';
import { AdminService } from 'src/Services/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, findIndex } from 'rxjs/operators';

@Component({
  selector: 'app-add-type',
  templateUrl: './add-type.component.html',
  styleUrls: ['./add-type.component.css']
})
export class AddTypeComponent implements OnInit {
  constructor(
    private adminService: AdminService,
    private formBuilder: FormBuilder
  ) {}

  data = [];
  addTypeForm: FormGroup;
  index: number;
  specialties: any[] = [];
  disabled = '';
  selectedCategory;

  ngOnInit(): void {
    this.adminService.getCategories().subscribe(data => (this.data = data));
    this.addTypeForm = this.formBuilder.group({
      category: ['', Validators.required],
      specialty: ['', Validators.required],
      type: ['', Validators.required]
    });
  }

  /*ngAfterContentChecked() {
    let category = this.addTypeForm.get('category').value;
    this.specialties = category.specialties;
  }*/

  onChange() {
    this.specialties = this.selectedCategory.specialties;
  }

  onSubmit() {
    let cat = this.addTypeForm.get('category').value.name;
    let spec = this.addTypeForm.get('specialty').value;
    let ty = this.addTypeForm.get('type').value;
    let body = {
      cat: cat,
      specialty: spec,
      type: ty
    };
    this.adminService.addType(body).subscribe(e => {
      console.log(e);
    });
  }
}
