import { HttpParams } from '@angular/common/http';
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
  allContact : number
  active : any

  constructor(private contactService: ContactService) { }

  ngOnInit():void {
    const params = this.getParams(this.paging.page, this.paging.size , this.searchInput.input,this.active)
    this.contactService.listAllsizePage(params).subscribe(res=>{
      this.contactList=res.content;
      this.allContact = res.totalElements
      // this.paging.totalRecord = res.totalElements;
      console.log(this.allContact)
      }, 
    )
  }

  getParams(page: number, pageSize: number,searchinput:string, active:boolean ): any {
    let params: any = {};

    if (page) {
      params[`pageNo`] = page;
    }

    if (pageSize) {
      params[`pageSize`] = pageSize;
    }

    if(searchinput){
      params[`search`] = searchinput;
    }
    if(active!=null) {
      params['active'] = active
    }
    return params;
  }

  getAllContactPagesize(): void {
  const params = this.getParams(this.paging.page, this.paging.size , this.searchInput.input,this.active)
  // console.log(this.active)
  console.log(params)
    this.contactService.listAllsizePage(params ).subscribe(res=>{
      this.contactList=res.content;
      this.paging.totalRecord = res.totalElements;
      }, 
    )
  }
  refresh() {
    this.active = null
    this.paging.page = 1
    this.getAllContactPagesize()
  }
  Delete(id:number){
     let  cf = confirm("Xóa người liên hệ");
     if(cf){
      this.contactService.Delete(id).subscribe(()=>{
        this.getAllContactPagesize();
      })
     }
  }

Contacted(id:number){
  this.contactService.Contacted(id).subscribe(()=>{
    this.getAllContactPagesize();

  })
}

Notcontact(id:number){
  this.contactService.NotContact(id).subscribe(()=>{
    this.getAllContactPagesize();

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

// ======  lọc
// chưa liên hệ
  Pending(){
    this.active = true
    this.paging.page = 1
    this.getAllContactPagesize()
  }
// đã liên hệ
  Process(){
    this.paging.page = 1
    this.active = false
    console.log(this.active)
    this.getAllContactPagesize()
  }
}
