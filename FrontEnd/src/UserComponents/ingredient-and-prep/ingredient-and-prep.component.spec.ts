import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientAndPrepComponent } from './ingredient-and-prep.component';

describe('IngredientAndPrepComponent', () => {
  let component: IngredientAndPrepComponent;
  let fixture: ComponentFixture<IngredientAndPrepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientAndPrepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientAndPrepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
