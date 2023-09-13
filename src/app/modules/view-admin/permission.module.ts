import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { PermissionControlComponent } from "../permission/permission-control/permission-control.component";
import { PermissionAddComponent } from "../permission/permission-add/permission-add.component";



const routes: Routes = [
    {path:'' , component: PermissionControlComponent},
    {path: 'add', component: PermissionAddComponent},
    {path:'update/:id' , component: PermissionAddComponent},

  ]

  @NgModule({
    declarations:[],
    imports:[
      CommonModule,
      RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
  })


export class PermissionModule{}
//
