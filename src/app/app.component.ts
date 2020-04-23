import { User } from './user';
import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  user: User;

  // tslint:disable-next-line: no-shadowed-variable
  constructor(private loginService: LoginService) {}
  ngOnInit(): void {
    this.loginService.GetUser().subscribe((user: User) => {
      this.user = user;
    });
  }

  logout() {
    this.loginService.LogOut();
  }
}
