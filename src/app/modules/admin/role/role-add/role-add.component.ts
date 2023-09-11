import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Module } from 'src/app/core/model/module/module';
import { Permission } from 'src/app/core/model/permission/permission';
import { Role } from 'src/app/core/model/role/role';
import { User } from 'src/app/core/model/user/user';
import { ToastService } from 'src/app/modules/toast/toast.service';
import { ModuleService } from 'src/app/services/module/module.service';
import { PermissionService } from 'src/app/services/permission/permission.service';
import { RoleService } from 'src/app/services/role/role.service';

@Component({
  selector: 'app-role-add',
  templateUrl: './role-add.component.html',
  styleUrls: ['./role-add.component.css']
})
export class RoleAddComponent {

  modulelist: Module[] =[]
  permissionlist: Permission[] = []
  module : Module = new Module()
  role: Role = new Role()
  perMisstion: Permission = new Permission()
  id:number
  formRole= new FormGroup({
    nameRole : new FormControl(),
    desRole : new FormControl()
  })
  formAddModule = new FormGroup({
    nameModule : new FormControl(),
    urlModule : new FormControl('')
})
formAddPermission = new FormGroup({
  namePer : new FormControl(),
  urlPer : new FormControl('')
})
  constructor(private roleService : RoleService,
              private moduleService: ModuleService,
              private permissionService : PermissionService,
              private router : Router,
              private route : ActivatedRoute,
              private toast : ToastService,
              private perService: PermissionService) { }
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if(this.id){
      this.getRoleById(this.id)
    }
      this.getModuleList()
      this.getPermissionlist()

  }
  onSubmit() {
    if(this.id){
      this.updateRole()
    }
    else{
      this.addRole()
    }
  }
  getModuleList(roles?:Role) {
    this.moduleService.getModule().subscribe(data => {
      this.modulelist = data;
     if(roles){
      if (roles.moduleList != null) {
        const sid = roles.moduleList.map((item) => item.id);
        for (let i = 0; i < sid.length; i++) {
           const sid2 = this.modulelist.find((e) => {
            if (e.id === sid[i]) e.status = true;
          });
        }
      }
     }
    })
  }
  getPermissionlist(roles?:Role) {
    this.perService.listAll().subscribe(data => {
      this.permissionlist = data
    })
  }
  getRoleById(id:number){
    this.roleService.getModulebyId(id).subscribe(data=>{
      this.role=data
      this.getModuleList(this.role)
      this.formRole.controls['nameRole'].setValue(this.role.name)
      this.formRole.controls['desRole'].setValue(this.role.description)
    })
  }
 
  onModulechange(event: any, module: Module) {
    module.status = event.currentTarget.checked
    if(module.status) {
      this.role.moduleList.push(module)
    }else {
      this.role.moduleList.forEach(item => {
        if(item.id === module.id) {
          this.role.moduleList = this.role.moduleList.filter(i => i!== item)
        }
      })
    }
  }
  onPerModuleChange(event:any,module:Module, permission : Permission) {
    const isChecked = event.target.checked;
    if(module.status) {
      if(isChecked) {
        module.permissionList.push(permission)
      }else {
        module.permissionList.forEach(per => {
          if(per.id === permission.id) {
            module.permissionList = module.permissionList.filter(i => i !== per)
          }
        })
      }
    }
  }
  addRole(){
    this.roleService.addRole(this.role).subscribe((data) => {
      console.log(data)
    })
    this.backToRole()
  }
  updateRole(){
    this.roleService.updateRole(this.role).subscribe(data=>{
      this.toast.showSuccess();
      setTimeout(() => {
        location.reload();
      }, 1000);
    },
      (error)=>{
        this.toast.showWarning(error.error)
      })
      this.backToRole()
  }

  addModule(){
    this.module.name = this.formAddModule.controls['nameModule'].value
    this.module.url = this.formAddModule.controls['urlModule'].value
    this.moduleService.addModule(this.module).subscribe(data=>{
      this.toast.showSuccess();
      setTimeout(() => {
                location.reload();
              }, 1000);
            },
      (error)=>{
        this.toast.showWarning(error.error)
      }
    );
  }
  addper(){
    this.perMisstion.name = this.formAddPermission.controls['namePer'].value
    this.perMisstion.url = this.formAddPermission.controls['urlPer'].value
    this.permissionService.addPermission(this.perMisstion).subscribe(data =>{
      this.toast.showSuccess();
      setTimeout(() => {
                location.reload();
              }, 1000);
            },
      (error)=>{
        this.toast.showWarning(error.error)
      }
    );
  }
  addUpdateModule(){
    if(this.module.id){
      
    }
  }
  // addPermision() {
  //   this.permissionService.addPermission(this.permission).subscribe(
  //     (data) => {
  //       this.toast.showSuccess();
  //       setTimeout(() => {
  //         location.reload();
  //       }, 1000);
  //     },
  //     (error) => {
  //       this.toast.showWarning(error.error);
  //     }
  //   );
  // }

  // deletePermission(id: number) {
  //   let cf = confirm('Xóa chức năng');
  //   if (cf) {
  //     this.permissionService.deletePermission(id).subscribe(() => {
  //       this.listPermission();
  //     });
  //   }
  // }

  // updatePermission(id: number, permission: Permission) {
  //   this.permissionService.updatePermission(id, permission).subscribe(
  //     () => {
  //       this.toastService.success('Chỉnh sửa thành công!');
  //       setTimeout(() => {
  //         location.reload();
  //       }, 800);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }
  // listPermission() {
  //   this.permissionService.listAll().subscribe((res) => {
  //     this.permissionList = res;
  //     console.log(res);
  //   });
  // }

  backToRole() {
    return this.router.navigate([`admin/role`]);
  }
}
