import { Component, Input } from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {TokenStorageService} from "../../services/token-storage/token-storage.service";
import {Router} from "@angular/router";
import { Module } from 'src/app/core/model/module/module';
import { UserService } from 'src/app/services/user/user.service';
import { Role } from 'src/app/core/model/role/role';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  url: string;
  form: any = {};
  id:number=0
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = "";
  roles: string[] = [];
  role:Role = new Role()
  moduleList: Module[]=[]

  constructor(private authService: AuthService,private userService : UserService,
     private tokenStorage: TokenStorageService, private router:Router) { }

  ngOnInit(): void {
    if(this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getToken().roles;
    }
  }

  onSubmit(): void{

    this.authService.login(this.form).subscribe(data =>{
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data);
        this.isLoggedIn = true;
        this.isLoginFailed = false;
        this.roles = this.tokenStorage.getUser().roles;
        this.id = this.tokenStorage.getUser().id
        this.errorMessage ="Đăng Nhập Thành Công"
        this.getUserByid(this.id)

      },
      err => {
        this.errorMessage = "Đăng Nhập Thất Bại";
        this.isLoginFailed = true;
      });
  }
  getUserByid(id:number){
    this.userService.getUserById(id).subscribe(data=>{
      this.role=data.role
      this.moduleList = this.role.moduleList
      this.url=this.moduleList[0].url
      this.reloadPage(this.url);
    }
    )
  }
  reloadPage(url:string): void {
    this.router.navigate(['admin'+`/${url}`]);
  }
}
