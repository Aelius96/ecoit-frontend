import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryISO, PhoneNumberFormat,SearchCountryField } from 'ngx-intl-tel-input';
import { Contact } from 'src/app/core/model/contact/contact';
import { ContactService } from 'src/app/services/contact/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent  implements OnInit {
  contact: Contact=new Contact();
  
  constructor( private contactService: ContactService,
           private router: Router ){  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.SendContact()
   }
  
  SendContact(){
      this.contactService.AddContact(this.contact).subscribe(()=>{
        this.router.navigate(['./']);
        alert('Gửi thành công')
      }
      )
  }

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
