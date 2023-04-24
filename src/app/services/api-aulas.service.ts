import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiAulasService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any>{

    const url = 'https://raw.githubusercontent.com/acnormun/ttv-api/main/aulas.json'
    return this.http.get<any>(url)
  }
}
