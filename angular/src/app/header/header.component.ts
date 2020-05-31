import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() logado: boolean = false;

  constructor(public dialog: MatDialog, private authService: AuthService) { }

  ngOnInit() {
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(AlertaLogout, {
      width: '250px',
    })
    /* dialogRef.afterClosed().subscribe(result => {
      console.log('Alerta encerrado');
    }); */
  }

}

@Component({
  selector: 'alerta-logout',
  templateUrl: 'alerta-logout.html',
})
export class AlertaLogout {

  constructor(
    public dialogRef: MatDialogRef<AlertaLogout>,
    private router: Router,
    private authService: AuthService
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick() {
    sessionStorage.removeItem('dataUser');
    this.router.navigate(['login']);
    this.dialogRef.close();
    this.authService.usuarioLogado.emit(false);
    sessionStorage.setItem('logado', 'false');
  }

}
