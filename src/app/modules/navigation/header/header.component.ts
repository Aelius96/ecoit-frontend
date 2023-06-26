import { Component } from '@angular/core';
import {NavService} from "../../../services/nav/nav.service";
import {Nav} from "../../../core/model/nav/nav";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  navParent: Nav[] = [];

  constructor(private navService: NavService) { }

  ngOnInit(): void {
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
  search() {

  }
}
