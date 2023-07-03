import { Component } from '@angular/core';
import { CusTypical } from '../../typical/customer/cus-typical';
import { CustomerTypicalService } from 'src/app/services/customer-typical/customer-typical.service';

@Component({
  selector: 'app-typical-customers',
  templateUrl: './typical-customers.component.html',
  styleUrls: ['./typical-customers.component.css']
})
export class TypicalCustomersComponent {

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

}
