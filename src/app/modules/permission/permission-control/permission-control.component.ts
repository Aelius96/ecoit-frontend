import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Permission } from 'src/app/core/model/permission/permission';
import { PermissionService } from 'src/app/services/permission/permission.service';

@Component({
  selector: 'app-permission-control',
  templateUrl: './permission-control.component.html',
  styleUrls: ['./permission-control.component.css'],
})
export class PermissionControlComponent {

  permisstionList : Permission[] = []
  constructor(private permissService: PermissionService, private router: Router) {}
  ngOnInit(){
    this.getPermiss()
  }
  getPermiss(){
    this.permissService.listAll().subscribe(data=>{
      this.permisstionList= data
    })
  }
  updatePer(id:number){
    this.router.navigate([`/admin/permission/update/${id}`])
  }
  deletePer(id:number){
    const cf = confirm('Xác nhận xóa Chức năng?')
    if(cf){
      this.permissService.deletePermission(id).subscribe(data=>{
        this.getPermiss()
      })
    }
  }
}
