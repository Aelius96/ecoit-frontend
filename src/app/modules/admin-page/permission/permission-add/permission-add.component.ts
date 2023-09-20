import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PermissionService } from 'src/app/services/permission/permission.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Permission } from 'src/app/core/model/permission/permission';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-permission-add',
  templateUrl: './permission-add.component.html',
  styleUrls: ['./permission-add.component.css'],
})
export class PermissionAddComponent {
  formPer = new FormGroup({
    name: new FormControl('',Validators.required),
    url: new FormControl('',Validators.required),
  });
  id:number;
  permission : Permission = new Permission()
  permissionById : Permission = new Permission()
  constructor(
    private permissService: PermissionService,
    private toast: ToastService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.id= this.route.snapshot.params['id']
    if(this.id){
      this.getPerbyId(this.id)
    }
  }
  onSubmit() {
    this.permission.name=this.formPer.controls['name'].value
    this.permission.url = this.formPer.controls['url'].value
    this.permission.id=this.id
    if(this.id){
      this.updatePer(this.permission)
    }
    else{
      this.addPer(this.permission)
    }
  }
  addPer(permission:Permission){
    this.permissService.addPermission(permission).subscribe(data=>{
      this.toast.showSuccess();
      this.goToPerList()
    },
    (error)=>{
      this.toast.showWarning(error.error)
    })
  }
  updatePer(permission: Permission){
    this.permissService.updatePermission(permission).subscribe((data)=>{
      console.log(data)
      this.toast.showSuccess();
      this.goToPerList()
    },
    (error)=>{
      console.log(error.error)
      // this.toast.showWarning(error.error)
    })
  }
  getPerbyId(id: number){
    this.permissService.getPerById(id).subscribe(data=>{
      this.permissionById=data
      this.formPer.setValue({
        name : this.permissionById.name,
        url : this.permissionById.url
      })
    })
  }
  goToPerList() {
    this.router.navigate([`/admin/permission`]);
  }
}
