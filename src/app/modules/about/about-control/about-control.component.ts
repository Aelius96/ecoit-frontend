import { Component } from '@angular/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { About } from 'src/app/core/model/about/about';

@Component({
  selector: 'app-about-control',
  templateUrl: './about-control.component.html',
  styleUrls: ['./about-control.component.css']
})
export class AboutControlComponent {

  aboutList :About= new About();
  ckeConfig: any;
 
  
}
