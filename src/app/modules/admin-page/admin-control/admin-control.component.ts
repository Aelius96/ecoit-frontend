import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-admin-control',
  templateUrl: './admin-control.component.html',
  styleUrls: ['./admin-control.component.css']
})
export class AdminControlComponent {
  isTouch:boolean
  onchangeisTouch(isTouch:boolean){
    this.isTouch = isTouch
  }
}
