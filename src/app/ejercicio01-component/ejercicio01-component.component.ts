import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-ejercicio01-component',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './ejercicio01-component.component.html',
  styleUrls: ['./ejercicio01-component.component.css']
})
export class Ejercicio01ComponentComponent {
  resultado: boolean = false;

  salario: number = 2000;
  anios: number = 6;
  utilidades: number = 0;

  calcularUtilidades() {
    if (this.anios < 1) {
      this.utilidades = this.salario * 0.05;
    } else if (this.anios >= 1 && this.anios < 2) {
      this.utilidades = this.salario * 0.07;
    } else if (this.anios >= 2 && this.anios < 5) {
      this.utilidades = this.salario * 0.10;
    } else if (this.anios >= 5 && this.anios < 10) {
      this.utilidades = this.salario * 0.15;
    } else {
      this.utilidades = this.salario * 0.20;
    }

    this.resultado = true;
  }
}
