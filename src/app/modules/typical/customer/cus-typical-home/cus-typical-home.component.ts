import { Component, OnInit } from '@angular/core';
import { CusTypical } from '../cus-typical';
import { CustomerTypicalService } from 'src/app/services/customer-typical/customer-typical.service';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage/token-storage.service';

@Component({
  selector: 'app-cus-typical-home',
  templateUrl: './cus-typical-home.component.html',
  styleUrls: ['./cus-typical-home.component.css']
})
export class CusTypicalHomeComponent implements OnInit {

  cusTypical: CusTypical[] = [];
  constructor(private cusTypicalService:CustomerTypicalService, ) {
}
  ngOnInit(): void {
   this.getAllList();
  }

getAllList():void{
  this.cusTypicalService.listAll().subscribe(data=>{
   return this.cusTypical=data;
  })
}

// nums: Number[] = [];

// constructor(private numberService: NumberService) { }

// ngOnInit() {
//   this.getAllNumber();
// }

// public getAllNumber(): void {
//   this.numberService.getAllNumber().subscribe(
//     (response:Number[]) => {
//       this.nums = response;
//       console.log(this.nums);
//     }
//   );
// }
}
