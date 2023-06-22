import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NavigatorControlComponent } from "../navigation/navigator-admin/navigator-control/navigator-control.component";
import { NavigatorAddComponent } from "../navigation/navigator-admin/navigator-add/navigator-add.component";



const routes: Routes = [
    {path:'' , component: NavigatorControlComponent},
    {path: 'add', component: NavigatorAddComponent},
    {path:'update/:id' , component: NavigatorAddComponent},


  ]

  @NgModule({
    declarations:[],
    imports:[
      CommonModule,
      RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
  })


export class NavigatorModule{}
