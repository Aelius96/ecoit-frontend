import {Component, ElementRef, OnInit} from '@angular/core';
import { Numberix } from 'src/app/core/model/number/numberix';
import { NumberService } from 'src/app/services/number-typical/number.service';

@Component({
  selector: 'app-number-home',
  templateUrl: './number-home.component.html',
  styleUrls: ['./number-home.component.css']
})
export class NumberHomeComponent implements OnInit{
  nums: Numberix[] = [];
  couter:number=0
  constructor(private numberService: NumberService) { }

  ngOnInit() {
    this.getAllNumber();
  }


  public getAllNumber(): void {
    this.numberService.getAllNumber().subscribe(
      (response) => {
        console.log(response);
      }
    );
  }
}
