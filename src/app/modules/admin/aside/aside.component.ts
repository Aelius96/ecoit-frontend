import {Component} from '@angular/core';
import {TokenStorageService} from "../../../services/token-storage/token-storage.service";

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent {
  
  constructor(private tokenStorageService: TokenStorageService) { }

  aside =[
    {
      id:1,
      tittle:'Con số tiêu biểu',
      a: 'dashboard',
      icon:'fa fa-line-chart'
    },
    {
      id:2,
      tittle:'Chuyên mục bài viết',
      a:'category',
      icon:'fa fa-th-large',
    },
    {
      id:3,

      tittle: 'Bài viết',
      a: 'bpost',
      icon:'far fa-newspaper',
    }
    ,
    {
      id:4,
      tittle:'Khách hàng',
      a: 'customer',
      icon:'far fa-handshake'
    },
    {
      id:5,
      tittle:'sản phầm',
      a: 'product',
      icon:'far fa-box'
    },
    {
      id:6,
      tittle:'Trình chiếu',
      a: 'sliders',
      icon:'far fa-columns'
    },
    {
      id:7,
      tittle:'thanh Điều hướng',
      a: 'nav',
      icon:'far fa-bars'
    },
    {
      id:8,
      tittle: 'Danh sách',
      a: 'list',
      icon:'fas fa-clipboard-list',
    },
    {
      id:9,
      tittle: 'Giới thiệu',
      a: 'about',
      icon:'fa fa-users',
    },
    {
      id:10,
      tittle: 'kho ảnh',
      a: 'albums',
      icon:'fa fa-picture-o',
    },
    {
      id:11,
      tittle: 'Tài khoản',
      a: 'user',
      icon:'far fa-user',
    },

  ]

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
