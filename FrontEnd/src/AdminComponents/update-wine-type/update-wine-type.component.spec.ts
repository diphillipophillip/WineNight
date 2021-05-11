import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWineTypeComponent } from './update-wine-type.component';

describe('UpdateWineTypeComponent', () => {
  let component: UpdateWineTypeComponent;
  let fixture: ComponentFixture<UpdateWineTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateWineTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateWineTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
