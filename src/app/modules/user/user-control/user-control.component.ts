import {Component, Injectable, OnInit} from '@angular/core';
import { User } from 'src/app/core/model/user/user';
import { UserAddComponent } from '../user-add/user-add.component';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap/modal/modal-ref';
import {UserService} from "../../../services/user/user.service";
import {Router} from "@angular/router";
import {Role} from "../../../core/model/role/role";



@Component({
  selector: 'app-user-control',
  templateUrl: './user-control.component.html',
  styleUrls: ['./user-control.component.css']
})

export class UserControlComponent implements OnInit{

  users: User[]=[];


  constructor(private userService: UserService,private router:Router ) { }

  ngOnInit(): void {
  this.getAllUser();
  }


  getAllUser(){
    this.userService.getAllUser().subscribe(data =>{
      this.users = data;
    })
  }
  //
  // showUserRole(user: User){
  //   const sid = user.role?.map(item => item.id);
  //   for(let i = 0; i<sid.length;i++){
  //
  // }


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
