import { Component, OnInit } from '@angular/core';
import { Domain } from 'src/app/core/domain/domain';
import { AddressService } from 'src/app/services/address/address.service';
import { Address } from 'src/app/core/model/address/address';
import { AboutUsService } from 'src/app/services/about-us/about-us.service';
import { About } from 'src/app/core/model/about/about';
import { DomSanitizer } from '@angular/platform-browser';
import { PostService } from 'src/app/services/post/post.service';
import { Constant } from 'src/app/core/config/constant';
import { Post } from 'src/app/core/model/post/post';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  postListNews: Post[]=[];
  addressList : Address[] = [];
  about : About = new About();
  postURL = Domain.POST
  paging = {
    page: 1,
    size: 4,
    totalRecord: 0
  }
  baseURL = Constant.BASE_URL;
  category: any;
  constructor(
              private postService: PostService,
              private  addressService: AddressService,
              private about_usService: AboutUsService ,
              private sanitizer: DomSanitizer,
             ) {}

  ngOnInit(): void {
    this.getListAllWithNews();
    this.getListAddress();
    this.getListAllInformation();
  }

  getParams(pageSize: number, category:string): any {
    let params: any = {};
    if (pageSize) {
      params[`pageSize`] = pageSize;
    }
    if(category){
      params[`category`] = category;
    }
    return params;
  }

  getListAllWithNews() {
    const params = this.getParams(this.paging.size,this.category);
    this.postService.listAllWithPageByNews(params)
      .subscribe(
        data => {
          this.postListNews = data.content;
          this.paging.totalRecord = data.totalElements;
         
        },
        error => {
          console.log(error);
        });
  }


field_activity=[
  {
    id: 1,
    title:'Số hóa và chuyển đổi'
  },
  {
    id: 2,
    title:'Tích hợp hệ thống công nghệ thông tin'
  },
  {
    id: 3,
    title:'Tư vấn dự án công nghệ thông tin'
  },
  {
    id: 4,
    title:'Cung ứng dịch vụ công nghệ thông tin'
  },
  {
    id: 5,
    title:'Tư vấn dự án công nghệ thông tin'
  },
  {
    id: 6,
    title:'Sản xuất và gia công phần mềm'
  },
]

getListAddress(){
  this.addressService.ListAll().subscribe(res=>{
    this.addressList= res;
  }
  )
}

// about
email:any;
phone:any;
fax:any;
getListAllInformation(){
  this.about_usService.getAllInformation().subscribe(res=>{
     this.about= res;
     this.email = this.sanitizer.bypassSecurityTrustHtml(this.about.email);
     this.phone = this.sanitizer.bypassSecurityTrustHtml(this.about.phone);
     this.fax = this.sanitizer.bypassSecurityTrustHtml(this.about.fax);
  })
 }


}

