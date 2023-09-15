import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Role } from 'src/app/core/model/role/role';
import { RoleService } from 'src/app/services/role/role.service';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/modules/toast/toast.service';

@Component({
  selector: 'app-role-control',
  templateUrl: './role-control.component.html',
  styleUrls: ['./role-control.component.css'],
})
export class RoleControlComponent {
  rolelist: Role[] = [];
  role: Role = new Role();
  roleId :number = 1
  constructor(
    private roleService: RoleService,
    private router : Router,
    private toast : ToastService
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
    this.roleService.getRolebyId(id).subscribe((data) => {
      this.role = data;
      this.roleId=this.role.id
    });
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

  selectRole(){
    this.getModulebyId(this.roleId);
  }
  updateRole(id:number){
    return this.router.navigate([`/admin/role/update/${id}`])
  }
  deleteRole(id:number){
    console.log(id)
    const cf = confirm('Xác nhận xóa quyền')
    if(cf){
    this.roleService.deleteRole(id).subscribe(()=>{
      this.toast.showSuccess();
      console.log("thành công")
      this.getRole()
    },
    (error)=>{
      console.log("thất bại")
      this.toast.showWarning(error.error)
    })
    this.backToRole()
  }
}
backToRole() {
  return this.router.navigate([`admin/role`]);
}
}