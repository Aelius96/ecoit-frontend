import { Component, OnInit } from '@angular/core';
import { Gallery } from 'src/app/core/model/gallery/gallery';
import { GalleryService } from 'src/app/services/gallery/gallery.service';
import {Constant} from "../../../../core/config/constant";
import { Domain } from 'src/app/core/domain/domain';

@Component({
  selector: 'app-gallery-home',
  templateUrl: './gallery-home.component.html',
  styleUrls: ['./gallery-home.component.css']
})
export class GalleryHomeComponent implements OnInit{

  gallery: Gallery[] = []
  baseURL = Constant.BASE_URL;
  galleryURL = Domain.GALLERY;
  constructor (private galleryService:GalleryService,
              ){}
  ngOnInit(): void {
    this.getListAll()
  }
  getListAll(){
    this.galleryService.getListAll().subscribe(data=>{

      return this.gallery=data;
    })
  }

}
