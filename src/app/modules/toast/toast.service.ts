import { Injectable, TemplateRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(public toast: ToastrService) {}

  showSuccess() {
    this.toast.success('Bạn đã lưu thành công');
  }
  showUpdate() {
    this.toast.info('Cập nhật thành công');
  }
  showWarning(error: any, inputs?: string) {
    if (inputs) {
      const input = document.getElementById(inputs);
      input?.focus();
      this.toast.warning(error);
    } else {
      this.toast.warning(error);
    }
  }
  chuyenslide() {
    this.toast.info('bạn đã chuyển sang chế độ slide', 'Thông báo', {
      timeOut: 2000,
    });
  }
  chuyenchedoIMG() {
    this.toast.info('bạn đã chuyển sang chế độ hình ảnh', 'Thông báo', {
      timeOut: 2000,
    });
  }
}
