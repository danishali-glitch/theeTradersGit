import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FooterComponent } from "../footer/footer.component";
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { OdometerComponent } from "../odometer/odometer.component";
import { HorizontalSliderComponent } from '../../horizontal-slider/horizontal-slider.component';
declare const Odometer: any;
@Component({
  selector: 'app-home',
  imports: [MatButtonModule, FooterComponent, OdometerComponent, HorizontalSliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private el: ElementRef
  ) { }

  login() {
    this.dialog.open(LoginComponent, {
      width: '10000px',
      panelClass: 'panel',
      closeOnNavigation: true,
      disableClose: false
    });
  }



  ngOnInit(): void {
   
  }

 

  submit(){
    
         
    
          const message = `
          Hii I want to Learn  more about Thee Traders!!
         
        `;
        const phoneNumber = '918787086928'; // Replace with recipient's WhatsApp number
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(url, '_blank');
    
        }

}
