import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {PostControlComponent} from "../post/post-control/post-control.component";


const routes: Routes = [
  {path:'' , component: PostControlComponent},

  ]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class PostModule { }
