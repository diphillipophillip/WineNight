import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiIngredientPairingComponent } from './multi-ingredient-pairing.component';

describe('MultiIngredientPairingComponent', () => {
  let component: MultiIngredientPairingComponent;
  let fixture: ComponentFixture<MultiIngredientPairingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiIngredientPairingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiIngredientPairingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
