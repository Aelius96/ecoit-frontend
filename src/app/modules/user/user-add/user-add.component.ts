import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth/auth.service";
import {User} from "../../../core/model/user/user";
import {UserService} from "../../../services/user/user.service";
import {ActivatedRoute, Router} from "@angular/router";

import {Role} from "../../../core/model/role/role";
import {RoleService} from "../../../services/role/role.service";
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-user-add',
  templateUrl:'./user-add.component.html',
  styleUrls: ['./user-add.component.css']
})

export class UserAddComponent implements OnInit{

  user : User = new User();
  role :Role[] = [];
  id: any;
  roll: any;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = "";
  type: any;
  submitFail = false;

  constructor(private authService: AuthService,private userService: UserService, private roleService:RoleService,
              private router: Router,private route:ActivatedRoute ,
              private toastService: ToastrService, ) {
  }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if(this.id){
      this.getUserById(this.id);
    }
  }


  getUserById(id: number) {
    this.userService.getUserById(id).subscribe(data => {
      this.user = data;

      this.getRoleUpdate(this.user);
    });
  }

  getRoleUpdate(user: User){
    this.roleService.listRole().subscribe(data => {
      this.role = data;
      if(user.role != null){
        const sid = user.role.map(item => item.id);
        for (let i=0; i<sid.length; i++){
          this.role.find( e => {
            if(e.id === sid[i]) e.selected = true;
          })
        }
      }
    })
  }

  onRoleChange(event: any, role: Role){
    role.selected = event.currentTarget.checked;
    if(role.selected){
      this.user.role.push(role);
    }else{
      this.user.role.forEach(item => {
        if(item.id === role.id){
          this.user.role = this.user.role.filter(i => i !== item);
        }
      })
    }
  }

  goToUserList(){
    return this.router.navigate([`admin/user`])
  }

  updateUser(id: number){
    this.userService.updateUser(id,this.user).subscribe( data =>{
      this.goToUserList();
    })
  }

  onCheckChange(event: any, user: User){
    user.active = event.currentTarget.checked;
  }


  onSubmit() {

    if(this.id){
      this.updateUser(this.id);
    }else{
      this.authService.register(this.user).subscribe(() =>{

          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.toastService.success('Đăng kí thành công' , 'Thành công!')
          // this.errorMessage = "Đăng ký thành công!!"
        },
        err =>{
          this.toastService.error(err.error.message , 'Lỗi xảy ra!' )
          // this.errorMessage = "Đăng ký thất bại!!";
          this.isSignUpFailed = true;
        })
    }
  }

  changePassword(id:number) {
    this.userService.changePassword(id);
  }

}
