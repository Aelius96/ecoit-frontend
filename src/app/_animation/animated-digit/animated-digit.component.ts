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
    const durationMs = Math.floor((Math.random()*1000)+2000);  //thời gian này được chọn ngẫu nhiên trong khoảng từ 2000ms đến 3000ms (2 đến 3 giây).

    const stepCount = Math.abs(durationMs / steps); // Đây là số lượng bước thực hiện trong quá trình diễn ra của hiệu ứng số đếm. 
    const valueIncrement = (endValue - 0) / stepCount; //Đây là giá trị tăng lên của hiệu ứng số đếm sau mỗi bước
    const sinValueIncrement = Math.PI / stepCount;  // Đây là giá trị gia tăng của hàm sin(x) sau mỗi bước. 

    let currentValue = 0;
    let currentSinValue = 0;
// cập nhật việc số đếm và cập nhật giá trị của phần tử DOM (element) sau mỗi bước.
    const step = () => {
      currentSinValue += sinValueIncrement;
      currentValue += valueIncrement * Math.sin(currentSinValue) ** 2 * 2;

      element.nativeElement.textContent = Math.abs(Math.floor(currentValue)); //Thiết lập nội dung của phần tử DOM (element) thành giá trị tuyệt đối và làm tròn xuống (Math.floor) của currentValue
      // Nếu giá trị  currentValue bằng với một giá trị this.digit nào đó, thì thêm dấu "+" vào trước nội dung của phần tử DOM.
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
