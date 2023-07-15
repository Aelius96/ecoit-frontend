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
      id:9,
      tittle:'Chuyên mục',
      a:'category',
      icon:'fa fa-th-large',
    },
    {
      id:2,

      tittle: 'Bài viết',
      a: 'bpost',
      icon:'far fa-newspaper',
    }
    ,
    {
      id:3,
      tittle:'Khách hàng',
      a: 'customer',
      icon:'far fa-handshake'
    },
    {
      id:4,
      tittle:'sản phầm',
      a: 'product',
      icon:'far fa-box'
    },
    {
      id:5,
      tittle:'Trình chiếu',
      a: 'sliders',
      icon:'far fa-columns'
    },
    {
      id:6,
      tittle:'Điều hướng',
      a: 'nav',
      icon:'far fa-bars'
    },
    {
      id:7,
      tittle: 'Danh sách',
      a: 'list',
      icon:'fas fa-clipboard-list',
    },
    {
      id:8,
      tittle: 'Tài khoản',
      a: 'user',
      icon:'far fa-user',
    },
 
    
    

  ]



}
