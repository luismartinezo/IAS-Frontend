import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Calculo } from "../Models/calculo";
const cabecera = {
  headers: new HttpHeaders({ "Content-TYpe": "application/json" })
};

@Injectable()
export class CalculoService {
  reporteURL = "http://localhost:8080/api/v1/calculo/";
  constructor(private httpClient: HttpClient) {}

  public crear(calculo: Calculo): Observable<any> {
    return this.httpClient.post<any>(this.reporteURL + "", calculo, cabecera);
  }
}