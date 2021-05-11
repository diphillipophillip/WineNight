import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWineTypeComponent } from './add-wine-type.component';

describe('AddWineTypeComponent', () => {
  let component: AddWineTypeComponent;
  let fixture: ComponentFixture<AddWineTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWineTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWineTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
