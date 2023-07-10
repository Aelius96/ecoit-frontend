import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user/user.service";
import {User} from "../../../core/model/user/user";
import {TokenStorageService} from "../../../services/token-storage/token-storage.service";

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent {
  //  user: User[] = [];
  //  role :any;
  // constructor(private userService:UserService,private tokenStorageService: TokenStorageService) {
  // }
  //
  // ngOnInit(): void {
  //   this.role = this.tokenStorageService.getToken().roles;
  //   this.getAllUser();
  // }
  //
  // getAllUser(){
  //   return this.userService.getAllUser().subscribe(data =>{
  //     this.user = data;
  //   })
  // }

  aside =[
    {
      id:1,
      tittle:'Dashboard',
      a: '/admin',
      icon:'far fa-home'
    },
    {
      id:2,
      tittle:'Tin tức - Tuyển dụng',
      a: 'news',
      icon:'far fa-newspaper'
    },
    {
      id:3,
      tittle:'Blog',
      a: 'blog',
      icon:'far fa-rss-square'
    },
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
      tittle:'Điều hướng',
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
      tittle: 'Tài khoản',
      a: 'user',
      icon:'far fa-user',
    },
    {
      id:10,

      tittle: 'Bài viết',
      a: 'bpost',
      icon:'far fa-newspaper',
    }
    ,


  ]



}
