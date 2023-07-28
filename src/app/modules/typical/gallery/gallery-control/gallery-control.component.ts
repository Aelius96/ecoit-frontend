import { Component, OnInit } from '@angular/core';
import { Gallery } from 'src/app/core/model/gallery/gallery';
import { Router } from '@angular/router';
import { GalleryService } from 'src/app/services/gallery/gallery.service';
import { Observable } from 'rxjs';
import {Constant} from "../../../../core/config/constant";
import {Domain} from "../../../../core/domain/domain";

@Component({
  selector: 'app-gallery-control',
  templateUrl: './gallery-control.component.html',
  styleUrls: ['./gallery-control.component.css']
})
export class GalleryControlComponent implements OnInit{

  galleryList : Gallery[]=[];

  target = {
    url: '',
    id: 0,
    name: '',
    active:'',
    caption: '',
    description: ''
  };

  paging = {
    page: 1,
    size: 16,
    totalRecord: 0
  }
  baseURL = Constant.BASE_URL;
 constructor(private router : Router,
              private galleryService: GalleryService,
              ){}
  ngOnInit(): void {
   this.getListAllWithpage()
  }

getRequestParam(page:number , pageSize: number ):any{
  let params:any={};
  if(page ){
    params[`pageNo`] = page-1;
  }

  if (pageSize) {
    params[`pageSize`] = pageSize;
  }
  return params;
}

getListAllWithpage():void{
   const params = this.getRequestParam(this.paging.page, this.paging.size)
   this.galleryService.getAllListChangePage(params).subscribe(res=>{
     this.galleryList = res.content;
     this.paging.totalRecord = res.totalElements;
     console.log(res)
   }, error =>{console.log(error);
   } )
}

getListAll():void{
  this.galleryService.getListAll().subscribe(res=>{
    this.galleryList= res;
  })
}


handlepagechange(event : number):void{
  console.log(event);
  this.paging.page =event;
  this.getListAllWithpage();
}
handlePageSizeChange(event: any): void {
  this.paging.size = event;
  this.paging.page = 1;
  console.log(event, this.paging.size)
  this.getListAllWithpage();
}

pick(e:any){
  this.target.url = this.baseURL+e.image.pathUrl;
  this.target.name = e.image.name;
  this.target.id= e.id;
  this.target.caption=e.caption;
  // this.target.id = e.id;
  this.target.active = e.active;
  this.target.description = e.description;

}

updategallery(id:number){
  return this.router.navigate([`admin/tImage/update/${id}` ])
}

deleteimg(id:number){
  let option = confirm("Ảnh sẽ bị xóa!")
  if(option){
    this.galleryService.delete(id).subscribe(()=>{
      this.getListAllWithpage();
    })
  }
}

  tImageURL = Domain.GALLERY;


hideimg(id: number){
  this.galleryService.hide(id).subscribe(() =>{
    this.getListAllWithpage();
  })
}

showimg(id: number){
  this.galleryService.show(id).subscribe(() =>{
    this.getListAllWithpage();
  })
}

}
