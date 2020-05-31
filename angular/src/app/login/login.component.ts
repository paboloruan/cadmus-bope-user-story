import { Component, Input, OnInit } from '@angular/core';
import { User } from "../models/user";
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = new User();

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (!!sessionStorage.getItem('logado') && sessionStorage.getItem('logado') === 'true') {
      this.router.navigate(['dashboard']);
    }
  }

  async fazerLogin() {
    if (typeof this.user.userName !== 'undefined' || typeof this.user.password !== 'undefined') {
      this.authService.fazerLogin(this.user);
    }
  }

}
