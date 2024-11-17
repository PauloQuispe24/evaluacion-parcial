import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-ejercicio02-component',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './ejercicio02-component.component.html',
  styleUrl: './ejercicio02-component.component.css'
})
export class Ejercicio02ComponentComponent {
  resultado: boolean = false;
  numero1: number = 75;
  numero2: number = 37;
  numero3: number = 7;
  numero4: number = 51;
  mayor: number = 0;

  calcularMayor() {
    this.mayor = Math.max(this.numero1, this.numero2, this.numero3, this.numero4);
    this.resultado = true;
  }
}
