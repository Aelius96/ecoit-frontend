import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutControlComponent } from "../about/about-control/about-control.component";
import { AboutAddessComponent } from "../about/about-addess/about-addess.component";

const routes: Routes = [
    {path:'' , component: AboutControlComponent},
    {path:'adress' , component:AboutAddessComponent},
    
  ]
  
  @NgModule({
    declarations:[],
    imports:[
      CommonModule,
      RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
  })
  export class  AboutModule{}