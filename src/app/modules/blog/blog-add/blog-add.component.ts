import { Component } from '@angular/core';
import {Blog} from "../../../core/model/blog/blog";
import {Router} from "@angular/router";
import * as ClassicEditorBuild from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.css']
})
export class BlogAddComponent {

  blog: Blog= new Blog();
  fileToUpload:string [] = [];
  url: any;
  id: any;
  ckeConfig: any;

constructor(private router:Router) {
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

  protected readonly Blog = Blog;


  public Editor = ClassicEditorBuild;

}
