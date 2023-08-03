import {Component, OnInit} from '@angular/core';
// import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { About } from 'src/app/core/model/about/about';
import { AboutUsService } from 'src/app/services/about-us/about-us.service';

@Component({
  selector: 'app-about-control',
  templateUrl: './about-control.component.html',
  styleUrls: ['./about-control.component.css']
})
export class AboutControlComponent implements OnInit{

  about :About= new About();
  // about : About[]=[];
  ckeConfig: any;
  Notification ="";
 
  constructor( private about_usService: AboutUsService){}
  ngOnInit(): void {
    this.getistAllInformation()
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
       this.Notification="Lưu Thành Công!"
      },
      error=>{
        this.Notification = "Lưu thất bại!";
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

  onSubmit(){
    this.addAbout_us()
  }
}
