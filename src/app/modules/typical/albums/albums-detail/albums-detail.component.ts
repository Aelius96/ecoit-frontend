import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Image } from 'src/app/core/model/image/image';
import { File } from 'src/app/services/file/file';
import { FileService } from 'src/app/services/file/file.service';
import * as fileSaver from 'file-saver';
import { GalleryService } from 'src/app/services/gallery/gallery.service';
import { TokenStorageService } from 'src/app/services/token-storage/token-storage.service';
import {Constant} from "../../../../core/config/constant";
import {Domain} from "../../../../core/domain/domain";

@Component({
  selector: 'app-albums-detail',
  templateUrl: './albums-detail.component.html',
  styleUrls: ['./albums-detail.component.css']
})
export class AlbumsDetailComponent implements OnInit {

  baseURL = Constant.BASE_URL;
  image: Image[]=[];
  role:string;
  addSuccess = false;
  url:any;
  totalPages: number;

  target= {
    url: '',
    id: 1,
    name: '',
    target: '',
    action: ''
  }

  paging = {
    page: 1,
    size: 16,
    totalRecord: 0
  }
  fileURL = Domain.ALBUMS;

  constructor( private imageService: FileService  ,
                  private router: Router ,
                  private galleryService: GalleryService){}


  ngOnInit(): void {
    this.getListWithPage()
   }

  getRequestParams(page:number , pageSize:number ):any{
    let params:any ={};
    if(page){
      params[`pageNo`] = page;
    }

    if (pageSize) {
      params[`pageSize`] = pageSize;
    }
    return params;
  }

  getListWithPage():void{
    const params = this.getRequestParams(this.paging.page , this.paging.size);
    this.imageService.getlistallwithpage(params).subscribe(data=>{
      this.image = data.content;
      this.paging.totalRecord = data.totalElements;
      console.log(data)
    },
    error=>{console.log(error);})
  }

  handlepagechange(event : number):void{
    this.paging.page =event;
    this.getListWithPage();
  }
  handlePageSizeChange(event: any): void {
    this.paging.size = event;
    this.paging.page = 1;
    console.log(event)
    this.getListWithPage();
  }

  deleteFile(id: number){

    let option = confirm("Dữ liệu sẽ bị xóa. Bạn có mốn tiếp tục ");
    if(option){
      this.imageService.getFileById(id).subscribe(dt1=>{
        this.imageService.deleteFile(dt1).subscribe(()=>{
          this.getListWithPage();
        })
      })
    }
  }
  pick(e:any){
    this.target.url = e.target.src;
    this.target.id= e.target.id;
    this.target.name=e.target.alt;
  }
  downloadimg(e:any){
    this.imageService.getFileById(e).subscribe(data =>{
      this.imageService.downloadFile(data).subscribe((data2:any) =>{
        let blob = new Blob([data2.body] , {type:data2.body.type})
        fileSaver.saveAs(blob , data.name );
      })
    })
  }



  listAllimgtogallery(){
    const params = this.getRequestParams(this.paging.page , this.paging.size)
    this.imageService.getlistallwithpage(params).subscribe(data =>{
      this.image = data;
      this.target.url = this.image[0]?.pathUrl;
      this.target.name = this.image[0]?.name;
      this.target.target = this.image[0]?.target;
    })
  }

  gotogallerytList(){
    this.router.navigate(['/admin/tImage'])
  }
  addimagetogallery(id:any){
    this.galleryService.addimageById(id).subscribe( ()=>{
      this.addSuccess = true;
       this.gotogallerytList()
      this.listAllimgtogallery()
      console.log(this.addSuccess)
      alert('Đã thêm ảnh ')

    } , error=>{
      this.addSuccess = false;
      console.log(error)
    } )

  }




}
