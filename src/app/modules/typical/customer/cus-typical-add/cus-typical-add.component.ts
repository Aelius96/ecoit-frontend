import { Component } from '@angular/core';
import {News} from "../../../../core/model/news/news";
import {Constant} from "../../../../core/config/constant";
import {CusTypical} from "../cus-typical";
import {ActivatedRoute, Router} from "@angular/router";
import {NewsService} from "../../../../services/news/news.service";
import {HttpClient} from "@angular/common/http";
import {CustomerTypicalService} from "../../../../services/customer-typical/customer-typical.service";

@Component({
  selector: 'app-cus-typical-add',
  templateUrl: './cus-typical-add.component.html',
  styleUrls: ['./cus-typical-add.component.css']
})
export class CusTypicalAddComponent {
  cusTypical: CusTypical= new CusTypical();
  fileToUpload:string [] = [];
  url: any;
  id: any;
  ckeConfig: any;
  baseUrl = `${Constant.BASE_URL}`;
  message = '';

  constructor(private router:Router, private route:ActivatedRoute, private cusTypicalService: CustomerTypicalService) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if(this.id){
      this.cusTypicalService.getTCById(this.id).subscribe(data =>{
        this.cusTypical = data;
        this.url = this.cusTypical.image.pathUrl;
      });
    }
    this.ckeConfig = {
      extraPlugins: 'uploadimage, justify, colorbutton, colordialog, iframe, font',
      uploadUrl: 'https://ckeditor.com/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json',
      height: 330,
      // Configure your file manager integration. This example uses CKFinder 3 for PHP.
      // filebrowserBrowseUrl:'https://ckeditor.com/apps/ckfinder/3.4.5/ckfinder.html',
      // filebrowserImageBrowseUrl:'https://ckeditor.com/apps/ckfinder/3.4.5/ckfinder.html?type=Images',
      filebrowserUploadUrl:'https://ckeditor.com/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Files',
      filebrowserImageUploadUrl:'https://ckeditor.com/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Images',

    };
  }
  onSubmit(){
    if(this.id){
      this.addDataToForm(this.id);
    }else{
      this.saveTC();
    }
  }

  saveTC(){
    const newsFormData = this.prepareFormData(this.cusTypical);
    this.cusTypicalService.addTC(newsFormData).subscribe(data =>{
        this.goToTCList();
      },
      error => console.log(error));
  }

  goToTCList(){
    this.router.navigate(['/admin/customer/cus-typical']);
  }

  addDataToForm(id: any){
    const newsFormData = this.prepareFormData(this.cusTypical);
    this.cusTypicalService.updateTC(id, newsFormData).subscribe(data =>{
      this.goToTCList();
    });
  }

  prepareFormData(cusTypical: CusTypical): FormData {
    const formData = new FormData();
    formData.append(
      'typicalCustomer',
      new Blob([JSON.stringify(cusTypical)], {type: 'application/json'})
    );
    // formData.append('imageFile', this.fileToUpload, this.fileToUpload.name);
    for (let i = 0; i < this.fileToUpload.length; i++){
      formData.append(
        'imageFile',
        this.fileToUpload[i]
        // this.fileToUpload[i].name
      )
    }

    return formData;
  }



  imageChange(e: any){
    const files = e.target.files;
    if (files.length === 0) return;

    const reader = new FileReader();
    this.fileToUpload=files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) =>{
      this.url= reader.result;
    }
  }
}
