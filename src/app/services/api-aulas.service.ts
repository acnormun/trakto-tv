import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TAulas } from 'src/types/aulas.t';
import { TApi } from 'src/types/api.t';

@Injectable({
  providedIn: 'root',
})
export class ApiAulasService {
  constructor(private http: HttpClient) {}

  getData(): Observable<TApi> {
    // const url = 'https://api.trakto.io/document?total_per_page=10&order_by=title&order_orientation=desc'

    const url =
      'https://raw.githubusercontent.com/acnormun/ttv-api/main/aulas.json';
    return this.http.get<TApi>(url);
  }
}
