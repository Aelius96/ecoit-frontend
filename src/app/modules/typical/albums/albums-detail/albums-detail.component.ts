import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Image } from 'src/app/core/model/image/image';
import { File } from 'src/app/services/file/file';
import { FileService } from 'src/app/services/file/file.service';
import * as fileSaver from 'file-saver';
import { mergeMap } from 'rxjs';



@Component({
  selector: 'app-albums-detail',
  templateUrl: './albums-detail.component.html',
  styleUrls: ['./albums-detail.component.css']
})
export class AlbumsDetailComponent implements OnInit {


  image: Image[]=[];
  role:string;

  url:any;
  totalPages: number;
  public pageSizes = [16, 32, 44];

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

  ngOnInit(): void {

   this.getListWithPage()
  }

  constructor( private imageService: FileService   ){}


  getRequestParams(page:number , pageSize:any ):any{
    let params:any ={};
    if(page){
      params[`pageNo`] = page-1
    }

    if (pageSize) {
      params[`pageSize`] = pageSize;
    }

  }
  getListWithPage():void{
    const params = this.getRequestParams(this.paging.page , this.paging.size)
    this.imageService.getlistallwithpage(params).subscribe(data=>{
      this.image = data.content;
      this.paging.totalRecord = data.totalElements;

    }, error=>{console.log(error);}
    )
  }
  handlepagechange(event : number):void{
    console.log(event);
    this.paging.page =event;
    this.getListWithPage();
  }
  handlePageSizeChange(event: any): void {
    this.paging.size = event;
    this.paging.page = 1;
    console.log(event, this.paging.size)
    this.getListWithPage();
  }
  deleteFile(e: any){
    let option = confirm("Dữ liệu sẽ bị xóa. Bạn có mốn tiếp tục ");

    if(option){
      this.imageService.getFileById(e).subscribe(dt1=>{
        this.imageService.deleteFile(dt1).subscribe(()=>{
          this.getListWithPage()
        }
        )
      })
    }
  }

  downloadimg(e:any){
    this.imageService.getFileById(e).subscribe(data =>{
      this.imageService.downloadFile(data).subscribe((data2:any) =>{
        let blob = new Blob([data2.body] , {type:data2.body.type})
        fileSaver.saveAs(blob , data.name );
      })
    })
   
  }

  pick(e:any){
    this.target.url = e.target.src;
    this.target.id= e.target.id;
    this.target.name=e.target.alt;

  }

}
