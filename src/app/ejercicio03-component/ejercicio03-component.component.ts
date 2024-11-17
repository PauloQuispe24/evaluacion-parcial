import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'

@Component({
  selector: 'app-ejercicio03-component',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './ejercicio03-component.component.html',
  styleUrl: './ejercicio03-component.component.css'
})
export class Ejercicio03ComponentComponent {
  resultado: boolean = false;
  numeroMaterias: number = 10;
  costoMateria: number = 520;
  descuento: number = 0;
  total: number = 0;

  calcularMatricula() {
    if (this.numeroMaterias > 5) {
      this.descuento = 0.10;
    } else {
      this.descuento = 0;
    }

    let totalSinDescuento = this.numeroMaterias * this.costoMateria;

    this.total = totalSinDescuento - (totalSinDescuento * this.descuento);

    this.resultado = true;
  }
}
