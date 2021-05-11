import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/Services/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-wine-type',
  templateUrl: './add-wine-type.component.html',
  styleUrls: ['./add-wine-type.component.css']
})
export class AddWineTypeComponent implements OnInit {
  constructor(
    private adminService: AdminService,
    private formBuilder: FormBuilder
  ) {}

  data = [];
  addWineTypeForm: FormGroup;

  ngOnInit(): void {
    this.adminService.getWines().subscribe(data => (this.data = data));
    this.addWineTypeForm = this.formBuilder.group({
      category: ['', Validators.required],
      type: ['', Validators.required]
    });
  }

  onSubmit() {
    let cat = this.addWineTypeForm.get('category').value;
    let ty = this.addWineTypeForm.get('type').value;
    let data = {
      category: cat,
      type: ty
    };

    this.adminService.addWineType(data).subscribe(e => {
      console.log(e);
    });
  }
}
