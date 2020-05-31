import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  usuario: User = new User();

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (!!sessionStorage.getItem('logado')) {
      if (sessionStorage.getItem('logado') === 'false') {
        this.router.navigate(['login']);
      } else {
        this.usuario = JSON.parse(sessionStorage.getItem('dataUser'));
      }
    } else {
      this.router.navigate(['login']);
    }
  }

}
