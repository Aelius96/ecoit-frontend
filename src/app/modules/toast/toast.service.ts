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
  showWarning(error:any,inputs?:string)
   {
    if(inputs){
      const input = document.getElementById(inputs);

        input?.addEventListener('focus', () => {
          input.style.border = '1px solid red';
        });
        input?.focus();
        this.toast.warning(error, 'Cảnh Báo!', {});
    }
    else{
      this.toast.warning(error, 'Cảnh Báo!', {});
    }
  
  }
  chuyenslide(){
    this.toast.info("bạn đã chuyển sang chế độ trình chiếu", 'thông báo', {
      timeOut : 2000
    });
  }
  chuyenchedoIMG(){
    this.toast.info("bạn đã chuyển sang chế độ trình ảnh", 'thông báo', {
      timeOut : 2000
    });
  }
}
