import {Component, OnInit} from '@angular/core';
import {Recruit} from "../../../core/model/recruit/recruit";
import {Router} from "@angular/router";
import {RecruitService} from "../../../services/recruit/recruit.service";
import {TokenStorageService} from "../../../services/token-storage/token-storage.service";

@Component({
  selector: 'app-recruit-control',
  templateUrl: './recruit-control.component.html',
  styleUrls: ['./recruit-control.component.css']
})
export class RecruitControlComponent implements OnInit{

  recruitNewsList : Recruit [] = [];
  role: string;

  currentIndex = -1;
  // pageSizes = [3, 6, 9];
  totalPages: number;
  searchInput= '';

  paging = {
    page: 1,
    size: 5,
    totalRecord: 0
  }
  constructor(private router: Router, 
              private recruitService:RecruitService,
              private tokenStorageService:TokenStorageService
  ) {}

  ngOnInit(): void {
      const user = this.tokenStorageService.getUser();
      this.role =user.roles;

    this.getListAllWithPage();
  }


  getRequestParams(page: number, pageSize: number,search:string): any {
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

  getListAllWithPage(): void {
    const params = this.getRequestParams(this.paging.page, this.paging.size, this.searchInput);

    this.recruitService.listAllWithPage(params)
      .subscribe(
        response => {
          this.recruitNewsList = response.content;
          this.paging.totalRecord = response.totalElements;
          this.totalPages = response.totalPages;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }
  searchTitleAndDescription(): void {
    this.paging.page = 1;
    this.getListAllWithPage();
  }
  handlePageChange(event: number): void {
    console.log(event);
    this.paging.page = event;
    this.getListAllWithPage();
  }

  handlePageSizeChange(event: any): void {
    this.paging.size = event;
    this.paging.page = 1;
    console.log(event, this.paging.size)
    this.getListAllWithPage();
  }


  listAll(){
    this.recruitService.listAll().subscribe(data=>{
      return this.recruitNewsList = data;
    })
  }

  updateRecruitNews(id: Number){
    return this.router.navigate([`/admin/recruit/update/${id}`])
  }

  deleteRecruitNews(id: number){
    let option = confirm("Dữ liệu sẽ bị xóa . Bạn có mốn tiếp tục ");

    if(option){
      this.recruitService.deleteRecruitNews(id).subscribe(data=>{
        this.getListAllWithPage();
      })
    }
  }
}
