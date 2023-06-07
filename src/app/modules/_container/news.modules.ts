import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NewsControlComponent} from "../news/news-control/news-control.component";
import {NewsAddComponent} from "../news/news-add/news-add.component";

const routes: Routes = [
  {path:'' , component: NewsControlComponent},
  {path: 'add', component: NewsAddComponent},
  {path: 'edit/:id' , component: NewsAddComponent},

]

@NgModule({
  declarations:[],
  imports:[
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class NewsModules{}
