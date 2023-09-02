import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from '../../../core/model/address/address';
import { AddressService } from 'src/app/services/address/address.service';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-about-addess',
  templateUrl: './about-addess.component.html',
  styleUrls: ['./about-addess.component.css']
})
export class AboutAddessComponent implements OnInit {

  addr : Address = new Address();
  id:number;
  constructor( private router: Router ,
                private addressService : AddressService ,
                private route : ActivatedRoute,) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if(this.id){
      this.addressService.getById(this.id).subscribe(res=>{
        this.addr = res
      })
    }
  }

  rollbackToList(){
    this.router.navigate(['/admin/about']);
  }

  backAbout(){
    window.history.back()
  }

  AddAddress(addr: Address):void{
   this.addressService.createAddress(addr).subscribe(()=>{
    alert("Thêm thành công!");
    this.backAbout()
   })
  }
  updateAdress(id: number , addr : Address){
   this.addressService.updateAddress(id,addr).subscribe(data=>{
    this.rollbackToList()
   });
  }

  onSubmit(){
    if(this.id){
      this.updateAdress(this.id , this.addr);
    }else{
      this.AddAddress(this.addr);
    }
  }
}

