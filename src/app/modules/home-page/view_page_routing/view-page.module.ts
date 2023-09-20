import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "src/app/authentication/login/login.component";
import { RegisterComponent } from "src/app/authentication/register/register.component";
import { SearchComponent } from "../search/search.component";
import { ContactComponent } from "../contact/contact.component";
const routes: Routes=[
    {path:'' , title:'Ecoit - Công ty cổ phần EcoIT' ,
    children:[
      {path:'trang-chu', title:'Ecoit - Công ty cổ phần EcoIT',  loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)},
      {path:'khach-hang', loadChildren:()=>import('./customer/customer.module').then(m=>m.CustomerModule)},
      {path:'san-pham' , loadChildren:()=>import ('./product/product.module').then(m=>m.ProductModule)},
      {path:'gioi-thieu' , loadChildren:()=>import('./about/about.module').then(m=>m.AboutModule)},
      {path:'tin-tuc', loadChildren:()=>import('./news/news.module').then(m=>m.NewsModule) },
      {path:'tuyen-dung',loadChildren:()=>import('./recruit/recruit.module').then(m=>m.RecruitModule)},
      {path:'blog', loadChildren:()=>import('./blog/blog.module').then(m=>m.BlogModule)},
      {path:'admin/login', title:'Admin-Login' , component: LoginComponent },
      // {path: 'login', component: LoginUserComponent},
      {path: 'register', component:RegisterComponent},
      {path: 'tag/:hashtag', component:SearchComponent},
      {path: 'tim-kiem', component:SearchComponent},
      {path: 'tim-kiem/:searchInput', component:SearchComponent},
      {path: 'lien-he' , component: ContactComponent},
    ]
  }
]

@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })

export class ViewPageModule{}
