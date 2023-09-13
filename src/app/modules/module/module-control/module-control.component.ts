import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Module } from 'src/app/core/model/module/module';
import { ModuleService } from 'src/app/services/module/module.service';

@Component({
  selector: 'app-module-control',
  templateUrl: './module-control.component.html',
  styleUrls: ['./module-control.component.css']
})
export class ModuleControlComponent {

  moduleList : Module[]=[]
  constructor(private moduleService : ModuleService,private router: Router){}
  ngOnInit():void{
   this.getModuleList()
  }
  getModuleList(){
    this.moduleService.getModule().subscribe(data=>{
      this.moduleList=data
    })
  }
  updateModule(id:number){
    this.router.navigate([`admin/module/update/${id}`])
  }
  deleteModule(id:number){
    const cf = confirm('Xác nhận xóa đề mục?')
    if(cf){
      this.moduleService.deleteModule(id).subscribe(data=>{
        this.getModuleList()
      })
    }
  }
}
