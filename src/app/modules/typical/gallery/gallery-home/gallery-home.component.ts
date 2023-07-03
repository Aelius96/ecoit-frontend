import { Component, OnInit } from '@angular/core';
import { Gallery } from 'src/app/core/model/gallery/gallery';
import { GalleryService } from 'src/app/services/gallery/gallery.service';

@Component({
  selector: 'app-gallery-home',
  templateUrl: './gallery-home.component.html',
  styleUrls: ['./gallery-home.component.css']
})
export class GalleryHomeComponent implements OnInit{

  gallery: Gallery[] = []
  constructor (private galleryService:GalleryService,
              ){}
  ngOnInit(): void {
    this.getListAll()
  }
  
// recruitList: Recruit[]=[]
// constructor(private recruitService: RecruitService){}
//   ngOnInit(): void {
//     this.getListAll()
//   }

  getListAll(){
    this.galleryService.getListAll().subscribe(data=>{

      return this.gallery=data;
    })
  }

}
