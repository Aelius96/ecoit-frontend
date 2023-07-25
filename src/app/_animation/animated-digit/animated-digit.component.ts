import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-animated-digit',
  templateUrl: './animated-digit.component.html',
  styleUrls: ['./animated-digit.component.css']
})
export class AnimatedDigitComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    if (this.digit) {
      this.animateCount();
    }
  }

  @Input() digit: any;
  @ViewChild("animatedDigit") animatedDigit: ElementRef | undefined;

  animateCount() {
    if (typeof this.digit === "number") {
      this.counterFunc(this.digit, this.animatedDigit);
    }
  }

  counterFunc(endValue: number, element: any) {
    const steps = 10;
    const durationMs = Math.floor((Math.random()*1000)+3000);

    const stepCount = Math.abs(durationMs / steps);
    const valueIncrement = (endValue - 0) / stepCount;
    const sinValueIncrement = Math.PI / stepCount;

    let currentValue = 0;
    let currentSinValue = 0;

    const step = () => {
      currentSinValue += sinValueIncrement;
      currentValue += valueIncrement * Math.sin(currentSinValue) ** 2 * 2;

      element.nativeElement.textContent = Math.abs(Math.floor(currentValue));
      if(Math.abs(Math.floor(currentValue)) === this.digit){
        element.nativeElement.textContent = "+" + element.nativeElement.textContent;
      }

      if (currentSinValue < Math.PI) {
        window.requestAnimationFrame(step);
      }
    }

    step();
  }

}
