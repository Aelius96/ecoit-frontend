import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {GalleryControlComponent} from "../typical/gallery/gallery-control/gallery-control.component";
import {GalleryAddComponent} from "../typical/gallery/gallery-add/gallery-add.component";


const routes: Routes = [
  {path:'' , component: GalleryControlComponent},
  {path: 'add', component: GalleryAddComponent},
  {path:'update/:id' , component: GalleryAddComponent},

]

@NgModule({
  declarations:[],
  imports:[
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})


export class GalleryModule{}
