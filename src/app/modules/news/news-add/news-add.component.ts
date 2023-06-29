import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {News} from "../../../core/model/news/news";
import {NewsService} from "../../../services/news/news.service";
import {HttpClient} from "@angular/common/http";
import {Constant} from "../../../core/config/constant";
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news-add',
  templateUrl: './news-add.component.html',
  styleUrls: ['./news-add.component.css']
})
export class NewsAddComponent implements OnInit{
  news: News= new News();
  fileToUpload:string [] = [];
  url: any;
  id: any;
  ckeConfig: any;
  baseUrl = `${Constant.BASE_URL}`;
  message = '';
  constructor(private router:Router, private route:ActivatedRoute, private newsService: NewsService,private http:HttpClient , 
                            private formBuilder: FormBuilder) {
  }

  ngOnInit() {
// ví dụ thẻ tag
    this.form = this.formBuilder.group({
      tags: [['dog', 'cat', 'bird']]
    });
   this.value = this.form.controls['tags'].valueChanges
  //  ===========
    
    this.id = this.route.snapshot.params['id'];
    if(this.id){
      this.newsService.getNewsById(this.id).subscribe(data =>{
        this.news = data;
        this.url = this.news.image.pathUrl;
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
    console.log(this.form.value);

    if(this.id){
      this.updateDataToForm(this.id);
    }else{
      this.saveNews();
    }
  }

  saveNews(){
    const newsFormData = this.prepareFormData(this.news);
    this.newsService.createNews(newsFormData).subscribe(data =>{
        this.goToNewsList();
      },
      error => console.log(error.error));
  }

  goToNewsList(){
    this.router.navigate(['/admin/news']);
  }

  updateDataToForm(id: any){
    const newsFormData = this.prepareFormData(this.news);
    this.newsService.updateNews(id, newsFormData).subscribe(data =>{
      this.goToNewsList();
    });
  }

  prepareFormData(news: News): FormData {
    const formData = new FormData();
    formData.append(
      'news',
      new Blob([JSON.stringify(news)], {type: 'application/json'})
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


//-------- thẻ tag-----------
form: FormGroup;
  value: Observable<number>;
  tagSuggestions = ['google', 'apple', 'microsoft'];



}
