import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio03ComponentComponent } from './ejercicio03-component.component';

describe('Ejercicio03ComponentComponent', () => {
  let component: Ejercicio03ComponentComponent;
  let fixture: ComponentFixture<Ejercicio03ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio03ComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio03ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
