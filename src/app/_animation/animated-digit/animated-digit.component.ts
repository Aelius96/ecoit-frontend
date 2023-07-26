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
  
//   Tham số đầu vào:

// 'endValue:
// element: any: Đây là tham chiếu đến phần tử HTML mà số đếm sẽ hiển thị trong đó. Tham chiếu này được đưa vào qua tham số element.
// Các biến và hằng số:

// steps = 10: S
// durationMs: Thời gian tổng cộng để thực hiện hiệu ứng số đếm (tính bằng mili giây). Thời gian này được chọn ngẫu nhiên trong khoảng từ 3000 ms (3 giây) đến 4000 ms (4 giây).
// stepCount: Số lần cần thực hiện để đạt đến endValue trong thời gian durationMs. Nó được tính bằng cách chia durationMs cho .steps
// valueIncrement: Bư
// sinValueIncrement: Bước tăng giá trị của hàm số sine cho mỗi lần chuyển động. Nó được tính bằng cách lấy giá trị pi (π) chia cho stepCount.
// Bắt đầu hiệu ứng số đếm:

// 'currentValue =
// currentSinValue = 0: Đây là giá trị hiện tại của hàm số sine trong số đếm. Ban đầu, nó được thiết lập thành 0.
// Hàm step():

// Đây là hàm đệ quy được sử dụng để thực hiện mỗi bước chuyển động trong số đếm.
// Trong mỗi lần gọi step(), currentSinValue sẽ tăng lên một bước sinValueIncrement, và currentValue sẽ tăng lên valueIncrement nhưng được điều chỉnh bởi giá trị của hàm số sine.
// Giá trị currentValue sau đó được hiển thị trong phần tử HTML được định nghĩa bởi element.
// Khi currentSinValue chưa đạt đến giá trị pi (π) (khoảng 3.14159), hàm step() được gọi lại thông qua window.requestAnimationFrame(step);, tiếp tục thực hiện các bước chuyển động cho đến khi số đếm đạt đến endValue.
// Khi số đếm đạt đến endValue, hàm kiểm tra nếu giá trị đạt được có bằng this.digit (giá trị tham chiếu được sử dụng để kiểm tra điều kiện hiển thị dấu "+"). Nếu điều kiện đúng, dấu "+" sẽ được thêm vào phần tử hiển thị.
// Lưu ý: Đoạn mã trên sử dụng hàm số sine để tạo hiệu ứng mượt mà trong số đếm. Hiệu ứng này có thể tạo ra một số giá trị trung gian nhỏ khi số đếm đang chuyển động. Nếu bạn muốn hiệu ứng số đếm thực hiện theo các bước tăng cố định, bạn có thể xem xét sử dụng một phương pháp số học đơn giản hơn.



}
