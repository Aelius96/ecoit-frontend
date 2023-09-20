import { RouterModule, Routes } from "@angular/router";
import {  NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AlbumsDetailComponent } from "../albums/albums-detail/albums-detail.component";


const routes: Routes = [
    // {path:'', component:AlbumsControlComponent},
    {path:'' , component: AlbumsDetailComponent}
  
  ]
  
  @NgModule({
    declarations:[],
    imports:[
      CommonModule,
      RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
  })
  export class AlbumsModule{}