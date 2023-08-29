import {Component,OnInit} from '@angular/core';
import {TokenStorageService} from "../../../services/token-storage/token-storage.service";
import { AsideService } from 'src/app/services/aside/aside.service';
import { Aside } from 'src/app/core/model/aside/aside';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  
  constructor(private tokenStorageService: TokenStorageService,private asides:AsideService) { }
  ngOnInit(): void {
    this.getaside()
  }
  asidess : Aside[] =[]
  getaside() {
    this.asides.getAside('aside.json').subscribe(data=> {
      this.asidess = data;
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
