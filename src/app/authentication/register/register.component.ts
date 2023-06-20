import { Component } from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  isSignUpFailed: any;
  isSuccessful: any;
  errorMessage="";
  form: any ={};
  roles : any;
  constructor(private authService:AuthService) {
  }

  onSubmit() {
    this.authService.register(this.form).subscribe(data =>{
        console.log(this.form);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.errorMessage = "Đăng ký thành công!!"
      },
      err =>{
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
        this.errorMessage = "Đăng ký thất bại!!"
      })
  }
}
