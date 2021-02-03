import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reporte } from 'src/app/Models/reporte';
import { ReporteService } from 'src/app/Services/reporte.service';

@Component({
  selector: 'app-reporte-servicio',
  templateUrl: './reporte-servicio.component.html',
  styleUrls: ['./reporte-servicio.component.css']
})
export class ReporteServicioComponent implements OnInit {
  form: any = {};
  reporte: Reporte;
  creado = false;
  failReporte = false;
  mensajeFail = "";
  mensajeOK = "";
  constructor(private reporteService: ReporteService, private router: Router) {}

  ngOnInit() {
    
  }

  onCreate(from): void {
    console.log(this.form);
    this.reporteService.crear(this.form).subscribe(
      data => {
        this.mensajeOK = data.message;
        this.creado = true;
        this.failReporte = false;
        alert(this.mensajeOK);

        // this.router.navigate(['lista']);
      },
      (err: any) => {
        this.mensajeFail = err.error.message;
        alert(this.mensajeFail);
        this.creado = false;
        this.failReporte = true;
      }
    );
  }
}
