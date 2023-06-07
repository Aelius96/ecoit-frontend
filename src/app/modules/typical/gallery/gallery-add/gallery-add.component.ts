import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery-add',
  templateUrl: './gallery-add.component.html',
  styleUrls: ['./gallery-add.component.css']
})
export class GalleryAddComponent {


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
