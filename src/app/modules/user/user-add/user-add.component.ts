import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth/auth.service";
import {User} from "../../../core/model/user/user";
import {UserService} from "../../../services/user/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TokenStorageService} from "../../../services/token-storage/token-storage.service";
import {Product} from "../../../core/model/product/product";
import {Customer} from "../../../core/model/customer/customer";
import {Role} from "../../../core/model/role/role";
import {RoleService} from "../../../services/role/role.service";


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
              private tokenStorageService: TokenStorageService
              ,private router: Router,private route:ActivatedRoute) {
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
  }


  goToUserList(){
    return this.router.navigate([`admin/user`])
  }

  prepareFormData(user: User, role: Role[]): FormData {
    const  formData = new FormData();
    formData.append(
      'user',
      new Blob([JSON.stringify(user)], {type: 'application/json'})
    );
    formData.append(
      'role',
      new Blob([JSON.stringify(role)], {type: 'application/json'})
    )

    return formData;
  }

  updateUser(id: number){
    let userFormData = this.prepareFormData(this.user, this.role.filter(item => item.selected));
    this.userService.updateUser(id, userFormData).subscribe(data =>{
      this.submitFail = false;
      this.goToUserList();
    })
  }

  getRole(){
    this.roleService.listRole().subscribe(data =>{
      this.role = data;
    })
  }


  onCheckChange(event: any, user: User){
    user.active = event.currentTarget.checked;
  }


  onSubmit() {

    if(this.id){
      this.updateUser(this.id);
    }else{
      this.authService.register(this.user).subscribe(data =>{

          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.errorMessage = "Đăng ký thành công!!"
          console.log(this.user);
        },
        err =>{
          this.errorMessage = "Đăng ký thất bại!!";
          this.isSignUpFailed = true;
        })
    }
  }

}
