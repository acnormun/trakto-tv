import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  logged: boolean = false

  login(body: any) {
    const url = 'https://api.trakto.io/auth/signin';
    return this.http.post(url, body);
  }
}
