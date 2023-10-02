import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListControlComponent } from "../../home-page/list/list-control/list-control.component";
import { ListContactComponent } from "../../home-page/list/list-contact/list-contact.component";
import { ListCommentComponent } from "../../home-page/list/list-comment/list-comment.component";

const routes: Routes = [
  {path:'' , component: ListControlComponent},
   {path:'contact' , component: ListContactComponent},
   {path:'comment' , component:ListCommentComponent}
  ]
  
  @NgModule({
    declarations:[],
    imports:[
      CommonModule,
      RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
  })
  export class ListModule{}