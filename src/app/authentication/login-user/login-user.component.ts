import { Component } from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {TokenStorageService} from "../../services/token-storage/token-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent {
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
        this.reloadPage();
      },
      err => {
        this.errorMessage = "Đăng Nhập Thất Bại";
        this.isLoginFailed = true;
      });
  }

  reloadPage(): void {
    this.router.navigate(['trang-chu']);
  }


}
