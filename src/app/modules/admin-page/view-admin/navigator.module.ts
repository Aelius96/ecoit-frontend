import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NavigatorAddComponent } from "../navigator-admin/navigator-add/navigator-add.component";
import { NavigatorControlComponent } from "../navigator-admin/navigator-control/navigator-control.component";



const routes: Routes = [
    {path:'' , component: NavigatorControlComponent},
    {path: 'add', component: NavigatorAddComponent},
    {path:'update/:id' , component: NavigatorAddComponent},
   
  ]

  @NgModule({
    declarations:[],
    imports:[
      CommonModule,
      MatButtonModule,
      MatIconModule,
      RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
  })


export class NavigatorModule{}
