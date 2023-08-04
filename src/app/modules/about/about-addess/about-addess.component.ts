import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from '../../../core/model/address/address';
import { AddressService } from 'src/app/services/address/address.service';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-about-addess',
  templateUrl: './about-addess.component.html',
  styleUrls: ['./about-addess.component.css']
})
export class AboutAddessComponent {

  address : Address = new Address();
  constructor( private router: Router ,
                private addressService : AddressService) { }

  rollbackToList(){
    this.router.navigate(['/admin/about']);
  }

  backAbout(){
    window.history.back()
  }

  AddAddress():void{
   this.addressService.createAddress(this.address).subscribe(()=>{
    alert("Thêm thành công!");
    this.backAbout()
   })
  }
  updateAdress(id: number){
    let option = confirm("Dữ liệu sẽ bị xóa. Bạn có mốn tiếp tục ");
    if(option){
      this.addressService.getById(id).subscribe(dt1=>{
        this.addressService.updateAddress(dt1).subscribe(()=>{
          this.backAbout();
        })
      })
    }
  }

  id:number;
  onSubmit(){
    if(this.id){
      this.updateAdress(this.id)
    }
    else{
      this.AddAddress()
    }
  }
}

