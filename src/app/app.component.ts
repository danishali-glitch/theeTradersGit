import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, inject, Inject, OnInit, PLATFORM_ID, Renderer2, ViewChild } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './component/login/login.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {


  constructor(private dialog: MatDialog,
    private router: Router
  ) { 
    this.openDialog();
  }


  ngOnInit(): void {

    

  }


  // Open the dialog once after 5 seconds

  openDialog() {
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
  // Open the dialog once after 5 seconds

  
}
