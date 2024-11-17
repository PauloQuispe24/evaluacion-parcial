import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio02ComponentComponent } from './ejercicio02-component.component';

describe('Ejercicio02ComponentComponent', () => {
  let component: Ejercicio02ComponentComponent;
  let fixture: ComponentFixture<Ejercicio02ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio02ComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio02ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
