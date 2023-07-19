import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/core/model/news/news';
import { NewsService } from 'src/app/services/news/news.service';
import {Post} from "../../../core/model/post/post";
import {PostService} from "../../../services/post/post.service";
import {Constant} from "../../../core/config/constant";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  baseURL = Constant.BASE_URL;
postList: Post[]=[]
constructor(private postService: PostService) {

}
  ngOnInit(): void {
    this.getList()
  }
  getList():void{
    this.postService.listAll().subscribe(data=>{
      this.postList =data;
  })
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

