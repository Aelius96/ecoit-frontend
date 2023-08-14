import {Injectable, TemplateRef} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(public toast: ToastrService){}

  showSuccess(){
      this.toast.success('Bạn đã lưu thành công', 'Thành Công!', {  });
  } 
  showUpdate(){
   this.toast.info('Cập nhật thành công', 'Thông báo!', {});
  }
  showWarning(error:any)
   {
   this.toast.warning(error, 'Cảnh Báo!', {});
  }

}
