import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  cancel() {
    this.username = '';
    this.password = '';
    this.router.navigate(['/home']);
  }
  login() {
    this.loginService.LogIn(this.username, this.password);
    this.username = '';
    this.password = '';
    this.router.navigate(['home']);
  }
}
