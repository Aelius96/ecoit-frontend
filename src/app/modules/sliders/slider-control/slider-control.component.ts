import { Component } from '@angular/core';
import {Slider} from "../../../core/model/slider/slider";
import {SliderService} from "../../../services/slider/slider.service";
import {TokenStorageService} from "../../../services/token-storage/token-storage.service";
import {Router} from "@angular/router";
import {Constant} from "../../../core/config/constant";
import {Domain} from "../../../core/domain/domain";
import { ToastService } from '../../toast/toast.service';

@Component({
  selector: 'app-slider-control',
  templateUrl: './slider-control.component.html',
  styleUrls: ['./slider-control.component.css']
})
export class SliderControlComponent {
  slider:boolean=true;
  sliders: Slider[] = [];

  target = {
    url: '',
    id: 1,
    name: '',
    link: '',
    active: false
  };

  slideConfig: any;
  baseURL = Constant.BASE_URL;
  sliderURL = Domain.SLIDERS;
   imageURL: any;
  constructor(private sliderService: SliderService, private router: Router,private slideSericeslide:SliderService,private toastslide:ToastService) { }

  ngOnInit(): void {
    this.getSlider();
    this.slideConfig = {
      infinite: true,
      slidesToShow: 5,
      prevArrow: false,
      nextArrow: true
    };
  }

  getSlider(){
    this.sliderService.getSliders().subscribe(data => {
      this.sliders = data
      this.choose(this.sliders[0]);
    });
  }


  choose(e: any){
    this.target.name = e?.name;
    this.target.url = e?.pathUrl;
    this.target.link = e?.url;
    this.target.id = e?.id;
    this.target.active = e?.active;

    //get image by target name
    this.imageURL = `${this.baseURL}/${this.sliderURL}/image/${this.target.name}`
  }
  chuyenslide(){
    this.slider=!this.slider
    if(this.slider){
      this.toastslide.chuyenslide()
    }
    else{
      this.toastslide.chuyenchedoIMG()
    }
  }
  updateSlider(id: number){
    return this.router.navigate(['admin/sliders/update', id]);
  }


  hideImage(id: number){
    this.sliderService.hideSlider(id).subscribe(() =>{
      this.getSlider();
    })
  }

  show(id: number){
    this.sliderService.showSlider(id).subscribe(() =>{
      this.getSlider();
    })
  }

  deleteImage(id: number){
    let option = confirm("Dữ liệu sẽ bị xóa . Bạn có mốn tiếp tục ");

    if(option){
      this.sliderService.deleteSlider(id).subscribe(()=>{
        this.getSlider();
      })
    }
  }

}
