import { RouterModule, Routes } from "@angular/router";
import { AlbumsControlComponent } from "../typical/albums/albums-control/albums-control.component";
import { AlbumsDetailComponent } from "../typical/albums/albums-detail/albums-detail.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";


const routes: Routes = [
    {path:'', component:AlbumsDetailComponent}
    
  
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