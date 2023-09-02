import { Component } from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {TokenStorageService} from "../../services/token-storage/token-storage.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../core/model/user/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: any = {};

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = "";
  roles: string[] = [];

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router:Router) { }

  ngOnInit(): void {
    if(this.tokenStorage.getToken()) {

      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getToken().roles;
      this.reloadPage();
    }
  }

  onSubmit(): void{
    this.authService.login(this.form).subscribe(data =>{
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data);
        this.isLoggedIn = true;
        this.isLoginFailed = false;
        this.roles = this.tokenStorage.getUser().roles;
        this.errorMessage ="Đăng Nhập Thành Công"
        this.reloadPage();
      },
      err => {
        this.errorMessage = "Đăng Nhập Thất Bại";
        this.isLoginFailed = true;
      });
  }

  reloadPage(): void {
    this.router.navigate(['admin/dashboard']);
  }
}
