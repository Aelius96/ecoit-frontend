import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import { AdminControlComponent } from "../admin-control/admin-control.component";
import { HistoryListComponent } from "../history/history-list/history-list.component";
import { ListContactComponent } from "../../admin-page/contact/list-contact/list-contact.component";
import { ListCommentComponent } from "../../admin-page/comment/list-comment/list-comment.component";

const routes: Routes =[

  {path:'' , title:'Admin-Ecoit' , component: AdminControlComponent,

  children:[
    {path: 'dashboard' , title:'Admin-Ecoit' , loadChildren:()=>import('./number.module').then(m=>m.NumberModule)},
    {path: 'blog' , title:'Admin-Blog', loadChildren:()=> import('./blog.module').then(m=>m.BlogModule)},
    {path: 'news' , title:'Admin-Tin tức', loadChildren:()=> import('./news.module').then(m=>m.NewsModules)},
    {path: 'recruit' , title:'Admin-Tuyển dụng', loadChildren:()=> import('./recruit.module').then(m=>m.RecruitModule)},
    {path: 'customer' , title:'Admin-Khách Hàng' , loadChildren:()=>import('./customer.module').then(m=>m.CustomerModule)},
    {path: 'bpost' , title:'Admin-Bài Viết' , loadChildren:()=>import('./post.module').then(m=>m.PostModule)},
    {path: 'image-gallery', title:'Admin-khách hàng tiêu biểu', loadChildren:()=>import('./gallery.module').then(m=>m.GalleryModule) },
    {path: 'tImage', title:'Admin-khách hàng tiêu biểu', loadChildren:()=>import('./gallery.module').then(m=>m.GalleryModule) },
    {path: 'user', title:'Admin-tài khoản', loadChildren:()=>import('./user.module').then(m=>m.UserModule )  },
    {path:'history' , title: 'Admin-Lịch sử sử đổi' , component: HistoryListComponent},
    {path: 'product' , title: 'Admin-Sản phẩm',canActivate:[] , loadChildren:()=>import('./product.module').then(m=>m.ProductModule) },
    {path: 'nav' , title: 'Admin-Điều hướng' , loadChildren:()=>import('./navigator.module').then(m=>m.NavigatorModule) },
    {path:'sliders', title:'Admin-Trình chiếu' , loadChildren:()=>import('./sliders.module').then(m=>m.SlidersModule)},
    {path:'banner' , title: 'Admin-Trình chiếu' , loadChildren:()=>import('./banner.module').then(m=>m.BannerModule)},
    {path:'about' , title:'Admin-Về chúng tôi', loadChildren:()=>import('./about.module').then(m=>m.AboutModule)},
    {path:'albums' , title:'Amin-Kho ảnh' ,  loadChildren:()=>import('./albums.module').then(m=>m.AlbumsModule)},
    // {path:'list' , title:'Admin-Danh sách' ,  loadChildren:()=>import('./list.module').then(m=>m.ListModule)},
    {path:'category', title:'Admin-Chuyên mục' , loadChildren:()=>import('./category.module').then(m=>m.CategoryModule)},
    {path:'contact' , title:'Admin-Danh sách liên hệ' , component:ListContactComponent},
    {path:'comment' , title:'Admin-Danh sách bình luận', component:ListCommentComponent},
    {path:'role' , title:'Admin-Phân quyền người dùng',   loadChildren:()=>import('./role.module').then(m=>m.RoleModule) },
    {path:'module' , title:'Admin-Quản lý đề mục',   loadChildren:()=>import('./module.module').then(m=>m.ModuleModule) },
    {path:'permission' , title:'Admin-Quản lý chức năng',   loadChildren:()=>import('./permission.module').then(m=>m.PermissionModule) },
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
