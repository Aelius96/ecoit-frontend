import {Component,OnInit} from '@angular/core';
import {TokenStorageService} from "../../../services/token-storage/token-storage.service";
import { Module } from 'src/app/core/model/module/module';
import { ModuleService } from 'src/app/services/module/module.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  modules: Module[]=[];
  userName:string;
  roleName:any;
  constructor(private tokenStorageService: TokenStorageService,private module: ModuleService) { }
  ngOnInit(): void {
    if(this.tokenStorageService.getToken()){
      this.userName= this.tokenStorageService.getUser().username;
      this.roleName = this.tokenStorageService.getUser().roles[0]
      console.log(this.roleName);
      console.log(this.userName);
      console.log(this.tokenStorageService.getUser());
      
    }
    this.getaside()
  }

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
