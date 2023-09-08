import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  styleUrls: ['./role-control.component.css'],
})
export class RoleControlComponent {
  rolelist: Role[] = [];
  role: Role = new Role();
  roles: Role = new Role();
  users: User[] = [];
  moduleList: Module[] = [];
  module: Module = new Module();
  permissionList: Permission[] = [];
  permission: Permission = new Permission();

  perControl = new FormControl();
  roleid : number=1
  formaddrole = new FormGroup({
    name : new FormControl(),
  des : new FormControl()
  })
  

  constructor(
    private toast: ToastService,
    private toastService: ToastrService,
    private roleService: RoleService,
    private moduleService: ModuleService,
    private permissionService: PermissionService
  ) {}
  ngOnInit(): void {
   this.getRole()
    }

  getRole() {
    this.roleService.listRole().subscribe((data) => {
      this.rolelist = data;
      console.log(this.rolelist)
      this.getModulebyId(this.rolelist[0].id)
    });
  }
  getModulebyId(id: number) {
    this.roleService.getModulebyId(id).subscribe((data) => {
      this.role = data;
    });
  }
  addRole() {
    this.roles.name=this.formaddrole.controls['name'].value
    this.roleService.addRole(this.roles).subscribe(
      (data) => {
        this.toast.showSuccess();
        setTimeout(() => {
          location.reload();
        }, 1000);
      },
      (error) => {
        this.toast.showWarning(error.error);
      }
    );
  }
  updateRole(id: number, role: Role) {
    this.roleService.updateRole(id, role).subscribe(
      (data) => {
        this.toast.showSuccess();
        setTimeout(() => {
          location.reload();
        }, 1000);
      },
      (error) => {
        this.toast.showWarning(error.error);
      }
    );
  }
  deleteRole(id: number, role: Role) {
    this.roleService.deleteRole(id, role).subscribe(
      (data) => {
        this.toast.showSuccess();
        setTimeout(() => {
          location.reload();
        }, 1000);
      },
      (error) => {
        this.toast.showWarning(error.error);
      }
    );
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
  deleteModule(id : number){
    let  cf = confirm("Xóa chuyên mục");
     if(cf){
      this.moduleService.deleteModule(id).subscribe(()=>{
        this.toast.showSuccess()
        this.getModulebyId(this.roleid)
      })
     }
  }
  listPermission() {
    this.permissionService.listAll().subscribe((res) => {
      this.permissionList = res;
      console.log(res);
    });
  }

  addPermision() {
    this.permissionService.addPermission(this.permission).subscribe(
      (data) => {
        this.toast.showSuccess();
        setTimeout(() => {
          location.reload();
        }, 1000);
      },
      (error) => {
        this.toast.showWarning(error.error);
      }
    );
  }

  deletePermission(id: number) {
    let cf = confirm('Xóa chức năng');
    if (cf) {
      this.permissionService.deletePermission(id).subscribe(() => {
        this.listPermission();
      });
    }
  }

  updatePermission(id: number, permission: Permission) {
    this.permissionService.updatePermission(id, permission).subscribe(
      () => {
        this.toastService.success('Chỉnh sửa thành công!');
        setTimeout(() => {
          location.reload();
        }, 800);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  selectRole(){
    this.getModulebyId(this.roleid);
  }
}