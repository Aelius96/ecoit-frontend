import {Component, ElementRef, OnInit} from '@angular/core';
import {NumberService} from "../../../../services/number-typical/number.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Number} from "../number";

@Component({
  selector: 'app-number-home',
  templateUrl: './number-home.component.html',
  styleUrls: ['./number-home.component.css']
})
export class NumberHomeComponent implements OnInit{
  nums: Number[] = [];

  constructor(private numberService: NumberService) { }

  ngOnInit() {
    this.getAllNumber();
  }

  public getAllNumber(): void {
    this.numberService.getAllNumber().subscribe(
      (response:Number[]) => {
        this.nums = response;
        console.log(this.nums);
      }
    );
  }
}
