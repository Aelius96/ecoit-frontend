import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Gallery } from '../../../../core/model/gallery/gallery';
import { GalleryService } from 'src/app/services/gallery/gallery.service';

@Component({
  selector: 'app-gallery-add',
  templateUrl: './gallery-add.component.html',
  styleUrls: ['./gallery-add.component.css']
})
export class GalleryAddComponent implements OnInit{

  gallery : Gallery = new Gallery();
  fileToUpload:string [] = [];
  url: any;
  id: any;

constructor(private router: Router ,
          private route: ActivatedRoute ,
          private galleryService: GalleryService){}

ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if(this.id){
      this.galleryService.getfindbyId(this.id).subscribe(data=>{
        this.gallery = data;
        this.url = this.gallery.image.pathUrl;
      })
    }
  }

  onSubmit(){
    if(this.id){
      this.update(this.id);
    }else{
      this.addGallery();
    }
  }
  
addGallery(){
  const igFormdata = this.prepareFormdata(this.gallery);
  this.galleryService.addgallery(igFormdata).subscribe(()=>{
    this.gotoGalleryControl();
  }, 
  er=>console.log(er))
}

gotoGalleryControl(){
  this.router.navigate(['/admin/tImage'])
}

update(id:any){
   const galleryDataForm = this.prepareFormdata(this.gallery);
    this.galleryService.update(id, galleryDataForm).subscribe(()=>{
      this.gotoGalleryControl()
    })
}

prepareFormdata(gallery: Gallery):FormData{
  const formData = new FormData();
  formData.append('typicalImage',
    new Blob([JSON.stringify(gallery)], {type:'application/json'})
  );
  for (let i=0 ; i< this.fileToUpload.length; i++){
    formData.append(
      'imageFile',
      this.fileToUpload[i]
    )
  }
return formData
}



imageChange(e: any){
  const files = e.target.files;
  if (files.length === 0) return;

  const reader = new FileReader();
  this.fileToUpload=files;
  reader.readAsDataURL(files[0]);
  reader.onload = (_event) =>{
    this.url= reader.result;
  }
}

}
