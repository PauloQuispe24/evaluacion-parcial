import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio04ComponentComponent } from './ejercicio04-component.component';

describe('Ejercicio04ComponentComponent', () => {
  let component: Ejercicio04ComponentComponent;
  let fixture: ComponentFixture<Ejercicio04ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio04ComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio04ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
