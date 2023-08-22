import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoryAddComponent } from '../category-add/category-add.component';
import { CategoryService } from 'src/app/services/category/category.service';
import { Category } from 'src/app/core/model/category/category';
import { Params, Router } from '@angular/router';
import { ContactComponent } from '../../contact/contact.component';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from '../../toast/toast.service';

@Component({
  selector: 'app-category-control',
  templateUrl: './category-control.component.html',
  styleUrls: ['./category-control.component.css'],

})
export class CategoryControlComponent implements OnInit {
  category: Category[]=[]
 searchInput={
  input:''
 }
 paging={
    page: 1,
    size: 5,
    totalRecord: 0
 }
  constructor( private  categoryService: CategoryService ,
               private router: Router) {}

  ngOnInit(): void {
    this.getListAll();
    this.getAllCatePageSize();
  }

  getPageSizeParams(page: number, pageSize: number,searchinput:string ): any{
    let params: any = {};

    if (page) {
      params[`pageNo`] = page-1;
    }

    if (pageSize) {
      params[`pageSize`] = pageSize;
    }

    if(searchinput){
      params[`search`] = searchinput;
    }
    return params;
  }

  getAllCatePageSize():void{
    const params = this.getPageSizeParams(this.paging.page , this.paging.size, this.searchInput.input )
    this.categoryService.ListPageSize(params).subscribe(res=>{
      this.category = res.content;
      this.paging.totalRecord = res.totalElements;
      console.log(res)

    },
    error => {
      console.log(error);
    }
    )
  }

  getListAll(){
    this.categoryService.listAllCategory().subscribe(res=>{
      this.category=res;

    }
    ,error =>{
      console.log(error)
    }
    )
  }

  Delete(id:number){
    let  cf = confirm("Xóa chuyên mục");
     if(cf){
      this.categoryService.DeleteCate(id).subscribe(()=>{
        this.getAllCatePageSize();
      })
     }
  }
  modalRef?: NgbModalRef;

  Update(id:number){
    return this.router.navigate([`/admin/category/update/${id}` ])

  }

  search():void{
    this.paging.page = 1;
    this.getAllCatePageSize()
  }

  handlepagechange(event : number):void{
    console.log(event);
    this.paging.page =event;
    this.getAllCatePageSize();
  }
  handlePageSizeChange(event: any): void {
    this.paging.size = event;
    this.paging.page = 1;
    console.log(event, this.paging.size)
    this.getAllCatePageSize();
  }

}

