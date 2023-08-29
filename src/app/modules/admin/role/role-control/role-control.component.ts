import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Module } from 'src/app/core/model/module/module';
import { Permission } from 'src/app/core/model/permission/permission';
import { Role } from 'src/app/core/model/role/role';
import { User } from 'src/app/core/model/user/user';
import { ModuleService } from 'src/app/services/module/module.service';
import { RoleService } from 'src/app/services/role/role.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-role-control',
  templateUrl: './role-control.component.html',
  styleUrls: ['./role-control.component.css']
})
export class RoleControlComponent {
  users : User = new User();
  id: any;
  roles :Role[] = [];
  permissions = []
  searchInput = '';
  modules:Module[]=[]

  constructor(private userService: UserService,private route : ActivatedRoute, private roleService:RoleService,private module:ModuleService
    ){}
  ngOnInit(): void {
    this.getAllUser()
    this.getRole()
    this.getamodule() 
  }

  getAllUser() {
    // this.userService.getListAllUser().subscribe(
    //   (data) => {
    //     this.users = data.content;
    //     console.log("user",this.users);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  }
  getRole(){
    this.roleService.listRole().subscribe(data => {
      this.roles = data;
      console.log("role",this.roles)
    });
  }

  getamodule() {
    // this.module.getModule('aside.json').subscribe(data=> {
    //   this.modules = data;
    //   console.log(this.modules)
    // });
  }
  onAsidechange(event:any,module:Module){
    // module.selected=event.currentTarget.checked;
    // if(module.selected){
    //   this.roles.modules.push(module);
    // }else{
    //   this.roles.modules.forEach(item => {
    //     if(item.id === module.id){
    //       this. = this.users.asides.filter(i => i !== item);
    //     }
    //   })
    // }
  }
  onchangePer(event:any,per:Permission){
    // per.status=event.currentTarget.checked;
    // if(per.status){
    //   // this.asidess.permission.push(per);
    // }else{
    //   this.users.aside.forEach(item => {
    //     if(item.id === per.id){
    //       this.asidess.permissison = this.users.aside.filter(i => i !== item);
    //     }
    //   })
    // }
  }
}
