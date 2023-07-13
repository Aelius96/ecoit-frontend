import { FlatTreeControl, NestedTreeControl } from '@angular/cdk/tree';
import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener, MatTreeNestedDataSource} from '@angular/material/tree';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Nav } from 'src/app/core/model/nav/nav';
import { ToastService } from 'src/app/modules/toast/toast.service';
import { NavService } from 'src/app/services/nav/nav.service';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */


@Component({
  selector: 'app-navictrol-test',
  templateUrl: './navictrol-test.component.html',
  styleUrls: ['./navictrol-test.component.css']
})
export class NavictrolTestComponent implements OnInit {


  navigation : Nav[] = [];
  selectNavList: Nav[] = [];
  removeSelectNav: Nav[] = [];
  role: string;
  selects: any;
  id:any;

  treeControl = new NestedTreeControl<Nav>(node => node.navChild);
  dataSource = new MatTreeNestedDataSource<Nav>();


  ngOnInit(): void {
    this.list()
  }

  constructor(private naviService: NavService){}

  list(){
    this.naviService.listAll().subscribe(data=>{
      this.dataSource.data = data
    })
  }

  hasChild(_:number , node: Nav):boolean{
    return !!node.navChild&&node.navChild.length>0
  }


}
