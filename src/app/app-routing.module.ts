import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculoHorasComponent } from './Component/calculo-horas/calculo-horas.component';
import { HomeComponent } from './Component/home/home.component';
import { ReporteServicioComponent } from './Component/reporte-servicio/reporte-servicio.component';

const routes: Routes = [

  {path: 'home',component: HomeComponent},
  {path: 'reporteServicio',component: ReporteServicioComponent},
  {path: 'calculoHoras',component: CalculoHorasComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
