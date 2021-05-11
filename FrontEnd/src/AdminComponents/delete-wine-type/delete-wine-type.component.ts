import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/Services/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-delete-wine-type',
  templateUrl: './delete-wine-type.component.html',
  styleUrls: ['./delete-wine-type.component.css']
})
export class DeleteWineTypeComponent implements OnInit {
  constructor(
    private adminService: AdminService,
    private formBuilder: FormBuilder
  ) {}
  data = [];
  deleteWineTypeForm: FormGroup;

  ngOnInit(): void {
    this.adminService.getWines().subscribe(data => {
      this.data = data;
    });
    this.deleteWineTypeForm = this.formBuilder.group({
      category: ['', Validators.required],
      type: ['', Validators.required]
    });
  }

  onSubmit() {
    let wine = this.deleteWineTypeForm.get('category').value;
    let wineType = this.deleteWineTypeForm.get('type').value;
    let body = {
      wine: wine,
      wineType: wineType
    };
    this.adminService.clearWineType(body).subscribe(e => {
      console.log(e);
    });
  }
}
