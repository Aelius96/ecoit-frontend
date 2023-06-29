import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "../admin/dashboard/dashboard.component";
import {AdminComponent} from "../admin/admin/admin.component";
import { UserControlComponent } from "../user/user-control/user-control.component";
import { HistoryListComponent } from "../admin/history/history-list/history-list.component";
import { Number } from '../typical/number/number';


const routes: Routes =[

  {path:'' , title:'Admin-Ecoit' , component: AdminComponent,

  children:[
    {path: 'dashboard' , title:'Admin-Ecoit' , loadChildren:()=>import('./number.module').then(m=>m.NumberModule)},

    {path: 'post' , title:'Admin-Tin tức', loadChildren:()=> import('./post.module').then(m=>m.PostModule)},
    {path: 'blog' , title:'Admin-Blog', loadChildren:()=> import('./blog.module').then(m=>m.BlogModule)},
    {path: 'news' , title:'Admin-Tin tức', loadChildren:()=> import('./news.modules').then(m=>m.NewsModules)},
    {path: 'recruit' , title:'Admin-Tuyển dụng', loadChildren:()=> import('./recruit.module').then(m=>m.RecruitModule)},
    {path: 'customer' , title:'Admin-Khách Hàng' , loadChildren:()=>import('./customer.module').then(m=>m.CustomerModule)},

    {path: 'image-gallery', title:'Admin-khách hàng tiêu biểu', loadChildren:()=>import('./gallery.module').then(m=>m.GalleryModule) },
    {path: 'user', title:'Admin-tài khoản', loadChildren:()=>import('./user.module').then(m=>m.UserModule )  },
    {path:'history' , title: 'Admin-Lịch sử sử đổi' , component: HistoryListComponent},
    {path: 'product' , title: 'Admin-Sản phẩm' , loadChildren:()=>import('./product.module').then(m=>m.ProductModule) },
    {path: 'nav' , title: 'Admin-Điều hướng' , loadChildren:()=>import('./navigator.module').then(m=>m.NavigatorModule) },
    {path:'sliders', title:'Admin-Trình chiếu' , loadChildren:()=>import('./sliders.module').then(m=>m.SlidersModule)},
    {path:'banner' , title: 'Admin-Trình chiếu' , loadChildren:()=>import('./banner.module').then(m=>m.BannerModule)},
    {path:'about' , title:'Admin-về chúng tôi', loadChildren:()=>import('./about.module').then(m=>m.AboutModule)},
    {path:'albums' , title:'Amin-kho ảnh' ,  loadChildren:()=>import('./albums.module').then(m=>m.AlbumsModule)},
    {path:'list' , title:'Admin-Danh sách' ,  loadChildren:()=>import('./list.module').then(m=>m.ListModule)},

  ]},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class AdminModule{}
