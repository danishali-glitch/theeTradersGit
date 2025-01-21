import { Component, ElementRef, Input } from '@angular/core';
declare const Odometer: any;
@Component({
  selector: 'app-odometer',
  imports: [],
  templateUrl: './odometer.component.html',
  styleUrl: './odometer.component.css'
})
export class OdometerComponent {
  @Input() value: number = 0; // Declare as Input to bind from parent component
  @Input() startValue: number = 0; // Optional start value

  private odometer: any; // Instance of Odometer

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.createOdometer();
    this.observeOdometer();
  }

  private createOdometer(): void {
    const element = this.el.nativeElement.querySelector('.odometer');
    this.odometer = new Odometer({
      el: element,
      value: this.startValue,
    });
  }

  private observeOdometer(): void {
    const element = this.el.nativeElement.querySelector('.odometer');
    let hasRun = false;

    const options = {
      threshold: [0, 0.9],
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasRun) {
          this.odometer.update(this.value); // Use the bound `value`
          hasRun = true;
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(element);
  }
}
