import {
  Component,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, startWith } from 'rxjs';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/core/model/product/product';
import { Hashtag } from 'src/app/core/model/hashtag/hashtag';
import { Constant } from 'src/app/core/config/constant';
import { Domain } from 'src/app/core/domain/domain';
import { ProductService } from 'src/app/services/product/product.service';
import { HashtagService } from 'src/app/services/hashtag/hashtag.service';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent implements OnInit {
  fileToUpload: string[] = [];
  url: any;
  id: any;
  products: Product = new Product();
  hashtagList: Hashtag[] = [];
  ckeConfig: any;
  baseURL = Constant.BASE_URL;
  productURL = Domain.PRODUCT;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  filteredHashtag: Observable<Hashtag[]>;
  imageURL: any;
  formProduct = new FormGroup({
    hashtagCtrl: new FormControl(''),
    title: new FormControl('',Validators.required),
    description: new FormControl('',Validators.required),
  });

  constructor(
    private router: Router,
    private productService: ProductService,
    private hashtagService: HashtagService,
    private route: ActivatedRoute,
    private toast: ToastService
  ) {
    this.filteredHashtag = this.formProduct.controls[
      'hashtagCtrl'
    ].valueChanges.pipe(
      startWith(null),
      map((hashtag: string | null) =>
        hashtag ? this.filterHashtags(hashtag) : this.hashtagList.slice()
      )
    );
  }

  // hashtag
  @ViewChild('hashtagInputP') hashtagInput: ElementRef<HTMLInputElement>;

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
        this.products.hashtags.push(hashTagNew);
        this.hashtagList.push(hashTagNew);
      } else {
        this.hashtagList.forEach((existHashTag) => {
          if (value == existHashTag.name) {
            this.products.hashtags.push(existHashTag);
          }
        });
      }
    }
    // Reset the input value
    event.chipInput!.clear();

    this.formProduct.controls['hashtagCtrl'].setValue(event.value);
  }

  remove(hashtag: Hashtag): void {
    const index = this.products.hashtags
      .map((h) => h.name)
      .indexOf(hashtag.name);

    if (index >= 0) {
      this.products.hashtags.splice(index, 1);

      this.announcer.announce(`Removed ${hashtag.name}`);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.hashtagList
      .map((hashtag) => hashtag.name)
      .push(event.option.viewValue);
    this.hashtagInput.nativeElement.value = '';
    this.formProduct.controls['hashtagCtrl'].setValue(null);
  }

  filterHashtags(value: string): Hashtag[] {
    const filterValue = value.toLowerCase();
    return this.hashtagList.filter((hashtag) =>
      hashtag.name.toLowerCase().includes(filterValue)
    );
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.productService.getProductById(this.id).subscribe((data) => {
        this.products = data;
        this.url = this.products.image?.pathUrl;
        this.imageURL = `${this.baseURL}/${this.productURL}/image/${this.id}`;
        this.listAllHashTag();
        this.formProduct.controls['description'].setValue(this.products.description)
        this.formProduct.controls['title'].setValue(this.products.title)
      });
    }
    this.ckeConfig = {
      extraPlugins:
        'uploadimage, justify, colorbutton, colordialog, iframe, font',
      uploadUrl:
        'https://ckeditor.com/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json',
      height: 330,
      filebrowserUploadUrl:
        'https://ckeditor.com/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Files',
      filebrowserImageUploadUrl:
        'https://ckeditor.com/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Images',
    };
  }

  imageChange(e: any) {
    const files = e.target.files;
    if (files.length === 0) return;

    const reader = new FileReader();
    this.fileToUpload = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imageURL = reader.result;
    };
  }

  listAllHashTag() {
    this.hashtagService.listAllHashtag().subscribe((data) => {
      this.hashtagList = data;
    });
  }

  backToProductList() {
    return this.router.navigate([`admin/product`]);
  }

  saveProduct() {
    const newsFormData = this.prepareFormData(this.products);
    this.productService.addNewProduct(newsFormData).subscribe(
      (data) => {
        this.toast.showSuccess();
        console.log(data);
        this.backToProductList();
      },
      (error) => {
        this.toast.showWarning(error.error);
        console.log(error);
      }
    );
  }

  updateProduct(id: any) {
    const newsFormData = this.prepareFormData(this.products);
    this.productService.updateProduct(id, newsFormData).subscribe(
      (data) => {
        this.toast.showSuccess();
        console.log(data);
        this.backToProductList();
      },
      (error) => {
        this.toast.showWarning(error.error);
        console.log(error);
      }
    );
  }

  prepareFormData(products: Product): FormData {
    console.log(products);
    const formData = new FormData();
    formData.append(
      'product',
      new Blob([JSON.stringify(products)], { type: 'application/json' })
    );

    // formData.append('imageFile', this.fileToUpload, this.fileToUpload.name);
    for (let i = 0; i < this.fileToUpload.length; i++) {
      formData.append(
        'thumb',
        this.fileToUpload[i]
        // this.fileToUpload[i].name
      );
    }
    return formData;
  }

  onSubmit() {
    this.products.title=this.formProduct.controls['title'].value
    this.products.description=this.formProduct.controls['description'].value
    if (this.id) {
      this.updateProduct(this.id);
    } else {
      this.saveProduct();
    }
  }
}
