import { Component } from '@angular/core';
import { Constant } from '../../../../core/config/constant';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerTypicalService } from '../../../../services/customer-typical/customer-typical.service';
import { Domain } from '../../../../core/domain/domain';
import { CusTypical } from 'src/app/core/model/cus-type/cus-typical';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-cus-typical-add',
  templateUrl: './cus-typical-add.component.html',
  styleUrls: ['./cus-typical-add.component.css'],
})
export class CusTypicalAddComponent {
  cusTypical: CusTypical = new CusTypical();
  fileToUpload: string[] = [];
  urls: any;
  id: any;
  ckeConfig: any;
  baseURL = Constant.BASE_URL;
  customerURL = Domain.CUSTOMER;
  cusTyoURL = Domain.CUSTYPICAL;

  imageURL: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cusTypicalService: CustomerTypicalService,
    private toast: ToastService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.cusTypicalService.getTCById(this.id).subscribe((data) => {
        this.cusTypical = data;
        this.urls = this.cusTypical.image.pathUrl;
        this.imageURL = `${this.baseURL}/${this.customerURL}/${this.cusTyoURL}/image/${this.id}`;
      });
    }
    this.ckeConfig = {
      extraPlugins:
        'uploadimage, justify, colorbutton, colordialog, iframe, font',
      uploadUrl:
        'https://ckeditor.com/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json',
      height: 330,
      filebrowserUploadUrl:
        'https://ckeditor.com/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Files',
      filebrowserImageUploadUrl:
        'https://ckeditor.com/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Images',
    };
  }
  onSubmit() {
    if (this.id) {
      this.addDataToForm(this.id);
    } else {
      this.saveTC();
    }
  }

  saveTC() {
    const newsFormData = this.prepareFormData(this.cusTypical);
    this.cusTypicalService.addTC(newsFormData).subscribe(
      (data) => {
        this.toast.showSuccess();
        console.log(data);
        this.goToTCList();
      },
      (error) => {
        this.toast.showWarning(error.error);
      }
    );
  }

  goToTCList() {
    this.router.navigate(['/admin/customer/cus-typical']);
  }

  addDataToForm(id: any) {
    const newsFormData = this.prepareFormData(this.cusTypical);
    this.cusTypicalService.updateTC(id, newsFormData).subscribe(
      (data) => {
        this.toast.showSuccess();
        this.goToTCList();
        console.log(data);
      },
      (error) => {
        this.toast.showWarning(error.error);
        console.log(error);
      }
    );
  }

  prepareFormData(cusTypical: CusTypical): FormData {
    const formData = new FormData();
    formData.append(
      'typicalCustomer',
      new Blob([JSON.stringify(cusTypical)], { type: 'application/json' })
    );
    for (let i = 0; i < this.fileToUpload.length; i++) {
      formData.append('imageFile', this.fileToUpload[i]);
    }

    return formData;
  }

  imageChange(e: any) {
    const files = e.target.files;
    if (files.length === 0) return;

    const reader = new FileReader();
    this.fileToUpload = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imageURL = reader.result;
    };
  }
}
