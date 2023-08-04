import {Component, OnInit, ViewChild} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
// import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { About } from 'src/app/core/model/about/about';
import { AboutUsService } from 'src/app/services/about-us/about-us.service';
import { NgxMatIntlTelInputComponent } from 'ngx-mat-intl-tel-input';
import { Address } from 'src/app/core/model/address/address';
import { AddressService } from 'src/app/services/address/address.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-about-control',
  templateUrl: './about-control.component.html',
  styleUrls: ['./about-control.component.css']
})
export class AboutControlComponent implements OnInit{

  addressList : Address[]=[];
  about :About= new About();
  // about : About[]=[];
  ckeConfig: any;
  Notification ="";
  Error="";
  constructor( private about_usService: AboutUsService , 
                private addressService: AddressService , 
                private router : Router,){}
  ngOnInit(): void {
    this.getistAllInformation();
    this.getListAddress();
    this.ckeConfig = {
      extraPlugins: 'uploadimage, justify, colorbutton, colordialog, iframe, font',
      uploadUrl:'https://ckeditor.com/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json',

      // Configure your file manager integration. This example uses CKFinder 3 for PHP.
      filebrowserBrowseUrl:'https://ckeditor.com/apps/ckfinder/3.4.5/ckfinder.html',
      filebrowserImageBrowseUrl:'https://ckeditor.com/apps/ckfinder/3.4.5/ckfinder.html?type=Images',
      filebrowserUploadUrl:'https://ckeditor.com/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Files',
      filebrowserImageUploadUrl:'https://ckeditor.com/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Images'
    };
  }

  addAbout_us(){
    this.about_usService.createInformation(this.about).subscribe(()=>{
       this.Notification="Lưu Thành Công!";
       this.Error =""
      },
      error=>{
        this.Notification = "Lưu thất bại!";
        this.Error = error.error.message;
        console.log(error.error.message)
      }
      )
  }

  getistAllInformation(){
    this.about_usService.getAllInformation().subscribe(res=>{
      if(res!=null){
        this.about= res;
      }
    })
  }

  getListAddress(){
    this.addressService.ListAll().subscribe(res=>{
      this.addressList= res;
    }
    )
  }
  // xóa address
  deleteAddress(id:number){
     let cf = confirm("Bạn có muốn xóa địa chỉ này?")
     if(cf){
      this.addressService.delete(id).subscribe(()=>{
        this.getListAddress();
      }, error => console.log(error))
     }
  }

  updateAddress(id:number){
    this.router.navigate([`admin/about/address/update/${id}`])
  }

  onSubmit(){
    this.addAbout_us()
  }

  numberOnly(event:any): boolean { 
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode < 32 || charCode > 57) {
      return false;
    }
    const input = event.target ; // Lấy đối tượng input
    if (input.value.length >= 18) {
      // alert('')
    return false;
    }
    return true;
  }

}
