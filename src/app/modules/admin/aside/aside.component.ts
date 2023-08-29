import {Component,OnInit} from '@angular/core';
import {TokenStorageService} from "../../../services/token-storage/token-storage.service";
import { Module } from 'src/app/core/model/module/module';
import { ModuleService } from 'src/app/services/module/module.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  
  constructor(private tokenStorageService: TokenStorageService,private module: ModuleService) { }
  ngOnInit(): void {
    this.getaside()
  }
  modules: Module[]=[]
  getaside() {
    this.module.getModule('aside.json').subscribe(data=> {
      this.modules = data;
    });
  }
  logout() {
    let cf=confirm("Bạn có muốn đăng xuất");
    if(cf){
      this.tokenStorageService.signOut();
      window.location.reload();
    }
  }
}
