import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryISO, PhoneNumberFormat,SearchCountryField } from 'ngx-intl-tel-input';
import { Contact } from 'src/app/core/model/contact/contact';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from 'src/app/services/contact/contact.service';
import { ToastService } from '../toast/toast.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent  implements OnInit {
  contact: Contact=new Contact();
  
  constructor( private contactService: ContactService,
              private toastService: ToastService , 
              private toast : ToastrService  ){  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.SendContact()
   }
  
  SendContact(){
      this.contactService.AddContact(this.contact).subscribe(()=>{
        this.toast.success('Bạn đã gửi thành công', 'Thành Công!',);
        setTimeout(() => {
          location.reload()
        }, 1000);
        
      },
      err=>{
        this.toastService.showWarning( err.error);
        console.log(err.error)
      }
      )
  }

  //mã ACII
  numberOnly(event:any): boolean { 
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    const input = event.target ; // Lấy đối tượng input
    if (input.value.length >= 10) {
      // alert('')
    return false;
    }
    return true;

  }

}
