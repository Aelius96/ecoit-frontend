import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductControlComponent } from "../product/product-control/product-control.component";
import { ProductAddComponent } from "../product/product-add/product-add.component";
import { CommonModule } from "@angular/common";



const routes: Routes = [
    {path:'' , component: ProductControlComponent},
    {path: 'add', component: ProductAddComponent},
    {path:'update/:id' , component: ProductAddComponent},

  ]

  @NgModule({
    declarations:[],
    imports:[
      CommonModule,
      RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
  })


export class ProductModule{}
//
