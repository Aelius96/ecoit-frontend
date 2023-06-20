import { Component, OnInit } from '@angular/core';
import {Blog} from "../../../core/model/blog/blog";
import {ActivatedRoute, Router} from "@angular/router";
import * as ClassicEditorBuild from '@ckeditor/ckeditor5-build-classic';
import { Constant } from 'src/app/core/config/constant';
import { BlogService } from 'src/app/services/blog/blog.service';

@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.css']
})
export class BlogAddComponent implements OnInit {

  blogList: Blog= new Blog();
  fileToUpload:string [] = [];
  url: any;
  id: any;
  ckeConfig: any;
  baseUrl = `${Constant.BASE_URL}`

constructor(private router:Router,
            private route: ActivatedRoute,
            private  blogService: BlogService) {
}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if(this.id){
      this.blogService.getBlogsById(this.id).subscribe(data => {
        this.blogList = data;
        this.url = this.blogList.image.pathUrl;
      })
    }
    this.ckeConfig = {
      extraPlugins: 'uploadimage, justify, colorbutton, colordialog, iframe, font',
      uploadUrl: 'https://ckeditor.com/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json',
      height: 330,
      filebrowserUploadUrl:'https://ckeditor.com/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Files',
      filebrowserImageUploadUrl:'https://ckeditor.com/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Images',

    };
  }

  goToBlogList(){
    this.router.navigate(['/admin/blog'])
  }

  saveBlog(){
      const blogFormData = this.prepareFormData(this.blogList);
     this.blogService.createBlog(blogFormData).subscribe(data=>{
      this.goToBlogList();
     },
     error => console.log(error)  );
  }
  // xử lí và gửi dữ liệu
  prepareFormData(blog : Blog):FormData{
    const formData = new FormData();
    formData.append(  'blog',  new Blob([JSON.stringify(blog)],
                    {type: 'application/json'})
    );
    //file image
    for (let i = 0; i < this.fileToUpload.length; i++){
      formData.append(
        'imageFile',
        this.fileToUpload[i]
      )
    }

    return formData;
  }
//update
  addDataForm(id: any){
    const blogFormData = this.prepareFormData(this.blogList);
    this.blogService.updateBlog(id, blogFormData).subscribe(data =>{
      this.goToBlogList();
    });

  }

  onSubmit(){
   if(this.id){
    this.addDataForm(this.id);
   }else{
    this.saveBlog();
   }
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
