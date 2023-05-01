import { Injectable } from "@angular/core";
import { Empleado } from "./empleados.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";


@Injectable()
export class EmpleadosService{

  constructor(private servicioVentanaEmergente: ServicioEmpleadosService){

  }
    empleados:Empleado[]=[

        new Empleado("juan", "diaz", "presidente", 75100),
        new Empleado("rosmery", "morales", "directora", 55000),
        new Empleado("melanie", "titirico", "jefa de seccion", 35100),
        new Empleado("melanie", "usnayo", "administrativo", 25100),
      ];
      agregarEmpleadoServicio(empleado:Empleado){
        this.servicioVentanaEmergente.muestraMensaje("persona que se va a agregar: "
        + "\n"+ empleado.nombre+ "\n" + "Salario: " + empleado.sueldo);

        this.empleados.push(empleado)
      }
}