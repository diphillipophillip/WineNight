import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/Services/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-wine-type',
  templateUrl: './update-wine-type.component.html',
  styleUrls: ['./update-wine-type.component.css']
})
export class UpdateWineTypeComponent implements OnInit {
  constructor(
    private adminService: AdminService,
    private formBuilder: FormBuilder
  ) {}

  updateWineTypeForm: FormGroup;

  ngOnInit(): void {
    this.updateWineTypeForm = this.formBuilder.group({
      type: ['', Validators.required],
      newName: ['', Validators.required]
    });
  }

  onSubmit() {
    let type = this.updateWineTypeForm.get('type').value;
    let newName = this.updateWineTypeForm.get('newName').value;
    let body = {
      type: type,
      newName: newName
    };
    this.adminService.updateWineType(body).subscribe(e => {
      console.log(e);
    });
  }
}
