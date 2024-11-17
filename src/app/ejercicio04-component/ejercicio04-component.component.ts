import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-ejercicio04-component',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule
  ],
  templateUrl: './ejercicio04-component.component.html',
  styleUrl: './ejercicio04-component.component.css'
})
export class Ejercicio04ComponentComponent {
  mostrar: boolean = false;
  resultados: Array<{numero: number, cuadrado: number, mitad: number}> = [];
  displayedColumns: string[] = ['numero', 'cuadrado', 'mitad'];

  calcularCuadradoYMitad() {
    for (let i = 15; i <= 70; i++) {
      this.resultados.push({
        numero: i,
        cuadrado: i * i,
        mitad: i / 2
      });
    }

    this.mostrar = true;
  }
}
