import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reporte } from '../Models/reporte';

const  cabecera = {
  headers: new HttpHeaders({"Content-Type": "application/json"})
};

@Injectable({
  providedIn: 'root'
})
export class ReporteService {

  reporteURL = "http://localhost:8080/api/v1/servicio/";

  constructor(private httpClient: HttpClient) { }

  public crear(reporte: Reporte): Observable<any> {
    return this.httpClient.post<any> (
      this.reporteURL + "nuevo",
      reporte,
      cabecera
    );
  }
}
