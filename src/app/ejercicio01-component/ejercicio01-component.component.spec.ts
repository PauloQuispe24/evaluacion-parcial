import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio01ComponentComponent } from './ejercicio01-component.component';

describe('Ejercicio01ComponentComponent', () => {
  let component: Ejercicio01ComponentComponent;
  let fixture: ComponentFixture<Ejercicio01ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio01ComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio01ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
