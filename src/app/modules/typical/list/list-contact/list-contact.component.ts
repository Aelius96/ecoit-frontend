import { Component } from '@angular/core';
import { Contact } from 'src/app/core/model/contact/contact';
import { ContactService } from 'src/app/services/contact/contact.service';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css']
})
export class ListContactComponent {

  contactList: Contact[]=[]
 
  contacTarget={
     id:1,
     name:'',
     phone:'',
     email:'',
     content:'',
     status:'',

  }

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.getAllContact();
  }

  public getAllContact(): void {
    this.contactService.listAllContact().subscribe(res=>{
      this.contactList = res;
      
      console.log(res)
    });
  }

  Delete(id:number){
     let  cf = confirm("Xóa người liên hệ");
     if(cf){
      this.contactService.Delete(id).subscribe(dt=>{
        this.getAllContact();
      })
     }
  }

pick(e:any){
  this.contacTarget.id = e.id;
  this.contacTarget.name=e.name;
  this.contacTarget.content = e.content;
  this.contacTarget.status= e.status;
  this.contacTarget.email=e.email;
}

Contacted(id:number){
  this.contactService.Contacted(id).subscribe(()=>{
    this.getAllContact();
    console.log("dalienhe" ,id)
  })
}

Notcontact(id:number){
  this.contactService.NotContact(id).subscribe(()=>{
    this.getAllContact();
    console.log("chualienhe", id)
  })
}

}
