import { Routes } from '@angular/router';
import { Ejercicio01ComponentComponent } from './ejercicio01-component/ejercicio01-component.component';
import { Ejercicio02ComponentComponent } from './ejercicio02-component/ejercicio02-component.component';
import { Ejercicio03ComponentComponent } from './ejercicio03-component/ejercicio03-component.component';
import { Ejercicio04ComponentComponent } from './ejercicio04-component/ejercicio04-component.component';

export const routes: Routes = [
  { path: "Ejercicio01", component: Ejercicio01ComponentComponent },
  { path: "Ejercicio02", component: Ejercicio02ComponentComponent },
  { path: "Ejercicio03", component: Ejercicio03ComponentComponent },
  { path: "Ejercicio04", component: Ejercicio04ComponentComponent }
];
