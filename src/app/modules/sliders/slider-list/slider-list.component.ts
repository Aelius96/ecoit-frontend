import { Component, OnInit } from '@angular/core';
import { Slider } from 'src/app/core/model/slider/slider';
import { SliderService } from 'src/app/services/slider/slider.service';
import {Constant} from "../../../core/config/constant";
import { Domain } from 'src/app/core/domain/domain';

@Component({
  selector: 'app-slider-list',
  templateUrl: './slider-list.component.html',
  styleUrls: ['./slider-list.component.css']
})
export class SliderListComponent implements OnInit{

  sliderURL = Domain.SLIDERS;
  slider : Slider[]=[]
  baseURL = Constant.BASE_URL;

  constructor(private slideSerice: SliderService){}
  ngOnInit(): void {
   this.getListAll();
  }

  getListAll(){
    this.slideSerice.getListAll().subscribe(data=>{
      return this.slider=data;
    })
  }

}
