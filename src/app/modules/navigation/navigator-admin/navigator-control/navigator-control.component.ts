import {Component, ElementRef, QueryList, Renderer2, ViewChildren} from '@angular/core';
import {Recruit} from "../../../../core/model/recruit/recruit";
import {Nav} from "../../../../core/model/nav/nav";
import {Router} from "@angular/router";
import {RecruitService} from "../../../../services/recruit/recruit.service";
import {TokenStorageService} from "../../../../services/token-storage/token-storage.service";
import {NavService} from "../../../../services/nav/nav.service";
import {ToastService} from "../../../toast/toast.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NavigatorAddComponent} from "../navigator-add/navigator-add.component";
import {NgbModalRef} from "@ng-bootstrap/ng-bootstrap/modal/modal-ref";
import {HttpErrorResponse} from "@angular/common/http";
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

@Component({
  selector: 'app-navigator-control',
  templateUrl: './navigator-control.component.html',
  styleUrls: ['./navigator-control.component.css']
})
export class NavigatorControlComponent {

  navigation : Nav[] = [];
  selectNavList: Nav[] = [];
  removeSelectNav: Nav[] = [];
  role: string;
  selects: any;
  id:any;
  currentIndex = -1;
  totalPages: number;
  searchInput= '';
  //pageSize =[20,30,40]

  paging = {
    page: 1,
    size: 16,
    totalRecord: 0
  }

  actionT = false;
  actionId: any;
  // modalRef?: NgbModalRef; //tùy chọn có hoặc ko

  constructor(private router: Router,
              private navService:NavService,
              private renderer: Renderer2,
              private toast: ToastService,
              private modalService: NgbModal
  ) {

  }

// treemat

treeControl = new NestedTreeControl<Nav>(node => node.navChild);
dataSource = new MatTreeNestedDataSource<Nav>();




listtree(){
  this.navService.listAll().subscribe(data=>{
    this.dataSource.data = data
  })
}

hasChild(_:number , node: Nav):boolean{
  return !!node.navChild&&node.navChild.length>0
}

// ======


  ngOnInit(): void {

    window.sessionStorage.removeItem("navGroup");
    window.sessionStorage.removeItem("navId");
    this.listtree();
    this.getListAllWithPage();
    // this.listAll();

  }
// ========
  onCheckChange(event: any, navigator: Nav){
    this.selectNavList.push(navigator);
    navigator.selected = event.currentTarget.checked;
    this.selects = this.selectNavList.filter(item => item.selected).length;
  }

  @ViewChildren("checkboxes") checkboxes: QueryList<ElementRef> | undefined;
  uncheckAll() {
    // @ts-ignore
    this.checkboxes.forEach((element) => {
      element.nativeElement.checked = false;
    });
    this.selects = null;
  }
  actionTarget(event: any) {
    let target: any = event.target || event.srcElement || event.currentTarget;
    let idAttr = target.attributes.id;

    this.actionId = idAttr.nodeValue;
    this.actionT = true;

    let current = document.getElementsByClassName("target");

    if (current.length > 0) {
      current[0].className = current[0].className.replace(" target", "");
    }

    event.target.classList.toggle('target');

  }

  listAll(){
    this.navService.listAll().subscribe(data=>{
      this.navigation = data;
    })
  }
  // getAllNavGroup(){
  //   this.navService.listAll().subscribe( res=>{
  //     this.navigation = res
  //   })
  // }

  updateNavigation(id: any){
    return this.router.navigate([`/admin/nav/update/${id}`])
  }

  deleteNavigation(id: number){
    let option = confirm("Dữ liệu sẽ bị xóa . Bạn có mốn tiếp tục ");

    if(option){
      this.navService.deleteNav(id).subscribe(()=>{
        this.getListAllWithPage();
      })
    }
  }


  getRequestParams(page: number, pageSize: number,search:string): any {
    let params: any = {};

    if (page) {
      params[`pageNo`] = page-1;
    }

    if (pageSize) {
      params[`pageSize`] = pageSize;
    }

    if(search){
      params[`search`] = search;
    }
    return params;
  }

  getListAllWithPage(): void {
    const params = this.getRequestParams(this.paging.page, this.paging.size, this.searchInput);

    this.navService.listAllWithPage(params)
      .subscribe(
        response => {
          this.navigation = response.content;
          this.paging.totalRecord = response.totalElements;
          // this.totalPages = response.totalPages;
          console.log(response);

        },
        error => {
          console.log(error);
        });
  }


  searchTitleAndDescription(): void {
    this.paging.page = 1;
    this.getListAllWithPage();
  }
  handlePageChange(event: number): void {
    console.log(event);
    this.paging.page = event;
    this.getListAllWithPage();
  }

  handlePageSizeChange(event: any): void {
    this.paging.size = event;
    this.paging.page = 1;
    console.log(event, this.paging.size)
    this.getListAllWithPage();
  }

prepareformData(formdata: any){
  const formData = new FormData;
  formData.append('id',
  new Blob ([JSON.stringify(formdata)], {type:'application/json'}))
  return formData;
}

getAllnav(){
  this.navService.listAll().subscribe(res=>{
    this.navigation=res
    console.log(res)
  }, error=>console.log(error))
}

clearnAll(){
this.navigation = this.selectNavList.filter(itemnav=>itemnav.selected);
const formdataNav = this.prepareformData(this.navigation.map(idnav=>idnav.id));
this.navService.deleteNavAll(formdataNav).subscribe(()=>{
  this.selects = null;
  this.selectNavList = [];
  this.getAllnav()
})

}
}
