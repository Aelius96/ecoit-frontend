import { Component, OnInit } from '@angular/core';
import { Recruit } from '../../../core/model/recruit/recruit';
import { RecruitService } from 'src/app/services/recruit/recruit.service';
import { Params } from '@angular/router';

@Component({
  selector: 'app-recruit-list',
  templateUrl: './recruit-list.component.html',
  styleUrls: ['./recruit-list.component.css']
})
export class RecruitListComponent implements OnInit {
 
  recruitList: Recruit[]=[];
  page = 1;
 count = 0;
 pageSize= 9;
 searchInput = '';
 private totalPages: number;
 paging={page:1, size:9, totalRecord:0}

  constructor(private recruitService:RecruitService) { }


  ngOnInit(): void {
    this.getAllListwithPage()
  }
  getRequestParam(page:number):any{
    let params :any={};
    if (page){
      params[`pageNo`]= page-1;
    }
  }

  getAllListwithPage():void{
    const param = this.getRequestParam(this.paging.page);
      this.recruitService.listAllWithPageHome(param).subscribe(response=>{
          this.recruitList=response.content;
          this.paging.totalRecord=response.totalElements;

          console.log(response)
      },
      error=>{
        console.log(error)
      } )
   }

   handlePagechange(event:number){
    this.page= event;
    this.getAllListwithPage();
   }


} 

