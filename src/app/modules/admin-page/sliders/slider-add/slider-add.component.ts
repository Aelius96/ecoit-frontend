import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { Constant } from 'src/app/core/config/constant';
import { Domain } from 'src/app/core/domain/domain';
import { Slider } from 'src/app/core/model/slider/slider';
import { SliderService } from 'src/app/services/slider/slider.service';
import { ToastService } from 'src/app/services/toast/toast.service';


@Component({
  selector: 'app-slider-add',
  templateUrl: './slider-add.component.html',
  styleUrls: ['./slider-add.component.css']
})
export class SliderAddComponent implements OnInit {
  baseURL = Constant.BASE_URL;
  disabled=false;
  id: any;
  slider: Slider = new Slider();
  url: any;
  fileToUpload:string [] = [];
  action = "";
  imageURL: any;
  sliderURL = Domain.SLIDERS;

  constructor(private sliderService: SliderService,
              private router: Router,
              private route: ActivatedRoute ,
              private toast:ToastService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if(this.id){
      this.getById(this.id);
      this.action = "Chỉnh sửa";
    }else{
      this.action = "Thêm mới";
    }
  }

  getById(id: any) {
    this.sliderService.getById(id).subscribe(data => {
      this.slider = data;
      console.log(data)
      this.url = this.slider.pathUrl;
      this.imageURL = `${this.baseURL}/${this.sliderURL}/image/${this.slider.name}`
    });
  }

  createNew(){
    const formData = new FormData();
    formData.append(
      'slide',
      this.fileToUpload[0]
    )
    this.sliderService.addNew(formData).subscribe(data =>{
      this.toast.showSuccess();
      console.log(data)
      this.goToSliderList();
    },
      error=>{
        this.toast.showWarning(error.error)
        console.log(error)
      }
    );
  }

  updateSlider(id: number){
    const productFormData = this.prepareFormData(this.slider);
    this.sliderService.update(id, productFormData).subscribe(data =>{
      this.toast.showSuccess();
      console.log(data)
      this.goToSliderList();
    },
    error=>{
      this.toast.showWarning(error.error)
        console.log(error)
    });
  }

  prepareFormData(sliders: Slider): FormData {
    const  formData = new FormData();
    formData.append(
      'sliders',
      new Blob([JSON.stringify(sliders)], {type: 'application/json'})
    );
    for (let i = 0; i < this.fileToUpload.length; i++){
      formData.append(
        'slide',
        this.fileToUpload[i]
      )
    }


    return formData;
  }

  goToSliderList(){
    this.router.navigate(['/admin/sliders']);
  }

  onSubmit(){
    if(this.id){
      this.updateSlider(this.id);
    }else{
      this.createNew();
    }
  }



  imageChange(e: any){
    const files = e.target.files;
    if (files.length === 0) return;
    const reader = new FileReader();
    this.fileToUpload=files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) =>{
      this.imageURL= reader.result;
    }
    this.disabled=true;
  }
}
