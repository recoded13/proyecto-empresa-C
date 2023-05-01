import { Component, Input } from '@angular/core';
import { Empleado } from '../empleados.model';

@Component({
  selector: 'app-emleado-hijoc',
  templateUrl: './emleado-hijoc.component.html',
  styleUrls: ['./emleado-hijoc.component.css']
})
export class EmleadoHijocComponent {

  @Input() empleadoDeLista:Empleado;

  @Input() indice:number;

  constructor(){}

  arrayCaracteristicas = [''];

  agregarCaracterisitica(nuevaCaracteristica: string) {
    this.arrayCaracteristicas.push(nuevaCaracteristica);
  }
}
