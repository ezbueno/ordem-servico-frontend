import { Tecnico } from './../models/tecnico';
import { environment } from "./../../environments/environment";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root",
})
export class TecnicoService {
  baseURL: String = environment.baseURL;

  constructor(private http: HttpClient) {}

  findAll(): Observable<Tecnico[]> {
    const URL = this.baseURL + "/tecnicos";
    return this.http.get<Tecnico[]>(URL);
  }
}
