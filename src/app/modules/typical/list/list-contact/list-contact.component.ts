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
  searchInput= {
    input: '',
    startTime: '' ,
    endTime:'' ,  
  }
  paging = {
    page: 1,
    size: 5,
    totalRecord: 0 
}

  startTime: '';
  endTime: '';

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.getAllContactPagesize();
  }

  getRequestParams(page: number, pageSize: number,searchinput:string  ): any {
    let params: any = {};

    if (page) {
      params[`pageNo`] = page-1;
    }

    if (pageSize) {
      params[`pageSize`] = pageSize;
    }

    if(searchinput){
      params[`search`] = searchinput;
    }
    return params;
  }

  getAllContactPagesize(): void {
  const params = this.getRequestParams(this.paging.page, this.paging.size , this.searchInput.input )
    this.contactService.listAllsizePage(params ).subscribe(res=>{
      this.contactList=res.content;
      this.paging.totalRecord = res.totalElements;
      console.log(res)
    }, 
    error => {
      console.log(error);
    }
    )
  }

  Delete(id:number){
     let  cf = confirm("Xóa người liên hệ");
     if(cf){
      this.contactService.Delete(id).subscribe(dt=>{
        this.getAllContactPagesize();
      })
     }
  }

Contacted(id:number){
  this.contactService.Contacted(id).subscribe(()=>{
    this.getAllContactPagesize();
    console.log("dalienhe" ,id)
  })
}

Notcontact(id:number){
  this.contactService.NotContact(id).subscribe(()=>{
    this.getAllContactPagesize();
    console.log("chualienhe", id)
  })
}

search():void{
  this.paging.page = 1;
  this.getAllContactPagesize()
}

handlepagechange(event : number):void{
  console.log(event);
  this.paging.page =event;
  this.getAllContactPagesize();
}
handlePageSizeChange(event: any): void {
  this.paging.size = event;
  this.paging.page = 1;
  console.log(event, this.paging.size)
  this.getAllContactPagesize();
}
}
