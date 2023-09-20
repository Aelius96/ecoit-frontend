import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { RoleControlComponent } from "../role/role-control/role-control.component";
import { RoleAddComponent } from "../role/role-add/role-add.component";



const routes: Routes = [
    {path:'' , component: RoleControlComponent},
    {path: 'add', component: RoleAddComponent},
    {path:'update/:id' , component: RoleAddComponent},

  ]

  @NgModule({
    declarations:[],
    imports:[
      CommonModule,
      RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
  })


export class RoleModule{}
//
