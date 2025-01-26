import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  constructor(
    private dialog:MatDialog,
    private router:Router
  ){}

login() {
    this.dialog.open(LoginComponent, {
      width:'10000px',
      panelClass:'panel',
      closeOnNavigation:true,
      disableClose:false
    });
  }
  closeNavbar(navigation: any) {
    console.log(navigation);

    if (navigation === '/home') {
      this.router.navigate([navigation])
    } else if (navigation === '/aboutus') {
      this.router.navigate([navigation])
    } else if (navigation === '/service') {
      this.router.navigate([navigation])
    } else if (navigation === '/team') {
      this.router.navigate([navigation])
    } else if (navigation === '/contactus') {
      this.router.navigate([navigation])
    } else if (navigation === '/gallery') {
      this.router.navigate([navigation])
    }else  if (navigation === '/#') {

      this.router.navigate(['/home'])
    }
    // Use jQuery to collapse the navbar
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse) {
      navbarCollapse.classList.remove('show');
    }
  }

}
