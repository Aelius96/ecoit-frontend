import { RouterModule, Routes } from "@angular/router";
import { BannerControlComponent } from "../banner/banner-control/banner-control.component";
import { BannerAddComponent } from "../banner/banner-add/banner-add.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";



const routes: Routes = [
    {path:'' , component: BannerControlComponent},
    {path: 'add', component: BannerAddComponent},

    {path:'update/:id' , component: BannerAddComponent},
  
  ]
  
  @NgModule({
    declarations:[],
    imports:[
      CommonModule,
      RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
  })
  
  
  export class BannerModule{}