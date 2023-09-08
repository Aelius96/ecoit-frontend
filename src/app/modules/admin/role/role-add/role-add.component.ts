import { Component } from '@angular/core';
import { Module } from 'src/app/core/model/module/module';
import { Permission } from 'src/app/core/model/permission/permission';
import { Role } from 'src/app/core/model/role/role';
import { ModuleService } from 'src/app/services/module/module.service';
import { PermissionService } from 'src/app/services/permission/permission.service';

@Component({
  selector: 'app-role-add',
  templateUrl: './role-add.component.html',
  styleUrls: ['./role-add.component.css']
})
export class RoleAddComponent {

  modulelist: Module[] = []
  permissionlist: Permission[] = []
  moduleClass = new Module()
  isEvent = true
  role: Role = new Role()
  constructor(private moduleService: ModuleService, private perService: PermissionService) { }
  ngOnInit() {
    this.getModuleList()
    this.getPermissionlist()
  }
  onSubmit() {
  }
  getModuleList() {
    this.moduleService.getModule().subscribe(data => {
      this.modulelist = data;
    })
  }
  getPermissionlist() {
    this.perService.listAll().subscribe(data => {
      this.permissionlist = data
    })
  }
  onModulechange(event: any, module: Module) {
    // module.status=event.currentTarget.checked;
    // if(module.status){
    // this.modulelist.push(module)
    // }
    // }else{
    //   this.modulelist.forEach(item => {
    //     if(item.id === module.id){
    //       this.modulelist = this.modulelist.filter(i => i !== item);
    //     }
    //   })
    // }
    
    module.status = event.currentTarget.checked
    if(module.status) {
      this.role.moduleList.push(module)
      console.log(this.role.moduleList)
    }else {
      this.role.moduleList.forEach(item => {
        if(item.id === module.id) {
          this.role.moduleList = this.role.moduleList.filter(i => i!== item)
        }
      })
    }
    
  }
}
