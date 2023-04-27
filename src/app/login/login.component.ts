import { Component, Input, OnInit, Output } from '@angular/core';
import { LoginService } from '../services/login.service';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userLogin = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private loginService: LoginService) {}

  login() {
    const obj = {
      email: this.userLogin.get('email')?.getRawValue(),
      password: this.userLogin.get('password')?.getRawValue(),
    };
    return this.loginService.login(obj).subscribe((data) => data);

  }


}
