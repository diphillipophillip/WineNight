import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoIngredientPairingComponent } from './two-ingredient-pairing.component';

describe('TwoIngredientPairingComponent', () => {
  let component: TwoIngredientPairingComponent;
  let fixture: ComponentFixture<TwoIngredientPairingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoIngredientPairingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoIngredientPairingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
