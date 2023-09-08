import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductAddComponent } from "../product/product-add/product-add.component";
import { CommonModule } from "@angular/common";
import { RoleAddComponent } from "../admin/role/role-add/role-add.component";
import { RoleControlComponent } from "../admin/role/role-control/role-control.component";



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
