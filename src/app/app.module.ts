import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmleadoHijocComponent } from './empleado-hijo-c/emleado-hijoc.component';
import { CaracteristicasEmpleadosCComponent } from './caracteristicas-empleados-c/caracteristicas-empleados-c.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosService } from './empleados.service';

@NgModule({
  declarations: [
    AppComponent,
    EmleadoHijocComponent,
    CaracteristicasEmpleadosCComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ServicioEmpleadosService, EmpleadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
