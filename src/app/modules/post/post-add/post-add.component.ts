import {
  Component,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Constant } from '../../../core/config/constant';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../../../core/model/post/post';
import { PostService } from '../../../services/post/post.service';
import { Category } from '../../../core/model/category/category';
import { CategoryService } from '../../../services/category/category.service';
import { FormControl, FormGroup } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { Hashtag } from '../../../core/model/hashtag/hashtag';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

import { HashtagService } from '../../../services/hashtag/hashtag.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatChipInputEvent } from '@angular/material/chips';
import { FileService } from '../../../services/file/file.service';

import { Domain } from '../../../core/domain/domain';
import { ToastService } from '../../toast/toast.service';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css'],
})
export class PostAddComponent implements OnInit {
  post: Post = new Post();
  categories: Category[] = [];
  hashtagList: Hashtag[] = [];
  fileToUpload: string[] = [];
  formPost = new FormGroup({
    moTa: new FormControl(''),
    title: new FormControl(''),
    noiDung: new FormControl(''),
    chuyenMuc: new FormControl(''),
  });
  url: any;
  id: any;
  ckeConfig: any;
  baseURL = Constant.BASE_URL;
  postURL = Domain.POST;
  imageURL: any;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  hashtagCtrl = new FormControl('');
  filteredHashtag: Observable<Hashtag[]>;
  selectedFile: File;
  fileName: any;

  inputs = '';
  isMota = true;
  isTitle = true;
  isChuyenmuc = true;
  isconTent = true;
  content = '';

  currentPage: any;
  pageSize: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postService: PostService,
    private categoryService: CategoryService,
    private hashtagService: HashtagService,
    private fileService: FileService,
    private toastService: ToastService
  ) {
    this.filteredHashtag = this.hashtagCtrl.valueChanges.pipe(
      startWith(null),
      map((hashtag: string | null) =>
        hashtag ? this.filterHashtags(hashtag) : this.hashtagList.slice()
      )
    );
  }

  //hashtag
  @ViewChild('hashtagInput') hashtagInput: ElementRef<HTMLInputElement>;

  announcer = inject(LiveAnnouncer);

  addHashtag(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add the hashtag only if it doesn't already exist in the list
    if (value) {
      if (!this.hashtagList.map((h) => h.name).includes(value)) {
        const hashTagNew = new Hashtag();
        hashTagNew.name = value;
        console.log(hashTagNew);
        console.log(value);
        this.post.hashtags.push(hashTagNew);
        this.hashtagList.push(hashTagNew);
      } else {
        this.hashtagList.forEach((existHashTag) => {
          if (value == existHashTag.name) {
            this.post.hashtags.push(existHashTag);
          }
        });
      }
    }

    // Reset the input value
    event.chipInput!.clear();

    this.hashtagCtrl.setValue(event.value);
  }

  remove(hashtag: Hashtag): void {
    const index = this.post.hashtags.map((h) => h.name).indexOf(hashtag.name);

    if (index >= 0) {
      this.post.hashtags.splice(index, 1);

      this.announcer.announce(`Removed ${hashtag.name}`);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.hashtagList
      .map((hashtag) => hashtag.name)
      .push(event.option.viewValue);
    this.hashtagInput.nativeElement.value = '';
    this.hashtagCtrl.setValue(null);
  }

  filterHashtags(value: string): Hashtag[] {
    const filterValue = value.toLowerCase();
    return this.hashtagList.filter((hashtag) =>
      hashtag.name.toLowerCase().includes(filterValue)
    );
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.postService.getPostById(this.id).subscribe((data) => {
        this.post = data;
        console.log(this.post)
        this.url = this.post.image?.pathUrl;
        this.imageURL = `${this.baseURL}/${this.postURL}/image/${this.id}`;
        this.listAllHashTag();
        this.formPost.controls['chuyenMuc'].setValue(this.post.category.typeName);
        this.formPost.controls['moTa'].setValue(this.post.description);
        this.formPost.controls['title'].setValue(this.post.title);
        this.content = this.post.content;
      });
    }

    this.listAllCategory();

    this.ckeConfig = {
      extraPlugins:
        'uploadimage, justify, colorbutton, colordialog, iframe, font',
      uploadUrl: `${this.baseURL}/s/file/add`,
      filebrowserUploadUrl: `${this.baseURL}/s/file/add`,
      filebrowserBrowseUrl: `${this.baseURL}/s/file/image/all`,
    };
  }

  onFileUploadRequest(event: any) {
    const formData = new FormData();
    formData.append('image', event.files);
    this.fileService.addImage(formData).subscribe((res) => {});
  }

  onSubmit() {
    this.post.title = this.formPost.controls['title'].value;
    this.post.category.typeName = this.formPost.controls['chuyenMuc'].value;
    this.post.description = this.formPost.controls['moTa'].value;
    this.post.content = this.content;
    console.log(this.content.length);
    console.log(this.post.content);
    if (this.id) {
      this.updateDataToForm(this.id);
    } else {
      this.savePost();
    }
  }

  onModelChange(event: any) {
    this.post.category = event;
  }

  prepareFormData(post: Post): FormData {
    console.log(post);
    const formData = new FormData();
    formData.append(
      'postDTO',
      new Blob([JSON.stringify(post)], { type: 'application/json' })
    );
    console.log(formData);
    // formData.append('imageFile', this.fileToUpload, this.fileToUpload.name);
    for (let i = 0; i < this.fileToUpload.length; i++) {
      formData.append(
        'file',
        this.fileToUpload[i]
        // this.fileToUpload[i].name
      );
    }
    return formData;
  }

  savePost() {
    const postFormData = this.prepareFormData(this.post);
    this.postService.createPost(postFormData).subscribe(
      () => {
        this.toastService.showSuccess();
        this.goToPostList();
      },
      (error) => {
        this.ktradieukien();
        this.toastService.showWarning(error.error, this.inputs);
        console.log(error.error);
      }
    );
  }

  goToPostList() {
    this.router.navigate(['/admin-control/bpost']);
  }

  updateDataToForm(id: any) {
    const postFormData = this.prepareFormData(this.post);
    this.postService.updatePost(id, postFormData).subscribe(
      (data) => {
        this.toastService.showSuccess();
        this.goToPostList();
      },
      (error) => {
        this.ktradieukien();
        this.toastService.showWarning(error.error, this.inputs);
        console.log(error.error);
      }
    );
  }

  listAllCategory() {
    this.categoryService.listAllCategory().subscribe((data) => {
      this.categories = data;
    });
  }
  listAllHashTag() {
    this.hashtagService.listAllHashtag().subscribe((data) => {
      this.hashtagList = data;
    });
  }

  thumbnailChange(e: any) {
    const files = e.target.files;
    if (files.length === 0) return;

    const reader = new FileReader();
    this.fileToUpload = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imageURL = reader.result;
    };
  }
  //validate
  ktradieukien() {
    if (
      this.formPost.controls['title'].value === "" &&
      this.formPost.controls['chuyenMuc'].value === "" &&
      this.formPost.controls['moTa'].value === "" &&
      this.content.length === 0
    ) {
      this.isTitle = false;
      this.isChuyenmuc = false;
      this.isMota = false;
      this.isconTent = false;
      this.inputs = 'title';
    } else if (
      this.formPost.controls['title'].value === "" &&
      this.formPost.controls['chuyenMuc'].value === "" &&
      this.formPost.controls['moTa'].value === ""
    ) {
      this.isMota = false;
      this.isChuyenmuc = false;
      this.isTitle = false;
      this.inputs = 'title';
    } else if (
      this.formPost.controls['title'].value === "" &&
      this.formPost.controls['chuyenMuc'].value === "" &&
      this.content.length === 0
    ) {
      this.isTitle = false;
      this.isChuyenmuc = false;
      this.isconTent = false;
      this.inputs = 'title';
    } else if (
      this.formPost.controls['title'].value === "" &&
      this.formPost.controls['moTa'].value === "" &&
      this.content.length === 0
    ) {
      this.isTitle = false;
      this.isconTent = false;
      this.isMota = false;
      this.inputs = 'title';
    } else if (
      this.formPost.controls['moTa'].value === "" &&
      this.formPost.controls['chuyenMuc'].value === "" &&
      this.content.length === 0
    ) {
      this.isMota = false;
      this.isChuyenmuc = false;
      this.inputs = 'moTa';
      this.isconTent = false;
    } else if (
      this.formPost.controls['title'].value === "" &&
      this.formPost.controls['chuyenMuc'].value === ""
    ) {
      this.isTitle = false;
      this.isChuyenmuc = false;
      this.inputs = 'title';
    } else if (
      this.formPost.controls['title'].value === "" &&
      this.formPost.controls['moTa'].value === ""
    ) {
      this.isTitle = false;
      this.isMota = false;
      this.inputs = 'title';
    } else if (
      this.formPost.controls['moTa'].value === "" &&
      this.formPost.controls['chuyenMuc'].value === ""
    ) {
      this.isMota = false;
      this.isChuyenmuc = false;
      this.inputs = 'moTa';
    } else if (
      this.formPost.controls['title'].value === "" &&
      this.content.length === 0
    ) {
      this.isTitle = false;
      this.isconTent = false;
      this.inputs = 'title';
    } else if (
      this.content.length === 0 &&
      this.formPost.controls['moTa'].value === ""
    ) {
      this.isconTent = false;
      this.isMota = false;
      this.inputs = 'moTa';
    } else if (
      this.content.length === 0 &&
      this.formPost.controls['chuyenMuc'].value === ""
    ) {
      this.isconTent = false;
      this.isChuyenmuc = false;
      this.inputs = 'editor';
    } else if (this.content.length === 0) {
      this.isconTent = false;
      this.inputs = 'editor';
    } else if (this.formPost.controls['title'].value === "") {
      this.isTitle = false;
      this.inputs = 'title';
    } else if (this.formPost.controls['moTa'].value === "") {
      this.isChuyenmuc = false;
      this.inputs = 'moTa';
    } else {
      this.isChuyenmuc = false;
      this.inputs = 'chuyenmuc';
    }
  }
  thongtinMota() {
    this.isMota = true;
  }
  thongtinChuyemmuc() {
    this.isChuyenmuc = true;
  }
  thongtinTitle() {
    this.isTitle = true;
  }
  thongtinContent() {
    this.isconTent = true;
  }
}
