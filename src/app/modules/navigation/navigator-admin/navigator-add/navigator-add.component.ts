import {Component, OnInit} from '@angular/core';
import {Nav} from "../../../../core/model/nav/nav";
import {NavService} from "../../../../services/nav/nav.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigator-add',
  templateUrl: './navigator-add.component.html',
  styleUrls: ['./navigator-add.component.css']
})
export class NavigatorAddComponent implements OnInit{

  id: any
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = "";
  nav: Nav = new Nav();
  isChild: any;
  navGroup: Nav[] = [];
  constructor(private navService : NavService,private router:Router) {}


  ngOnInit(): void {
  }

  addNav(){
    this.navService.addNav(this.nav).subscribe(data =>{
      this.goToNavList();
    })
  }
  goToNavList(){
    this.router.navigate(['/admin/nav']);
  }

  onSubmit(){

      this.addNav();
  }
}
