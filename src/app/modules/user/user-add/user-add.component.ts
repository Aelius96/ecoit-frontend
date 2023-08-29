import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth/auth.service";
import {User} from "../../../core/model/user/user";
import {UserService} from "../../../services/user/user.service";
import {ActivatedRoute, Router} from "@angular/router";

import {Role} from "../../../core/model/role/role";
import {RoleService} from "../../../services/role/role.service";
import {ToastrService} from 'ngx-toastr';

import {ToastService} from "../../toast/toast.service";

import { Aside } from 'src/app/core/model/aside/aside';
import { AsideService } from 'src/app/services/aside/aside.service';



@Component({
  selector: 'app-user-add',
  templateUrl:'./user-add.component.html',
  styleUrls: ['./user-add.component.css']
})

export class UserAddComponent implements OnInit{
  
  user : User = new User();
  role :Role[] = [];
  asidess: Aside[]=[]
  id: any;
  roll: any;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = "";
  type: any;
  submitFail = false;

  constructor(private authService: AuthService,private userService: UserService, private roleService:RoleService,
              private router: Router,private route:ActivatedRoute ,

              private toastService: ToastService, ) {

              private toastService: ToastrService,
              private aside:AsideService ) {

  }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if(this.id){

      this.getUserById(this.id);
    }
    this.getaside()
    console.log(this.asidess)
  }
  getaside() {
    this.aside.getAside('aside.json').subscribe(data=> {
      this.asidess = data;
    });
  }

  getUserById(id: number) {
    this.userService.getUserById(id).subscribe(data => {
      this.user = data;
      console.log(this.user)
      this.getRoleUpdate(this.user);
    });
  }

  getRoleUpdate(user: User){
    this.roleService.listRole().subscribe(data => {
      this.role = data;
      if(user.role != null){
        const sid = user.role.map(item => item.id);
        for (let i=0; i<sid.length; i++){
          this.role.find( e => {
            if(e.id === sid[i]) e.selected = true;
          })
        }
      }
    })
  }

  onRoleChange(event: any, role: Role){
    role.selected = event.currentTarget.checked;
    if(role.selected){
      this.user.role.push(role);
    }else{
      this.user.role.forEach(item => {
        if(item.id === role.id){
          this.user.role = this.user.role.filter(i => i !== item);
        }
      })
    }
  }
  onAsideChange(event:any,aside:Aside){
    aside.selected=event.currentTarget.checked;
    if(aside.selected){
      this.user.aside.push(aside);
    }else{
      this.user.aside.forEach(item => {
        if(item.id === aside.id){
          this.user.aside = this.user.aside.filter(i => i !== item);
        }
      })
    }
  }

  goToUserList(){
    return this.router.navigate([`admin/user`])
  }

  updateUser(id: number){
    this.userService.updateUser(id,this.user).subscribe( data =>{
      this.toastService.showUpdate();
      this.goToUserList();
    },error => {
      this.toastService.showWarning(error.error);
      console.log(error);
    })
  }

  onCheckChange(event: any, user: User){
    user.active = event.currentTarget.checked;
  }


  onSubmit() {

    if(this.id){
      this.updateUser(this.id);
    }else{
      this.authService.register(this.user).subscribe(() =>{

          this.isSuccessful = true;
          this.isSignUpFailed = false;
          // this.toastService.showSuccess()
          // this.errorMessage = "Đăng ký thành công!!"
        },
        error =>{
          // this.toastService.showWarning(error.error)
          // this.errorMessage = "Đăng ký thất bại!!";
          this.isSignUpFailed = true;
          console.log(error.error);
        })
    }
  }

  changePassword(id:number) {
    this.userService.changePassword(id);
  }

}
