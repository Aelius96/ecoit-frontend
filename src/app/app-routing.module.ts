import {RouterModule, Routes} from "@angular/router";

import {NgModule} from "@angular/core";
import {HomeMainComponent} from "./modules/home/home-main/home-main.component";

import { AboutUsComponent } from "./modules/introduce/about-us/about-us.component";
import { CapacityProfileComponent } from "./modules/introduce/capacity-profile/capacity-profile.component";
import { TypicalCustomersComponent } from "./modules/introduce/typical-customers/typical-customers.component";
import { ContactComponent } from "./modules/contact/contact.component";

import { ErrorComponent } from "./modules/error/error.component";

import {NewsListComponent} from "./modules/news/news-list/news-list.component";
import {RecruitListComponent} from "./modules/recruit/recruit-list/recruit-list.component";
import {BlogListComponent} from "./modules/blog/blog-list/blog-list.component";

import {LoginComponent} from "./authentication/login/login.component";
import {RegisterComponent} from "./authentication/register/register.component";
import {AuthenticateService} from "./authentication/authenticate.service";
import {NewsDetailComponent} from "./modules/news/news-detail/news-detail.component";
import { RecruitDetailComponent } from "./modules/recruit/recruit-detail/recruit-detail.component";
import { BlogDetailComponent } from "./modules/blog/blog-detail/blog-detail.component";
import {CustomerDetailComponent} from "./modules/customer/customer-detail/customer-detail.component";
import {ProductDetailComponent} from "./modules/product/product-detail/product-detail.component";



const routes: Routes =[
  { path:'',redirectTo:'/trang-chu',pathMatch:'full',}, // full khớp hoàn toàn
  {path:'trang-chu', component: HomeMainComponent},
  //sản phẩm
  //{ path: 'khach-hang-chinh-phu' , component:CustomerProductComponent },
  { path: 'khach-hang/:url' , component:CustomerDetailComponent },

  {path: 'san-pham/:url', component: ProductDetailComponent},

  // giới thiệu
  {path: 'gioi-thieu/ve-chung-toi' , component:AboutUsComponent},
  {path: 'gioi-thieu/ho-so-nang-luc' , component: CapacityProfileComponent},
  {path: 'gioi-thieu/khach-hang-tieu-bieu' , component: TypicalCustomersComponent},

//news
  {path:'tin-tuc',component:NewsListComponent},
  {path:'tin-tuc/:url', component: NewsDetailComponent},
  //recruit
  {path:'tuyen-dung',component: RecruitListComponent},
  {path:'tuyen-dung/:url' , component:RecruitDetailComponent},
  //
  // {path:'post', component: PostListComponent},
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

      //
  {path: 'lien-he' , component: ContactComponent},
  { path: '**', redirectTo: '/404' },
  {path: '404' , component:ErrorComponent},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
