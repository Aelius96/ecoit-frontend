import {Component, ElementRef, inject, OnInit, ViewChild} from '@angular/core';
import {Constant} from "../../../core/config/constant";
import {ActivatedRoute, Router} from "@angular/router";
import {Post} from "../../../core/model/post/post";
import {PostService} from "../../../services/post/post.service";
import {Category} from "../../../core/model/category/category";
import {CategoryService} from "../../../services/category/category.service";
import {FormControl} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";
import {Hashtag} from "../../../core/model/hashtag/hashtag";
import {COMMA, ENTER} from '@angular/cdk/keycodes';

import {HashtagService} from "../../../services/hashtag/hashtag.service";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatChipInputEvent} from "@angular/material/chips";
import {FileService} from "../../../services/file/file.service";

import {Domain} from "../../../core/domain/domain";
import {HttpHeaders, HttpParams} from "@angular/common/http";

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
  baseURL = Constant.BASE_URL;
  postURL = Domain.POST;
  message = '';
  imageURL: any;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  hashtagCtrl = new FormControl('');
  filteredHashtag: Observable<Hashtag[]>;
  selectedFile: File
  fileName: any;
  isFalse = false;
   currentPage: any;
   pageSize: any;
  constructor(private router:Router,
              private route:ActivatedRoute,
              private postService: PostService,
              private categoryService:CategoryService,
              private hashtagService: HashtagService,
              private fileService:FileService
  ) {

    this.filteredHashtag = this.hashtagCtrl.valueChanges.pipe(
      startWith(null),
      map((hashtag: string | null) => (hashtag ? this.filterHashtags(hashtag) : this.hashtagList.slice())),
    );
  }

  //hashtag
  @ViewChild('hashtagInput') hashtagInput: ElementRef<HTMLInputElement>;

  announcer = inject(LiveAnnouncer);

  addHashtag(event: MatChipInputEvent): void {

    const value = (event.value || '').trim();

    // Add the hashtag only if it doesn't already exist in the list
    if (value) {
      if(!this.hashtagList.map(h=>h.name).includes(value)){
        const hashTagNew = new Hashtag();
        hashTagNew.name = value;
        console.log(hashTagNew);
        console.log(value);
        this.post.hashtags.push(hashTagNew);
        this.hashtagList.push(hashTagNew);
      }else{
        this.hashtagList.forEach(existHashTag =>{
          if(value == existHashTag.name){
            this.post.hashtags.push(existHashTag)
          }
        })
      }
    }

    // Reset the input value
    event.chipInput!.clear();

    this.hashtagCtrl.setValue(event.value);
  }

  remove(hashtag: Hashtag): void {
    const index = this.post.hashtags.map(h => h.name).indexOf(hashtag.name);

    if (index >= 0) {
      this.post.hashtags.splice(index, 1);

      this.announcer.announce(`Removed ${hashtag.name}`);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.hashtagList.map(hashtag => hashtag.name).push(event.option.viewValue);
    this.hashtagInput.nativeElement.value = '';
    this.hashtagCtrl.setValue(null);
  }

  filterHashtags(value: string): Hashtag[] {
    const filterValue = value.toLowerCase();
    return this.hashtagList.filter(hashtag => hashtag.name.toLowerCase().includes(filterValue));
  }

  // currentPage:number;
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if(this.id){
      // this.route.queryParams.subscribe(params =>{
      //   this.currentPage = +params['page'] ||1;
      // })
      this.postService.getPostById(this.id).subscribe(data =>{
        this.post = data;
        this.url = this.post.image?.pathUrl;
        this.imageURL = `${this.baseURL}/${this.postURL}/image/${this.id}`;
        this.listAllHashTag();
      });
    }
    // this.route.queryParamMap.subscribe((param) =>{
    //   this.currentPage = param.get('pageNo');
    //   this.pageSize = param.get('pageSize');
    //   // console.log(this.currentPage);
    // })
    this.listAllCategory();

    this.ckeConfig = {
      extraPlugins: 'uploadimage, justify, colorbutton, colordialog, iframe, font',
      // uploadUrl:'https://ckeditor.com/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json',
      // Configure your file manager integration. This example uses CKFinder 3 for PHP.
      // filebrowserBrowseUrl:'https://ckeditor.com/apps/ckfinder/3.4.5/ckfinder.html',
      // filebrowserImageBrowseUrl:'https://ckeditor.com/apps/ckfinder/3.4.5/ckfinder.html?type=Images',
      // filebrowserUploadUrl:'https://ckeditor.com/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Files',
      // filebrowserImageUploadUrl:'https://ckeditor.com/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Images'
      // filebrowserUploadMethod: 'form',
      uploadUrl:`${this.baseURL}/s/file/add`,
      filebrowserUploadUrl:`${this.baseURL}/s/file/add`,
      filebrowserBrowseUrl:`${this.baseURL}/s/file/image/all`,
    };
  }

  onFileUploadRequest(event:any) {
    const formData = new FormData();
    formData.append('image', event.files);
    this.fileService.addImage(formData).subscribe(res =>{
    })

  }




  onSubmit(){

    if(this.id){
      this.updateDataToForm(this.id);
    }else{
      this.savePost();
    }
  }

  onModelChange(event: any){
    this.post.category = event;
  }

  savePost(){
    const postFormData = this.prepareFormData(this.post);
    this.postService.createPost(postFormData).subscribe(data =>{

        this.goToPostList();
        this.isFalse = false;
      },
      error =>{
      this.isFalse = true;
      this.message = error.error;
      console.log(error.error)}
    );
  }




  goToPostList(){

    // this.router.navigate([`/admin/bpost`]);

    // this.router.navigate(['/admin/bpost'], { queryParams: {pageNo:`${this.currentPage}`,pageSize:`${this.pageSize}`} });
    // console.log(this.currentPage, this.pageSize);
    this.router.navigate(['/admin/bpost']);

  }

  updateDataToForm(id: any){
    const postFormData = this.prepareFormData(this.post);
    this.postService.updatePost(id, postFormData).subscribe(data =>{
      this.goToPostList();
        this.isFalse = false;

      // window.history.back();
    },
      error => {
        this.isFalse = true;
        this.message = error.error;
        console.log(error.error)
      });
  }

  listAllCategory(){
    this.categoryService.listAllCategory().subscribe(data =>{
      this.categories = data;
    })
  }
  listAllHashTag(){
    this.hashtagService.listAllHashtag().subscribe(data =>{
      this.hashtagList = data;
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
    console.log(formData)
    return formData;
  }

  thumbnailChange(e: any){
    const files = e.target.files;
    if (files.length === 0) return;

    const reader = new FileReader();
    this.fileToUpload = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imageURL = reader.result;
    }
  }



}
