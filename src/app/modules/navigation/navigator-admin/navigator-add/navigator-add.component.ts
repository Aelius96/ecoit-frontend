import {Component, OnInit} from '@angular/core';
import {Nav} from "../../../../core/model/nav/nav";
import {NavService} from "../../../../services/nav/nav.service";
import {ActivatedRoute, Router} from "@angular/router";
import { ToastService } from 'src/app/modules/toast/toast.service';

@Component({
  selector: 'app-navigator-add',
  templateUrl: './navigator-add.component.html',
  styleUrls: ['./navigator-add.component.css']
})
export class NavigatorAddComponent implements OnInit{

  id: any
  nav: Nav = new Nav();
  navGroup: Nav[] = [];
  constructor(private navService : NavService,private router:Router, private route:ActivatedRoute , private toast:ToastService ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if(this.id){
      this.navService.getNavById(this.id).subscribe(data =>{
        this.nav = data;
        this.listAll();
      })
    }
    this.listAll();
  }
  listAll(){
    this.navService.listAll().subscribe(data=>{
      this.navGroup = data;
    })
  }
  updateNav(id: any) {
    this.navService.updateNav(id,this.nav).subscribe(
      data=>{
        this.toast.showSuccess();
        console.log(data)
        this.goToNavList();
      },
      error =>{
        this.toast.showWarning(error.error)
        console.log(error);
      }
    )
  }
  addNav(){
    this.navService.addNav(this.nav).subscribe(data =>{
      this.toast.showSuccess();
      console.log(data)
      this.goToNavList();
    },error => {
      this.toast.showWarning(error.error)
      console.log(error);
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
