import { Component } from '@angular/core';

@Component({
  selector: 'app-cus-typical-add',
  templateUrl: './cus-typical-add.component.html',
  styleUrls: ['./cus-typical-add.component.css']
})
export class CusTypicalAddComponent {
  fileToUpload:string [] = [];
  url: any;
  id: any;
  ckeConfig: any;



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
