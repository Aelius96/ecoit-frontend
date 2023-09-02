import {RouterModule, Routes} from "@angular/router";

import {NgModule} from "@angular/core";
import {HomeMainComponent} from "./modules/home/home-main/home-main.component";

import { BankingComponent } from "./modules/product/banking/banking.component";
import { GovernmentComponent } from "./modules/product/government/government.component";
import { BusinessComponent } from "./modules/product/business/business.component";
import { SecurityDefenseComponent } from "./modules/product/security-defense/security-defense.component";
import { AboutUsComponent } from "./modules/introduce/about-us/about-us.component";
import { CapacityProfileComponent } from "./modules/introduce/capacity-profile/capacity-profile.component";
import { TypicalCustomersComponent } from "./modules/introduce/typical-customers/typical-customers.component";
import { ContactComponent } from "./modules/contact/contact.component";

import { ErrorComponent } from "./modules/error/error.component";

import {NewsListComponent} from "./modules/news/news-list/news-list.component";
import {RecruitListComponent} from "./modules/recruit/recruit-list/recruit-list.component";
import {PostListComponent} from "./modules/post/post-list/post-list.component";
import {BlogListComponent} from "./modules/blog/blog-list/blog-list.component";
import {CustomerProductComponent} from "./modules/group/customer-product/customer-product.component";

import {LoginComponent} from "./authentication/login/login.component";
import {RegisterComponent} from "./authentication/register/register.component";
import {AdminComponent} from "./modules/admin/admin/admin.component";
import {NumberAddComponent} from "./modules/typical/number/number-add/number-add.component";
import {AuthenticateService} from "./authentication/authenticate.service";
import {NewsDetailComponent} from "./modules/news/news-detail/news-detail.component";
import { RecruitDetailComponent } from "./modules/recruit/recruit-detail/recruit-detail.component";
import { BlogDetailComponent } from "./modules/blog/blog-detail/blog-detail.component";



const routes: Routes =[
  { path:'',redirectTo:'/trang-chu',pathMatch:'full',}, // full khớp hoàn toàn
  {path:'trang-chu', component: HomeMainComponent},
  //sản phẩm
  //{ path: 'khach-hang-chinh-phu' , component:CustomerProductComponent },
  { path: 'khach-hang-chinh-phu' , component:GovernmentComponent },
  {path: 'khach-hang-tai-chinh-ngan-hang' , component:BankingComponent},
  {path: 'khach-hang-doanh-nghiep' , component: BusinessComponent},
  {path: 'khach-hang-an-ninh-quoc-phong', component: SecurityDefenseComponent},

  // giới thiệu
  {path: 've-chung-toi' , component:AboutUsComponent},
  {path: 'ho-so-nang-luc' , component: CapacityProfileComponent},
  {path: 'khach-hang-tieu-bieu' , component: TypicalCustomersComponent},
  //
  {path: 'lien-he' , component: ContactComponent},

  {path: '404' , component:ErrorComponent},
//news
  {path:'news',component:NewsListComponent},
  {path:'news/:url', component: NewsDetailComponent},
  //recruit
  {path:'recruit',component: RecruitListComponent},
  {path:'recruit/:url' , component:RecruitDetailComponent},
  //
  {path:'post', component: PostListComponent},
  //blog
  {path:'blog', component: BlogListComponent},
  {path:'blog/:url', component:BlogDetailComponent},
//
  {path: 'login' , component: LoginComponent},
  {path: 'register', component:RegisterComponent},


  // {path: 'number/add' , component: NumberAddComponent},
  // {path: 'number/edit/:id' , component:NumberAddComponent},
  { path:'admin',redirectTo:'/admin/dashboard',pathMatch:'full'},

  {path:'admin', canActivate:[AuthenticateService]
    ,loadChildren:() => import('./modules/_container/admin.module').then(m => m.AdminModule) },

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
