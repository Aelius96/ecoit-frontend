import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/core/model/news/news';
import { NewsService } from 'src/app/services/news/news.service';
import {Post} from "../../../core/model/post/post";
import {PostService} from "../../../services/post/post.service";
import {Constant} from "../../../core/config/constant";
import { Domain } from 'src/app/core/domain/domain';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  postListNews: Post[]=[];
  postURL = Domain.POST
  paging = {
    page: 1,
    size: 3,
    totalRecord: 0
  }
  baseURL = Constant.BASE_URL;
  category: any;
  constructor(
              private postService: PostService,
             ) {}

  ngOnInit(): void {
    this.getListAllWithNews();
  }

  getRequestParams(pageSize: number, category:string): any {
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
    const params = this.getRequestParams(this.paging.size,this.category);
    this.postService.listAllWithPageByNews(params)
      .subscribe(
        data => {
          this.postListNews = data.content;
          this.paging.totalRecord = data.totalElements;
          console.log(this.postListNews);
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

contact_about=[
  {
    id:1,
    icon:'fa fa-map-marker',
    title:'Trụ sở chính: Tầng 3 , Khu A-B Khu văn phòng , Imperia Garde, 203 Nguyễn Huy Tưởng , Thanh Xuân , TP Hà Nội'
  },
  {
    id:2,
    icon:'fa fa-map-marker',
    title:'VP2: A10 – Ngõ 217 Đê La Thành – Đống Đa - Hà Nội'
  },
  {
    id:3,
    icon:'fa fa-map-marker',
    title:' Chi nhánh Đà Nẵng: Tầng 4, tòa nhà Minh sơn, số 25 đường 2/9, P. Hòa Cường Nam, Q. Hải Châu, Tp. Đà Nẵng'
  },
  {
    icon:'fa fa-phone',
    title:'(+84) 935 772 929'
  },
  {
    icon:'fa fa-print',
    title:'(024) 62750064'
  },
  {
    icon:'fa fa-envelope',
    title:'contact@ecoit.asia'
  },
]
}

