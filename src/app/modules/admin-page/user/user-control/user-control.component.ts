import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TokenStorageService } from 'src/app/services/token-storage/token-storage.service';
import { User } from 'src/app/core/model/user/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-control',
  templateUrl: './user-control.component.html',
  styleUrls: ['./user-control.component.css'],
})
export class UserControlComponent implements OnInit {
  users: User[] = [];

  searchInput = '';
  paging = {
    page: 1,
    size: 5,
    totalRecord: 0,
  };

  constructor(private userS: UserService, private router: Router) {}

  ngOnInit(): void {
    this.getAllUser();
  }

  getrequestparams(page: number, pageSize: number, search: string) {
    let params: any = {};

    if (page) {
      params[`pageNo`] = page;
    }

    if (pageSize) {
      params[`pageSize`] = pageSize;
    }

    if (search) {
      params[`search`] = search;
    }
    return params;
  }

  getAllUser() {
    const params = this.getrequestparams(
      this.paging.page,
      this.paging.size,
      this.searchInput
    );
    this.userS.getListAllwithpageUser(params).subscribe(
      (data) => {
        this.users = data.content;
        this.paging.totalRecord = data.totalElements;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  search(): void {
    this.paging.page = 1;
    this.getAllUser();
  }

  handlepagechange(event: number): void {
    console.log(event);
    this.paging.page = event;
    this.getAllUser();
  }

  handlepagesizechange(event: any): void {
    this.paging.size = event;
    this.paging.page = 1;
    this.getAllUser();
    console.log(this.paging.size);
  }
  updateUser(id: number) {
    return this.router.navigate([`admin/user/update/${id}`]);
  }
  addRoleUser(id: number) {
    return this.router.navigate([`admin/user/role/${id}`]);
  }

  deleteUser(id: number) {
    let option = confirm('Bạn có chắc chắn xóa người dùng này?');

    if (option) {
      this.userS.deleteUser(id).subscribe(() => {
        this.getAllUser();
      });
    }
  }
}
