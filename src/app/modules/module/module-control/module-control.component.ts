import { Component } from '@angular/core';
import { Module } from 'src/app/core/model/module/module';
import { ModuleService } from 'src/app/services/module/module.service';

@Component({
  selector: 'app-module-control',
  templateUrl: './module-control.component.html',
  styleUrls: ['./module-control.component.css']
})
export class ModuleControlComponent {

  moduleList : Module[]=[]
  constructor(private moduleService : ModuleService){}
  ngOnInit():void{
   this.getModuleList()
  }
  getModuleList(){
    this.moduleService.getModule().subscribe(data=>{
      this.moduleList=data
    })
  }
}
