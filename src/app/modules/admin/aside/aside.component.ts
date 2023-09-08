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
  roleName:string;
  constructor(private tokenStorageService: TokenStorageService,private module: ModuleService) { }
  ngOnInit(): void {
    
      this.userName= this.tokenStorageService.getUser().username;
      this.roleName = this.tokenStorageService.getUser().roles[0]
      console.log(this.roleName);
      console.log(this.userName);
      console.log(this.tokenStorageService.getUser());
    
    this.getaside()
  }

  getaside() {
    this.module.getaside('aside.json').subscribe(data=> {
      this.modules = data;
    });
  }
  logout() {
    
      this.tokenStorageService.signOut();
      window.location.reload();
    
  }
}
