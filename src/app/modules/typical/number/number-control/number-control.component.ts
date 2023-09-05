import {Component, OnInit} from '@angular/core';
import {Router, Routes} from "@angular/router";
import {NumberService} from "../../../../services/number-typical/number.service";
import {Number} from "../number";


@Component({
  selector: 'app-number-control',
  templateUrl: './number-control.component.html',
  styleUrls: ['./number-control.component.css']
})
export class NumberControlComponent implements OnInit{
  number: Number[] =[];
  searchInput='';
  paging = {
    page: 1,
    size: 5,
    totalRecord: 0
  }

 constructor( private numberService: NumberService,
   private router:Router) {
 }
  ngOnInit(): void {
    this.getAllNumber();

 }
 getRequestParams(page:number , pageSize:number, search : string):any{
    let params:any ={};
    if (page) {
      params[`pageNo`] = page;
    }

    if (pageSize) {
      params[`pageSize`] = pageSize;
    }

    if(search){
      params[`search`] = search;
    }
    return params;
 }

getAllNumber(){
  const params = this.getRequestParams(this.paging.page, this.paging.size , this.searchInput)
  this.numberService.getListAllPage(params).subscribe(data=>{
        this.number = data.content;
        this.paging.totalRecord= data.totalElements;
  },
   error=>{
    console.error(error)
  })
}


search(): void {
  this.paging.page = 1;
  this.getAllNumber();
}
handlePageChange(event: number): void {
  console.log(event);
  this.paging.page = event;
  this.getAllNumber();
}
handlePageSizeChange(event: any): void {
  this.paging.size = event;
  this.paging.page = 1;
  console.log(event, this.paging.size)
  this.getAllNumber();
}

  addTypicalNum(){
    this.router.navigate(['/dashboard/add']);
  }
  updateTypicalNum(id : number){
   this.router.navigate([`admin/dashboard/edit/${id}`]);
}
 deleteTypicalNum(id: number){
   let cf = confirm("Dữ liệu sẽ bị xóa . Bạn có mốn tiếp tục ");
   if(cf){
      this.numberService.deleteNumber(id).subscribe(()=>{
        this.getAllNumber();
      })
   }
 }

}
