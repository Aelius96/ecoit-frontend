import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NumberControlComponent } from "../number/number-control/number-control.component";
import { NumberAddComponent } from "../number/number-add/number-add.component";

const routes: Routes = [
    {path:'' , component: NumberControlComponent},
    {path: 'add', component: NumberAddComponent},
    {path:'edit/:id' , component: NumberAddComponent},
   
  ]
  
  @NgModule({
    declarations:[],
    imports:[
      CommonModule,
      RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
  })
  export class NumberModule{}
  