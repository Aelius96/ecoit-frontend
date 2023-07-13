import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NavigatorControlComponent } from "../navigation/navigator-admin/navigator-control/navigator-control.component";
import { NavigatorAddComponent } from "../navigation/navigator-admin/navigator-add/navigator-add.component";
import { NavictrolTestComponent } from "../navigation/navigator-admin/navictrol-test/navictrol-test.component";



const routes: Routes = [
    {path:'' , component: NavigatorControlComponent},
    {path: 'add', component: NavigatorAddComponent},
    {path:'update/:id' , component: NavigatorAddComponent},
    {path:'test' , component:NavictrolTestComponent}
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
