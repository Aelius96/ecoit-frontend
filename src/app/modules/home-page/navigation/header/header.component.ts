import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { About } from 'src/app/core/model/about/about';
import { DomSanitizer } from '@angular/platform-browser';
import { AboutUsService } from 'src/app/services/about-us/about-us.service';
import { Nav } from 'src/app/core/model/nav/nav';
import { Post } from 'src/app/core/model/post/post';
import { NavService } from 'src/app/services/nav/nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  navParent: Nav[] = [];
  isToken = false;
  roles: string[] = [];
  searchInput: string = '';
  postList : Post[] = [];
  about : About = new About();
  email:any;
  phone:any;

  constructor(private navService: NavService,
              private router:Router,
              private about_usService: AboutUsService ,
               private sanitizer: DomSanitizer) {

    //load lai page khi path parameter thay doi
    // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.getListAllInformation()
    this.getAllNav();
    // this.getAbout();

  }
  goToSearch(input : string):void{
    const queryParams  = {input : input}
    this.router.navigate(['/tim-kiem'],{queryParams});
    console.log(this.searchInput);
  }
  getAllNav(){
    this.navService.listAll().subscribe(data => {
      this.navParent = data;
    });
  }

   getListAllInformation(){
     this.about_usService.getAllInformation().subscribe(res=>{
        this.about= res;
        this.email = this.sanitizer.bypassSecurityTrustHtml(this.about.email);
        this.phone = this.sanitizer.bypassSecurityTrustHtml(this.about.phone)
     })
    }

  reloadPage(): void {
    this.router.navigate(['trang-chu']);
  }

  // logout() {
  //   this.tokenStorageService.signOut();
  //   window.location.reload();
  // }

}
