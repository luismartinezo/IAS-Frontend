import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Calculo } from "../../Models/calculo";
import { CalculoService } from "../../Services/calculo.service";

@Component({
  selector: "app-calculo-hora",
  templateUrl: "./calculo-hora.component.html",
  styleUrls: ["./calculo-hora.component.css"]
})
export class CalculoHoraComponent implements OnInit {
  form: any = {};
  calculo: Calculo;
  mensajeFail = "";
  mensajeOK = "";
  constructor(private calculoService: CalculoService, private router: Router) {}

  ngOnInit() {}

  onCreate(from): void {
    console.log(this.form);
    this.calculoService.crear(this.form).subscribe(
      data => {
        this.mensajeOK = data.message;
        alert(this.mensajeOK);
      },
      (err: any) => {
        this.mensajeFail = err.error.message;
        alert(this.mensajeFail);
      }
    );
  }
}
