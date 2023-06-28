import {Component, Injectable, OnInit} from '@angular/core';
import { User } from 'src/app/core/model/user/user';
import { UserAddComponent } from '../user-add/user-add.component';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap/modal/modal-ref';
import {UserService} from "../../../services/user/user.service";
import {Router} from "@angular/router";
import { Role } from '../../../core/model/role/role';
import { TokenStorageService } from 'src/app/services/token-storage/token-storage.service';



@Component({
  selector: 'app-user-control',
  templateUrl: './user-control.component.html',
  styleUrls: ['./user-control.component.css']
})

export class UserControlComponent implements OnInit{

  users: User[]=[];
  role : string;
   // pageSizes = [3, 6, 9];

  searchInput='';
  paging={
    page:1,
    size:5,
    totalRecord:0
  }

  constructor(private userService: UserService,
    private router:Router,
    private totkenstorageService : TokenStorageService ) { }

  ngOnInit(): void {
   
  this.getAllUser();
  }


  getrequestparams(page:number , pageSize:number , search:string){
        let params: any = {};

    if (page) {
      params[`pageNo`] = page-1;
    }

    if (pageSize) {
      params[`pageSize`] = pageSize;
    }

    if(search){
      params[`search`] = search;
    }
    return params;
  }


  getAllUser(){
    const params = this.getrequestparams(this.paging.page, this.paging.size , this.searchInput)
    this.userService.getListAllwithpageUser(params).subscribe(data=>{
      this.users = data.content;
      this.paging.totalRecord = data.totalElements;
      
      console.log(data)
    }, 
    error=>{
      console.log(error);
    } 
    )
  }

search():void{
  this.paging.page =1;
  this.getAllUser();
}

handlepagechange(event:number):void{
  console.log(event);
  this.paging.page = event;
  this.getAllUser();
}

handlepagesizechange(event:any ):void{
  this.paging.size = event;
  this.paging.page =1 ;
  this.getAllUser();
  console.log(this.paging.size)
}
  updateUser(id:number){
    return this.router.navigate([`admin/user/update/${id}`])
  }

  deleteUser(id:number) {
    let option = confirm("Bạn có chắc chắn xóa người dùng này?");

    if (option) {
      this.userService.deleteUser(id).subscribe(data => {
        this.getAllUser();
      })
    }
  }
}
