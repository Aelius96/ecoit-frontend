import { Component, OnInit } from '@angular/core';
import { Slider } from 'src/app/core/model/slider/slider';
import { SliderService } from 'src/app/services/slider/slider.service';

@Component({
  selector: 'app-slider-list',
  templateUrl: './slider-list.component.html',
  styleUrls: ['./slider-list.component.css']
})
export class SliderListComponent implements OnInit{

  slider : Slider[]=[]

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
