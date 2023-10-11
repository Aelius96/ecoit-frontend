import { Injectable } from '@angular/core';
import {TokenStorageService} from "../services/token-storage/token-storage.service";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class AuthenticateService implements CanActivate{
  username: string;
  roles :string[]=[];
  constructor(private tokenStorageService: TokenStorageService,
              private router: Router) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const isLogIn = !!this.tokenStorageService.getToken();
    if(isLogIn){
      const user = this.tokenStorageService.getUser();
      this.username = user.username;
      this.roles = user.roles;
      if(this.roles.includes("USER")){
        this.router.navigate(['admin/login']);
      }
      return true;
    }else {
      this.router.navigate(['admin/login']);
    }
  }
}