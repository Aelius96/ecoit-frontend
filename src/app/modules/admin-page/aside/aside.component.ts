import {Component,EventEmitter,Input,OnInit, Output} from '@angular/core';
import {TokenStorageService} from "../../../services/token-storage/token-storage.service";
import { Module } from 'src/app/core/model/module/module';
import { ModuleService } from 'src/app/services/module/module.service';
import { map } from 'rxjs';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/core/model/user/user';
import { Role } from 'src/app/core/model/role/role';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  modules: Module[]=[];
  userById: User= new User()
  roleByUser: Role = new Role()
  userName:string;
  roleName:string;
  id:number
  @Input() isTouch =true;
  @Output() isTouch2 = new EventEmitter<boolean>()
  constructor(private tokenStorageService: TokenStorageService, private userService:UserService,private moduleService : ModuleService) { }
  ngOnInit(): void {
    
      this.id=this.tokenStorageService.getUser().id
      this.getUserByid(this.id)
      // this.getModlue()
  }
  getUserByid(id:number){
    this.userService.getUserById(id).subscribe(data=>{
      this.userById= data
      this.roleByUser=data.role
      this.modules=this.roleByUser.moduleList
    })
  }
  // getModlue(){
  //   this.moduleService.getaside('aside.json').subscribe(data=>{
  //     this.modules=data
  //   })
  // }
  logout() {
      this.tokenStorageService.signOut();
      window.location.reload();
    
  }
  changeisTouch(){
    this.isTouch2.emit(this.isTouch)
    this.isTouch =! this.isTouch
  }
}
