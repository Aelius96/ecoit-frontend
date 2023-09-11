import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth/auth.service";
import {User} from "../../../core/model/user/user";
import {UserService} from "../../../services/user/user.service";
import {ActivatedRoute, Router} from "@angular/router";

import {Role} from "../../../core/model/role/role";
import {RoleService} from "../../../services/role/role.service";
import {ToastrService} from 'ngx-toastr';

import {ToastService} from "../../toast/toast.service";

import { Module } from 'src/app/core/model/module/module';
import { ModuleService } from 'src/app/services/module/module.service';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-user-add',
  templateUrl:'./user-add.component.html',
  styleUrls: ['./user-add.component.css']
})

export class UserAddComponent implements OnInit{

  user : User = new User();
  roles :Role[] = [];
  roleById = new Role()
  modules: Module[]=[]
  id: any;
  roll: any;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = "";
  type: any;
  submitFail = false;
  roleId= new FormControl()

  constructor(private authService: AuthService,private userService: UserService, private roleService:RoleService,
              private router: Router,private route:ActivatedRoute ,
              private toastService: ToastService,private module:ModuleService ) {

  }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if(this.id){
      this.getUserById(this.id);
      this.getRoleUpdate(this.user);
    }

  }
  getaside() {
    this.module.getaside('aside.json').subscribe(data=> {
      this.modules = data;
      if(this.modules.length ){
        const sid =this.modules.map(item => item.id);
        for (let i=0; i<sid.length; i++){
          this.modules.find( e => {
            if(e.id === sid[i]) e.status = true;
          })
        }
    }
    })
  }

  getUserById(id: number) {
    this.userService.getUserById(id).subscribe(data => {
      this.user = data;

      this.getRoleUpdate(this.user);

    });
  }

  getRoleUpdate(user: User){
    this.roleService.listRole().subscribe(data => {
      this.roles = data;
      })

      // if(user.role != null){
      //   const sid = user.role.map(item => item.id);
      //   for (let i=0; i<sid.length; i++){
      //     this.roles.find( e => {
      //       if(e.id === sid[i]) e.selected = true;
      //     })
      //   }
      // }
      // console.log(this.roles)
  }
  getRolebyId(id:number){
    this.roleService.getModulebyId(id).subscribe(data=>{
      this.roleById = data
    })
    }

  // onRoleChange(event: any, role: Role){
  //   role.selected = event.currentTarget.checked;
  //   if(role.selected){
  //     this.user.role.push(role);
  //   }else{
  //     this.user.role.forEach(item => {
  //       if(item.id === role.id){
  //         this.user.role = this.user.role.filter(i => i !== item);
  //       }
  //     })
  //   }
  // }
  onModulechange(event:any,module:Module){
    // module.status=event.currentTarget.checked;
    // if(module.status){
    //   this.module.push(role);
    // }else{
    //   this.roles.module.forEach(item => {
    //     if(item.id === aside.id){
    //       this.role.module = this.user.module.filter(i => i !== item);
    //     }
    //   })
    // }
  }

  goToUserList(){
    return this.router.navigate([`admin/user`])
  }

  updateUser(id: number){
    // this.user.role[0]=this.roles[this.roleId.value]
    // this.userService.updateUser(id,this.user).subscribe( data =>{
    //   console.log(data);
    //   this.toastService.showSuccess();
    //   this.goToUserList();
    // },error => {
    //   this.toastService.showWarning(error.error);
    //   console.log(error);
    // })
  }

  onCheckChange(event: any, user: User){
    user.active = event.currentTarget.checked;
  }

  goToBack() {
    this.router.navigate(['/admin/user']);
    // window.history.back();
  }

  onSubmit() {
    if(this.id){
      this.updateUser(this.id);
    }else{
      this.authService.register(this.user).subscribe(() =>{

          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.goToBack()
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
  selectRole(){
    this.getRolebyId(this.roleId.value);
  }

}
