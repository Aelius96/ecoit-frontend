import {Component, ElementRef, QueryList, Renderer2, ViewChildren} from '@angular/core';
import {Recruit} from "../../../../core/model/recruit/recruit";
import {Nav} from "../../../../core/model/nav/nav";
import {Router} from "@angular/router";
import {RecruitService} from "../../../../services/recruit/recruit.service";
import {TokenStorageService} from "../../../../services/token-storage/token-storage.service";
import {NavService} from "../../../../services/nav/nav.service";

import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NavigatorAddComponent} from "../navigator-add/navigator-add.component";
import {NgbModalRef} from "@ng-bootstrap/ng-bootstrap/modal/modal-ref";
import {HttpErrorResponse} from "@angular/common/http";
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
  id: number;
  url: string;
}

@Component({
  selector: 'app-navigator-control',
  templateUrl: './navigator-control.component.html',
  styleUrls: ['./navigator-control.component.css']
})
export class NavigatorControlComponent {

  navigation : Nav[] = [];
  selectNavList: Nav[] = [];
  removeSelectNav: Nav[] = [];
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
  constructor(private router: Router,private navService:NavService) {

  }
  actionT = false;
  actionId: any;
  // modalRef?: NgbModalRef; //tùy chọn có hoặc ko
  ngOnInit(): void {
    this.listtree();
  }
  private transformer = (nav: Nav, level: number) => {
    return {
      expandable: !!nav.navChild && nav.navChild.length > 0,
      name: nav.name,
      id: nav.id,
      url: nav.url,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    nav => nav.level, nav => nav.expandable);

  treeFlattener = new MatTreeFlattener(
      this.transformer, nav => nav.level, nav => nav.expandable, nav => nav.navChild);
  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  hasChild = (_: number, nav: ExampleFlatNode) => nav.expandable;  
  listtree(){
    const params = this.getRequestParams(this.paging.page, this.paging.size, this.searchInput);
    this.navService.listAllWithPage(params).subscribe(res=>{
      // this.dataSource.data = data
      this.dataSource.data = res
      // console.log(this.dataSource)
      // console.log(this.dataSource.data)
      // this.dataSource.data.forEach((element) => {
      //   this.navService.getChildNav(element.id).subscribe(res => {
      //     element.navChild = res;
      //     console.log(res);
      //   })
      // })

    })
  }
  
  getListAllWithPage(): void {
    const params = this.getRequestParams(this.paging.page, this.paging.size, this.searchInput);

    this.navService.listAllWithPage(params)
      .subscribe(
        response => {
          this.navigation = response.content;
          this.navigation=response;
          this.paging.totalRecord = response.totalElements;
          this.totalPages = response.totalPages;
          // console.log(response);
        },
        error => {
          console.log(error);
        });
  }


// ======

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

  updateNavigation(id: any){
    return this.router.navigate([`/admin/nav/update/${id}`],{state:{data:'Sửa Điều Hướng'}})
  }

  deleteNavigation(id: number){
    let option = confirm("Dữ liệu sẽ bị xóa . Bạn có mốn tiếp tục ");

    if(option){
      this.navService.deleteNav(id).subscribe(()=>{
        this.listtree();
        this.getListAllWithPage();
      })
    }
  }


  getRequestParams(page: number, pageSize: number,search:string): any {
    let params: any = {};

    if (page) {
      params[`pageNo`] = page;
    }

    if (pageSize) {
      params[`pageSize`] = pageSize;
    }

    if(search){
      params[`search`] = search;
    }
    return params;
  }




  searchTitleAndDescription(): void {
    this.paging.page = 1;
    this.getListAllWithPage();
  }
  handlePageChange(event: number): void {
    // console.log(event);
    this.paging.page = event;
    this.getListAllWithPage();
  }

  handlePageSizeChange(event: any): void {
    this.paging.size = event;
    this.paging.page = 1;
    // console.log(event, this.paging.size)
    this.getListAllWithPage();
  }

prepareformData(formdata: any){
  const formData = new FormData;
  formData.append('id',
  new Blob ([JSON.stringify(formdata)], {type:'application/json'}))
  return formData;
}


clearnAll(){
  let cf = confirm("Dữ liệu sẽ bị xóa . Bạn có muốn tiếp tục ");
  if(cf){
    this.removeSelectNav=this.selectNavList.filter(item=>item.selected);
    const formdata = this.prepareformData(this.removeSelectNav.map(idnav=>idnav.id));
    this.navService.deleteNavAll(formdata).subscribe(()=>{
      this.selects = null;
      this.selectNavList=[];
      this.listtree();
    })
  }
}
}
