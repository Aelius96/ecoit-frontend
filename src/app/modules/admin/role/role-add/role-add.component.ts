import { Component } from '@angular/core';
import { Module } from 'src/app/core/model/module/module';
import { Permission } from 'src/app/core/model/permission/permission';
import { Role } from 'src/app/core/model/role/role';
import { ModuleService } from 'src/app/services/module/module.service';
import { PermissionService } from 'src/app/services/permission/permission.service';
import { RoleService } from 'src/app/services/role/role.service';

@Component({
  selector: 'app-role-add',
  templateUrl: './role-add.component.html',
  styleUrls: ['./role-add.component.css']
})
export class RoleAddComponent {

  modulelist: Module[] 
  permissionlist: Permission[] = []
  module : Module = new Module()
  role: Role = new Role()
  constructor(private roleService : RoleService,
              private moduleService: ModuleService,
              private perService: PermissionService) { }
  ngOnInit() {
    this.getModuleList()
    this.getPermissionlist()
  }
  onSubmit() {
    this.roleService.addRole(this.role).subscribe((data) => {
      console.log(data)
    })
  }
  getModuleList() {
    this.moduleService.getModule().subscribe(data => {
      this.modulelist = data;
      console.log(this.modulelist)
    })
  }
  getPermissionlist() {
    this.perService.listAll().subscribe(data => {
      this.permissionlist = data
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
}
