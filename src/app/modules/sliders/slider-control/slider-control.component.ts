import { Component } from '@angular/core';
import {Slider} from "../../../core/model/slider/slider";
import {SliderService} from "../../../services/slider/slider.service";
import {TokenStorageService} from "../../../services/token-storage/token-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-slider-control',
  templateUrl: './slider-control.component.html',
  styleUrls: ['./slider-control.component.css']
})
export class SliderControlComponent {

  sliders: Slider[] = [];
  target = {
    url: '',
    id: 1,
    name: '',
    link: '',
    active: false
  };

  slideConfig: any;

  constructor(private sliderService: SliderService, private tokenStorageService: TokenStorageService, private router: Router) { }

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
    this.target.name = e.name;
    this.target.url = e.pathUrl;
    this.target.link = e.url;
    this.target.id = e.id;
    this.target.active = e.active;
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
