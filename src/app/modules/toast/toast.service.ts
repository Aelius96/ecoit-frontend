import {Injectable, TemplateRef} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(public toast: ToastrService){}

  showSuccess(){
      this.toast.success('Bạn đã lưu thành công', 'Thành Công!', {

       
    });
  } 
  showError(){
   this.toast.error('Bạn đã lưu thất bại', 'Thất Bại', {

});
  }
   showWarning(err:any)
   {
   this.toast.warning(err, 'Cảnh Báo!', {

});
  }

}
