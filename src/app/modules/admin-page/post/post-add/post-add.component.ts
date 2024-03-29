import {
  Component,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatChipInputEvent } from '@angular/material/chips';
import { Post } from 'src/app/core/model/post/post';
import { Category } from 'src/app/core/model/category/category';
import { Hashtag } from 'src/app/core/model/hashtag/hashtag';
import { Constant } from 'src/app/core/config/constant';
import { Domain } from 'src/app/core/domain/domain';
import { PostService } from 'src/app/services/post/post.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { HashtagService } from 'src/app/services/hashtag/hashtag.service';
import { FileService } from 'src/app/services/file/file.service';
import { ToastService } from 'src/app/services/toast/toast.service';

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
    moTa: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    chuyenMuc: new FormControl('', Validators.required),
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
        console.log(this.post);
        this.url = this.post.image?.pathUrl;
        this.imageURL = `${this.baseURL}/${this.postURL}/image/${this.id}`;
        this.listAllHashTag();
        this.formPost.controls['chuyenMuc'].setValue(
          this.post.category.typeName
        );
        this.formPost.controls['moTa'].setValue(this.post.description);
        this.formPost.controls['title'].setValue(this.post.title);
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
        this.toastService.showWarning(error.error);
        console.log(error.error);
      }
    );
  }

  goToPostList() {
    this.router.navigate(['/admin/bpost']);
  }

  updateDataToForm(id: any) {
    const postFormData = this.prepareFormData(this.post);
    this.postService.updatePost(id, postFormData).subscribe(
      (data) => {
        this.toastService.showSuccess();
        this.goToPostList();
      },
      (error) => {
        this.toastService.showWarning(error.error);
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
}
