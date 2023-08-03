import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from '../../../core/model/address/address';
import { AddressService } from 'src/app/services/address/address.service';

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

  onSubmit(){
   this.AddAddress()
  }


}

