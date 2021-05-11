import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteWineTypeComponent } from './delete-wine-type.component';

describe('DeleteWineTypeComponent', () => {
  let component: DeleteWineTypeComponent;
  let fixture: ComponentFixture<DeleteWineTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteWineTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteWineTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
