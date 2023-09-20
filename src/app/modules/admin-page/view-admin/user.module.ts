import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserControlComponent } from "../user/user-control/user-control.component";
import { UserAddComponent } from "../user/user-add/user-add.component";
import { UserActiveComponent } from "../user/user-active/user-active.component";




const routes: Routes = [
  {path:'' , component: UserControlComponent},
  {path: 'add', component: UserAddComponent},
  {path: 'update/:id', component: UserAddComponent},
  {path:'active' , component: UserActiveComponent},

]

@NgModule({
  declarations:[],
  imports:[
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
  export class UserModule{}
