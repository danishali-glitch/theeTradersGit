import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { MatDialog } from '@angular/material/dialog';
import { OdometerComponent } from "../odometer/odometer.component";
import { HorizontalSliderComponent } from '../horizontal-slider/horizontal-slider.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from '../footer/footer.component';

declare const Odometer: any;
@Component({
  selector: 'app-home',
  imports: [MatButtonModule, OdometerComponent, OdometerComponent, HorizontalSliderComponent,FooterComponent],
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


  @Input() value: number = 0; // Value to update the odometer
  @Input() startValue: number = 0; // Initial odometer value

  private odometer: any; // Instance of Odometer


  ngOnInit(): void {
    this.createOdometer();
    this.observeOdometer();
  }

  // Initialize the Odometer
  private createOdometer(): void {
    let num = 12345;
    const od = new Odometer({
      el: document.getElementById("odometer"),
      format: "(,ddd).dd",
      duration: 3000,
      theme: "default"
    });
    od.render();
  }

  // Observe when the Odometer is visible
  private observeOdometer(): void {
    const element = this.el.nativeElement.querySelector('.odometer');
    let hasRun = false;

    const options = {
      threshold: [0, 0.9],
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasRun) {
          this.odometer.update(this.value); // Update the odometer with the final value
          hasRun = true;
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(element);
  }

  submit(){
    
         
    
          const message = `
          Hii I want to Learn  more about Thee Traders!!
         
        `;
        const phoneNumber = '918840876120'; // Replace with recipient's WhatsApp number
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(url, '_blank');
    
        }

}
