import {Component, OnInit} from '@angular/core';
import {News} from "../../../core/model/news/news";
import {Constant} from "../../../core/config/constant";
import {ActivatedRoute, Router} from "@angular/router";
import {NewsService} from "../../../services/news/news.service";
import {HttpClient} from "@angular/common/http";
import {Post} from "../../../core/model/post/post";
import {PostService} from "../../../services/post/post.service";
import {Category} from "../../../core/model/category/category";
import {CategoryService} from "../../../services/category/category.service";
import {Product} from "../../../core/model/product/product";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {Hashtag} from "../../../core/model/hashtag/hashtag";

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent implements OnInit{
  post: Post= new Post();
  categories: Category[] = [];
  hashtagList: Hashtag[] = [];
  fileToUpload:string [] = [];
  url: any;
  id: any;

  ckeConfig: any;
  baseUrl = `${Constant.BASE_URL}`;
  message = '';

  form: FormGroup;
  value: Observable<number>;
  tagSuggestions = ['google', 'apple', 'microsoft'];
  constructor(private router:Router,
              private route:ActivatedRoute,
              private postService: PostService,
              private categoryService:CategoryService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if(this.id){
      this.postService.getPostById(this.id).subscribe(data =>{
        this.post = data;
        this.url = this.post.image?.pathUrl;

      });
    }

    this.listAllCategory();
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

    this.form = this.formBuilder.group({
      tags: [['dog', 'cat', 'bird']]
    });

    this.value = this.form.controls['tags'].valueChanges;
  }
  onSubmit(){
    if(this.id){
      this.updateDataToForm(this.id);
    }else{
      this.savePost();
    }
  }


  savePost(){
    const postFormData = this.prepareFormData(this.post);
    this.postService.createPost(postFormData).subscribe(data =>{

        this.goToPostList();
      },
      error => console.log(error.error));
      console.log(this.post);
  }

  goToPostList(){
    this.router.navigate(['/admin/bpost']);
  }

  updateDataToForm(id: any){
    const postFormData = this.prepareFormData(this.post);
    this.postService.updatePost(id, postFormData).subscribe(data =>{

      this.goToPostList();
    });
  }

  listAllCategory(){
    this.categoryService.listAllCategory().subscribe(data =>{
      this.categories = data;
    })
  }

  prepareFormData(post: Post): FormData {
    const formData = new FormData();
    formData.append(
      'postDTO',
      new Blob([JSON.stringify(post)], {type: 'application/json'})
    );
    // formData.append('imageFile', this.fileToUpload, this.fileToUpload.name);
    for (let i = 0; i < this.fileToUpload.length; i++){
      formData.append(
        'file',
        this.fileToUpload[i]
        // this.fileToUpload[i].name
      )
    }
    return formData;
  }

  thumbnailChange(e: any){
    const files = e.target.files;
    if (files.length === 0) return;

    const reader = new FileReader();
    this.fileToUpload = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.url = reader.result;
    }
  }

  //add tag
}
