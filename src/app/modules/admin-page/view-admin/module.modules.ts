import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ModuleAddComponent } from "../module/module-add/module-add.component";
import { ModuleControlComponent } from "../module/module-control/module-control.component";



const routes: Routes = [
    {path:'' , component: ModuleControlComponent},
    {path: 'add', component: ModuleAddComponent},

    {path:'update/:id' , component: ModuleAddComponent},
  
  ]
  
  @NgModule({
    declarations:[],
    imports:[
      CommonModule,
      RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
  })
  
  
  export class ModuleModule{}