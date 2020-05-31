import { Injectable, EventEmitter } from "@angular/core";
import { User } from "./models/user";
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MatSnackBar } from '@angular/material/snack-bar';

import { delay, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  usuario: User = new User();
  usuarioLogado = new EventEmitter<boolean>();

  constructor(private router: Router, private httpClient: HttpClient, private _snackBar: MatSnackBar) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  public async fazerLogin(user: User) {
    this.usuario = await this.httpClient.get<User>('http://localhost:5000/Login/' + user.userName + '/' + user.password).toPromise();

    if (this.usuario.logado) {
      sessionStorage.setItem('dataUser', JSON.stringify(this.usuario));

      sessionStorage.setItem('logado', 'true');

      this.router.navigate(['dashboard']);

      this._snackBar.open('Você está logado !', 'Sucesso !', {
        duration: 2000,
      });

      //this.usuarioLogado.emit(true);
    } else {

      sessionStorage.setItem('logado', 'false');

      this._snackBar.open('Falha ao executar login !', 'Tente novamente !', {
        duration: 2000,
      });

      //this.usuarioLogado.emit(false);
    }
  }
}