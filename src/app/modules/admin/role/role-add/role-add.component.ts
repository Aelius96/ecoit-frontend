import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Module } from 'src/app/core/model/module/module';
import { Permission } from 'src/app/core/model/permission/permission';
import { Role } from 'src/app/core/model/role/role';
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

  modulelistAll: Module[] =[]
  permissionlist: Permission[] = []
  module : Module = new Module()
  role: Role = new Role()
  permisstion: Permission = new Permission()
  id:number
  formRole= new FormGroup({
    nameRole : new FormControl(),
    desRole : new FormControl()
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
    this.getModuleList(this.role)
  }
  onSubmit() {
    this.role.name = this.formRole.controls['nameRole'].value
    this.role.description = this.formRole.controls['desRole'].value
    if(this.id){
      this.updateRole()
    }
    else{
      this.addRole()
    }
  }
  getModuleList(roles?:Role) {
    this.moduleService.getModule().subscribe(data => {
      this.modulelistAll = data;
     if(roles){
      if (roles.moduleList != null) {
        // const sid = roles.moduleList.map((item) => item);
        // for (let i = 0; i < sid.length; i++) {
        //    this.modulelistAll.find((e) => {
        //     if (e.id === sid[i].id) e.status = true;
        //   }

        //   );
        // }
        for(let i = 0;i < this.role.moduleList.length;i++) {
          this.modulelistAll.find(mod => {
            if(mod.id === this.role.moduleList[i].id) {
              mod.status = true
            }
            for(let j = 0;j < this.role.moduleList[i].permissionList.length;j++) {
              this.modulelistAll[i].permissionList.find(per => {
                if(per.id === this.role.moduleList[i].permissionList[j].id) per.status = true
              })
            }
          })
        }
      }
     }
    })
  }
  getPermissionlist() {
    this.perService.listAll().subscribe(data => {
      this.permissionlist = data
    })
  }
  getRoleById(id:number){
    this.roleService.getRolebyId(id).subscribe(data=>{
      this.role=data
      this.getModuleList(this.role)
      this.formRole.controls['nameRole'].setValue(this.role.name)
      this.formRole.controls['desRole'].setValue(this.role.description)
    })
  }
 
  onModulechange(event: any, module: Module) {
    module.status = event.currentTarget.checked
    let moduleNew = new Module()
    if(module.status) {
      moduleNew.id = module.id
      moduleNew.status = module.status
      this.role.moduleList.push(moduleNew)
    }else {
      this.role.moduleList.forEach(item => {
        if(item.id === module.id) {
          this.role.moduleList = this.role.moduleList.filter(i => i!== item)
        }
      })
    }
    console.log(this.role)
  }
  onPerModuleChange(event:any,module:Module, permission : Permission) {
    const isChecked = event.target.checked;
    if(module.status) {
      if(isChecked) {
        this.role.moduleList.forEach(mod => {
          if(mod.id === module.id) mod.permissionList.push(permission)
        })
      }else {
        this.role.moduleList.forEach(mod =>{
          mod.permissionList.forEach(per => {
            if(per.id === permission.id) {
              mod.permissionList = mod.permissionList.filter(i => i !== per)
            }
          })
        })

      }
    }
    console.log(this.role)
  }
  addRole(){
    this.role.name = this.formRole.controls['nameRole'].value
    this.role.description = this.formRole.controls['desRole'].value
    this.roleService.addRole(this.role).subscribe((data) => {
      console.log(data)
      this.backToRole()
    })
    
  }
  updateRole(){
    this.roleService.updateRole(this.role).subscribe(data=>{
      this.toast.showSuccess();
      this.backToRole()
    },
      (error)=>{
        this.toast.showWarning(error.error)
      })
      
  }

  backToRole() {
    return this.router.navigate([`admin/role`]);
  }
}
