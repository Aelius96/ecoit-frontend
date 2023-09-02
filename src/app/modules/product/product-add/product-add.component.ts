import {Component, OnInit} from '@angular/core';
import {Product} from "../../../core/model/product/product";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../../services/product/product.service";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit{

  fileToUpload:string [] = [];
  url: any;
  id: any;
  products: Product = new Product();
  ckeConfig: any;

  constructor(private router:Router,private productService :ProductService,private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if(this.id){
      this.productService.getProductById(this.id).subscribe(data =>{
        this.products = data;
        this.url = this.products.thumb.pathUrl;
      })
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

  backToProductList(){
    return this.router.navigate([`admin/product`]);
  }

  saveProduct(){
    const newsFormData = this.prepareFormData(this.products);
    this.productService.addNewProduct(newsFormData).subscribe(data =>{
        this.backToProductList();
      },
      error => console.log(error));
  }

  addDataToForm(id: any){
    const newsFormData = this.prepareFormData(this.products);
    this.productService.updateProduct(id, newsFormData).subscribe(data =>{
      this.backToProductList();
    });
  }

  prepareFormData(products: Product): FormData {
    const formData = new FormData();
    formData.append(
      'product',
      new Blob([JSON.stringify(products)], {type: 'application/json'})
    );
    // formData.append('imageFile', this.fileToUpload, this.fileToUpload.name);
    for (let i = 0; i < this.fileToUpload.length; i++){
      formData.append(
        'thumb',
        this.fileToUpload[i]
        // this.fileToUpload[i].name
      )
    }
    return formData;
  }

  onSubmit(){
    if(this.id){
      this.addDataToForm(this.id);
    }else{
      this.saveProduct();
    }
  }
}
