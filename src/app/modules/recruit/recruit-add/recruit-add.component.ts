import {Component, OnInit} from '@angular/core';
import {Recruit} from "../../../core/model/recuit/recuit";
import {ActivatedRoute, Router} from "@angular/router";
import {RecruitService} from "../../../services/recruit/recruit.service";
import {Constant} from "../../../core/config/constant";

@Component({
  selector: 'app-recruit-add',
  templateUrl: './recruit-add.component.html',
  styleUrls: ['./recruit-add.component.css']
})
export class RecruitAddComponent implements OnInit{

  recruit: Recruit = new Recruit()
  fileToUpload:string [] = [];
  id: any;
  url: any;
  ckeConfig: any;
  baseUrl = `${Constant.BASE_URL}`;
  message ='';

  constructor(private router:Router ,
              private route:ActivatedRoute,
              private recruitService:RecruitService
            ) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if(this.id){
      this.recruitService.getRecruitId(this.id).subscribe(data=>{
        this.recruit = data;
        this.url = this.recruit.thumb.pathUrl;
      })
    }
    this.ckeConfig = {
      extraPlugins: 'uploadimage, justify, colorbutton, colordialog, iframe, font',
      uploadUrl: 'https://ckeditor.com/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json',
      height: 330,
      filebrowserUploadUrl:'https://ckeditor.com/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Files',
      filebrowserImageUploadUrl:'https://ckeditor.com/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Images',

    };
  }
  onSubmit(){
    if(this.id){
      this.addDataForm(this.id);
    }else{
      this.saveRecruit();
    }
  }

  saveRecruit(){
    const recruitFormData = this.prepareFormData(this.recruit);
    this.recruitService.addRecruitNews(recruitFormData).subscribe(data => {
        this.gotoRecruitList();
      },
      error => console.log(error)
    )
  }

  addDataForm(id:any){
    const recruitFormData =this.prepareFormData(this.recruit);
    this.recruitService.updateRecruitNews(id, recruitFormData).subscribe(data => {
      this.gotoRecruitList();
    });
  }

  gotoRecruitList(){
    this.router.navigate(['/admin/recruit'])
  }

  prepareFormData(recruit : Recruit): FormData{
    const formData = new FormData();
    formData.append('recruit',
      new Blob([JSON.stringify(recruit)], {type:'application/json'})
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
