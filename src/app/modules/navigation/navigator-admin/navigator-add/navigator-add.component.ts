import {Component, OnInit} from '@angular/core';
import {Nav} from "../../../../core/model/nav/nav";
import {NavService} from "../../../../services/nav/nav.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";

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
  isChild= false;
  navGroup: Nav[] = [];
  constructor(private navService : NavService,private router:Router, private route:ActivatedRoute) {}


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if(this.id){
      this.navService.getNavById(this.id).subscribe(data =>{
        this.nav = data;
        this.listAll();
      })
    }
  }
  listAll(){
    this.navService.listAll().subscribe(data=>{
      this.navGroup = data;
    })
  }
  updateNav(id: any) {
    this.navService.updateNav(id,this.nav).subscribe(
      data=>{
        this.goToNavList();
      },
      (error:HttpErrorResponse) =>{
        alert(error.message);
      }
    )
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
    if(this.id){
      this.updateNav(this.id);
    }else{
      this.addNav();
    }


  }
}
