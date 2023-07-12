import { Component } from '@angular/core';
import {NavService} from "../../../services/nav/nav.service";
import {Nav} from "../../../core/model/nav/nav";
import {TokenStorageService} from "../../../services/token-storage/token-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  navParent: Nav[] = [];
  isToken = false;
  roles: string[] = [];
  constructor(private navService: NavService,private tokenStorageService: TokenStorageService, private router:Router) { }

  ngOnInit(): void {

    if(this.tokenStorageService.getToken()) {

      this.isToken = true;
      this.roles = this.tokenStorageService.getToken().roles;

    }
    this.getAllNav();
    // this.getAbout();
  }

  getAllNav(){
    this.navService.listAll().subscribe(data => {
      this.navParent = data;
    });
  }

  // getAbout(){
  //   this.aboutService.getInfo().subscribe(data =>{
  //     if (data != null){
  //       this.about = data;
  //     }
  //   })
  // }

  reloadPage(): void {
    this.router.navigate(['trang-chu']);
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

  search() {

  }
}
