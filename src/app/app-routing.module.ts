import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import { ErrorComponent } from "./modules/error/error.component";
import { AuthenticateService } from './authentication/authenticate.service';

const routes: Routes =[
// mặt ngoài
  { path:'',redirectTo:'/trang-chu',pathMatch:'full',},
  {path:'', loadChildren:()=>import('./modules/view_page_routing/view-page.module').then(m=>m.ViewPageModule)},
// mặt admin-control
  { path:'admin',redirectTo:'/admin/dashboard',pathMatch:'full'},
  {path:'admin', canActivate:[AuthenticateService],loadChildren:() => import('./modules/view-admin/admin.module').then(m => m.AdminModule) },

  { path: '**', redirectTo: '/404' },
  {path: '404' , component:ErrorComponent},

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
