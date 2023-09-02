import {Component, OnInit} from '@angular/core';
import {Router, Routes} from "@angular/router";
import {NumberService} from "../../../../services/number-typical/number.service";
import {Number} from "../number";
import {TokenStorageService} from "../../../../services/token-storage/token-storage.service";

@Component({
  selector: 'app-number-control',
  templateUrl: './number-control.component.html',
  styleUrls: ['./number-control.component.css']
})
export class NumberControlComponent implements OnInit{
  number: Number[] =[];
  role: any;
 constructor( private numberService: NumberService,private tokenStorage:TokenStorageService,  private router:Router) {
 }
  ngOnInit(): void {
    const user = this.tokenStorage.getUser();
    this.role = user.roles;
    this.getAllNumber();

 }

getAllNumber(){
   this.numberService.getAllNumber().subscribe(data =>{
     this.number = data;
   })
}

  addTypicalNum(){
    this.router.navigate(['/dashboard/add']);
  }
  updateTypicalNum(id : number){
   this.router.navigate([`admin/dashboard/edit/${id}`]);
}
 deleteTypicalNum(id: number){
   let option = confirm("Dữ liệu sẽ bị xóa . Bạn có mốn tiếp tục ");

   if(option){
      this.numberService.deleteNumber(id).subscribe(data=>{
        this.getAllNumber();
      })
   }
 }

}
