import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { OdometerComponent } from "../odometer/odometer.component";
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-aboutus',
  imports: [FooterComponent, OdometerComponent, MatButtonModule],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {
  constructor(
    private dialog: MatDialog,
   
  ) { }

  login() {
    this.dialog.open(LoginComponent, {
      width: '10000px',
      panelClass: 'panel',
      closeOnNavigation: true,
      disableClose: false
    });
  }

}
