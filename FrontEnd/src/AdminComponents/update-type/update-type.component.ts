import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/Services/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-type',
  templateUrl: './update-type.component.html',
  styleUrls: ['./update-type.component.css']
})
export class UpdateTypeComponent implements OnInit {
  constructor(
    private adminService: AdminService,
    private formBuilder: FormBuilder
  ) {}
  updateTypeForm: FormGroup;
  ngOnInit(): void {
    this.updateTypeForm = this.formBuilder.group({
      type: ['', Validators.required],
      newName: ['', Validators.required]
    });
  }

  onSubmit() {
    let type = this.updateTypeForm.get('type').value;
    let newName = this.updateTypeForm.get('newName').value;
    let body = {
      type: type,
      newName: newName
    };
    this.adminService.updateFoodType(body).subscribe(e => {
      console.log(e);
    });
  }
}
