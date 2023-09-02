import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Module } from 'src/app/core/model/module/module';
import { Permission } from 'src/app/core/model/permission/permission';
import { Role } from 'src/app/core/model/role/role';
import { User } from 'src/app/core/model/user/user';
import { ToastService } from 'src/app/modules/toast/toast.service';
import { ModuleService } from 'src/app/services/module/module.service';
import { PermissionService } from 'src/app/services/permission/permission.service';
import { RoleService } from 'src/app/services/role/role.service';
import { UserService } from 'src/app/services/user/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-role-control',
  templateUrl: './role-control.component.html',
  styleUrls: ['./role-control.component.css']
})
export class RoleControlComponent {
  roles :Role[] = [];
  users: User[] = [];
  module:Module[]=[];
  permissionList:Permission[]=[];
  permission:Permission = new Permission();
  perControl = new FormControl();


  constructor(private userService: UserService, private toast:ToastService, private toastService : ToastrService,
    private roleService:RoleService,private moduleService:ModuleService ,
    private permissionService:PermissionService ){
    }
  ngOnInit(): void {
    this.getRole();
    this.getListModule();
    this.listPermission();
  }

  getRole(){
    this.roleService.listRole().subscribe(data => {
      this.roles = data;
      console.log(data)
    });
  }

  getListModule(){
    this.moduleService.getModule("aside.json").subscribe(res=>{
      this.module = res;
      console.log(res)
    })
  }

  // searchInput = '';
  // paging = {
  //   page: 1,
  //   size: 5,
  //   totalRecord: 0,
  // };
  
  // getrequestparams(page: number, pageSize: number, search: string) {
  //   let params: any = {};

  //   if (page) {
  //     params[`pageNo`] = page - 1;
  //   }

  //   if (pageSize) {
  //     params[`pageSize`] = pageSize;
  //   }

  //   if (search) {
  //     params[`search`] = search;
  //   }
  //   return params;
  // }

  // getAllUser(){
  //   const params = this.getrequestparams(
  //     this.paging.page,
  //     this.paging.size,
  //     this.searchInput
  //   );
  //   this.userService.getListAllwithpageUser(params).subscribe(
  //     (data) => {
  //       this.users = data.content;
  //       console.log(data);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }

  listPermission(){
    this.permissionService.listAll().subscribe(res=>{
      this.permissionList=res;
      console.log(res)
    })
  }

  addPermision(){
    this.permissionService.addPermission(this.permission).subscribe(data=>{
      this.toast.showSuccess();
      setTimeout(() => {
        location.reload()
      }, 1000);
    },
    error=>{
      this.toast.showWarning(error.error);
    })
  }
  
  deletePermission(id:number){
    let  cf = confirm("Xóa chức năng");
    if(cf){
      this.permissionService.deletePermission(id).subscribe(()=>{
        this.listPermission()
      })
    }}

updatePermission(id:number, permission:Permission){
    this.permissionService.updatePermission(id , permission).subscribe(()=>{
      this.toastService.success('Chỉnh sửa thành công!' );
      setTimeout(() => {
        location.reload()
      }, 800);
      },
      error=>{console.log(error)
    })
  }
}
