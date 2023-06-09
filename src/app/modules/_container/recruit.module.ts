import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {RecruitControlComponent} from "../recruit/recruit-control/recruit-control.component";
import {RecruitAddComponent} from "../recruit/recruit-add/recruit-add.component";


const routes: Routes = [
  {path:'' , component: RecruitControlComponent},
  {path: 'add', component: RecruitAddComponent},
  {path:'update/:id' , component: RecruitAddComponent},

]

@NgModule({
  declarations:[],
  imports:[
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})


export class RecruitModule {}
