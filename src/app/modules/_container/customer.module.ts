import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {CustomerControlComponent} from "../customer/customer-control/customer-control.component";
import {CustomerAddComponent} from "../customer/customer-add/customer-add.component";
import {CusTypicalAddComponent} from "../typical/customer/cus-typical-add/cus-typical-add.component";
import {CusTypicalControlComponent} from "../typical/customer/cus-typical-control/cus-typical-control.component";



const routes: Routes = [
  {path:'' , component: CustomerControlComponent},
  {path:'add', component: CustomerAddComponent},
  {path:'update/:id' , component: CustomerAddComponent},

  {path:'cus-typical',title:'Admin-Khách Hàng Tiêu Biểu', component:CusTypicalControlComponent},
  {path:'cus-typical/add', component:CusTypicalAddComponent},
  {path:'cus-typical/update/:id' , component: CusTypicalAddComponent}
]

@NgModule({
  declarations:[],
  imports:[
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class CustomerModule{}
