import { Component, OnInit } from '@angular/core';
import { Nav } from '../../../../core/model/nav/nav';
import { NavService } from '../../../../services/nav/nav.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from 'src/app/modules/toast/toast.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-navigator-add',
  templateUrl: './navigator-add.component.html',
  styleUrls: ['./navigator-add.component.css'],
})
export class NavigatorAddComponent implements OnInit {
  id: any;
  nav: Nav = new Nav();
  navGroup: Nav[] = [];
  formNav = new FormGroup({
    name: new FormControl(''),
    url: new FormControl(''),
    parentId:new FormControl()
  });
  isName=true
  isUrl = true
  inputs=''
  parentId:number

  constructor(
    private navService: NavService,
    private router: Router,
    private route: ActivatedRoute,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.navService.getNavById(this.id).subscribe((data) => {
        this.nav = data;
        this.listAll();
        this.formNav.controls['name'].setValue(this.nav.name)
        this.formNav.controls['url'].setValue(this.nav.url)
        this.formNav.controls['parentId'].setValue(this.nav.parentId)
      });
    }
    this.listAll();
  }
  listAll() {
    this.navService.listAll().subscribe((data) => {
      this.navGroup = data;
    });
  }
  updateNav(id: any) {
    this.navService.updateNav(id, this.nav).subscribe(
      (data) => {
        this.toast.showSuccess();
        console.log(data);
        this.goToNavList();
      },
      (error) => {
        this.ktradieukien()
        this.toast.showWarning(error.error,this.inputs);
        console.log(error);
      }
    );
  }
  addNav() {
    this.navService.addNav(this.nav).subscribe(
      (data) => {
        this.toast.showSuccess();
        console.log(data);
        this.goToNavList();
      },
      (error) => {
        this.ktradieukien()
        this.toast.showWarning(error.error,this.inputs);
        console.log(error);
      }
    );
  }
  goToNavList() {
    this.router.navigate(['/admin-control/nav']);
  }
  onSubmit() {
    this.nav.name=this.formNav.controls['name'].value
    this.nav.url = this.formNav.controls['url'].value
    this.nav.parentId = this.formNav.controls['parentId'].value
    if (this.id) {
      this.updateNav(this.id);
    } else {
      this.addNav();
    }
  }
  ktradieukien(){
    if(this.formNav.controls['name'].value===""&&
    this.formNav.controls['url'].value==="")
    {
      this.isName=false
      this.isUrl=false
      this.inputs="name"
    }
    else if(this.formNav.controls['name'].value===""){
      this.isName=false
      this.inputs="name"
    }
    else{
      this.isUrl=false
      this.inputs="url"
    }
  }
  changeName(){
    this.isName=true
  }
  changeUrl(){
    this.isUrl=true
  }
}
