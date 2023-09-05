import { Component } from '@angular/core';
import { News } from 'src/app/core/model/news/news';
import { Customer } from '../../../core/model/customer/customer';
import { CustomerService } from '../../../services/customer/customer.service';
import { Product } from '../../../core/model/product/product';
import { ProductService } from '../../../services/product/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Constant } from '../../../core/config/constant';
import { Domain } from 'src/app/core/domain/domain';
import { ToastService } from '../../toast/toast.service';
import { NumberService } from 'src/app/services/number-typical/number.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css'],
})
export class CustomerAddComponent {
  ckeConfig: any;
  baseURL = Constant.BASE_URL;
  cusURL = Domain.CUSTOMER;
  bannerURL: any;
  url: any;
  id: any;
  customer: Customer = new Customer();
  products: Product[] = [];

  allIcon: any;
  formCus = new FormGroup({
    name: new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required]),
    icons: new FormControl('',[Validators.required] ),
    bgIColor: new FormControl(),
  });
  image: any;
  fileToUpload: string[] = [];

  constructor(
    private customerService: CustomerService,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private numService: NumberService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    window.sessionStorage.removeItem('redirect');
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.getCustomById(this.id);
    } else {
      this.getProducts();
    }
    this.getListIcon();
  }
  getListIcon() {
    this.numService.getListIconJson('icon.json').subscribe((data) => {
      this.allIcon = data;
    });
  }

  getCustomById(id: number) {
    this.customerService.getCusById(id).subscribe((data) => {
      this.customer = data;
      this.image = this.customer.banner?.pathUrl;
      this.bannerURL = `${this.baseURL}/${this.cusURL}/image/${this.customer.id}`;
      this.getProductUpdate(this.customer);
      this.formCus.controls['name'].setValue(this.customer.name);
      this.formCus.controls['icons'].setValue(this.customer.icon);
      this.formCus.controls['description'].setValue(this.customer.description);
    });
  }

  getProductUpdate(customer: Customer) {
    this.productService.getProductList().subscribe((data) => {
      this.products = data;
      if (customer.products != null) {
        const sid = customer.products.map((item) => item.id);
        for (let i = 0; i < sid.length; i++) {
          this.products.find((e) => {
            if (e.id === sid[i]) e.selected = true;
          });
        }
      }
    });
  }

  getProducts() {
    this.productService.getProductList().subscribe((data) => {
      this.products = data;
      // console.log(data)
    });
  }

  updateCustomer(id: number) {
    let customerFormData = this.prepareFormDataDTO(this.customer);
    this.customerService.updateCustomer(id, customerFormData).subscribe(
      () => {
        this.toast.showSuccess();
        this.goToCustomerList();
      },
      (err) => {
        this.toast.showWarning(err.error);
      }
    );
  }

  //Use DTO
  prepareFormDataDTO(customer: Customer): FormData {
    const formData = new FormData();
    formData.append(
      'customer',
      new Blob([JSON.stringify(customer)], { type: 'application/json' })
    );
    for (let j = 0; j < this.fileToUpload.length; j++) {
      formData.append('thumb', this.fileToUpload[j]);
    }
    return formData;
  }
  addCustomer() {
    let customerFormData = this.prepareFormDataDTO(this.customer);
    this.customerService.addCustomerDTO(customerFormData).subscribe(
      (data) => {
        console.log(customerFormData);
        this.toast.showSuccess();
        this.goToCustomerList();
      },
      (error) => {
        this.toast.showWarning(error.error);
      }
    );
  }

  goToCustomerList() {
    this.router.navigate(['/admin/customer']);
  }

  onSubmit() {
    this.customer.name = this.formCus.controls['name'].value;
    this.customer.icon = this.formCus.controls['icons'].value;
    this.customer.description = this.formCus.controls['description'].value;
    this.customer.bgIColor = this.formCus.controls['bgIColor'].value;
    console.log(this.customer.name);
    if (this.id) {
      this.updateCustomer(this.id);
    } else {
      this.addCustomer();
    }
  }

  onChange(event: any) {
    const files = event.target.files;
    if (files.length === 0) return;

    const reader = new FileReader();
    this.fileToUpload = files;

    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.bannerURL = reader.result;
    };
  }

  onCheckChangeProduct(event: any, product: Product) {
    product.selected = event.currentTarget.checked;
    if (product.selected) {
      console.log(this.customer.products);
      this.customer.products.push(product);
    } else {
      this.customer.products.forEach((item) => {
        if (item.id === product.id) {
          if (this.customer.products) {
            this.customer.products = this.customer.products.filter(
              (i) => i !== item
            );
          }
        }
      });
    }
  }
  notNeedFile() {
    // @ts-ignore
    document.getElementById('file-in').value = null;
    this.image = null;
    // this.onChange(this.fileToUpload);
  }

  addMoreProduct() {
    window.sessionStorage.setItem('redirect', '/admin/customer/add');
    this.router.navigate(['/admin/product/add']);
  }

  // imageChange(e: any){
  //   const files = e.target.files;
  //   if (files.length === 0) return;

  //   const reader = new FileReader();
  //   this.fileToUpload=files;
  //   reader.readAsDataURL(files[0]);
  //   reader.onload = (_event) =>{
  //     this.imageURL= reader.result;
  //   }
  // }
  changeColor() {
    this.customer.bgIColor = this.formCus.controls['bgIColor'].value;
  }
}
