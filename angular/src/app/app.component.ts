import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CADMUS';
  usuarioLogado: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    
  }

  ngDoCheck() {
    !!sessionStorage.getItem('logado') && sessionStorage.getItem('logado') === 'true' ? this.usuarioLogado = true : this.usuarioLogado = false;
  }
}
