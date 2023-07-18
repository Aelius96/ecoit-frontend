import { Component } from '@angular/core';
import {NavService} from "../../../services/nav/nav.service";
import {Nav} from "../../../core/model/nav/nav";
import {TokenStorageService} from "../../../services/token-storage/token-storage.service";
import {Router} from "@angular/router";
import {PostService} from "../../../services/post/post.service";
import {BehaviorSubject, Observable} from "rxjs";
import {Post} from "../../../core/model/post/post";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  navParent: Nav[] = [];
  isToken = false;
  roles: string[] = [];
  searchInput: string;
  postList : Post[] = [];
  constructor(private navService: NavService,
              private tokenStorageService: TokenStorageService,
              private router:Router,
              private postService: PostService) { }

  ngOnInit(): void {
    this.getAllNav();
    // this.getAbout();

  }
  goToSearch():void{
    this.router.navigate(['/tim-kiem/'+this.searchInput]);
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


}
