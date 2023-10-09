import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {HomeMainComponent} from './modules/home-page/home/home-main/home-main.component';
import {LoginComponent} from "./authentication/login/login.component";
import {FooterComponent} from './modules/home-page/navigation/footer/footer.component';
import {HeaderComponent} from './modules/home-page/navigation/header/header.component';
import {SecurityDefenseComponent} from './modules/home-page/product/security-defense/security-defense.component';
import {AboutUsComponent} from './modules/home-page/about-us/about-us.component';
import {CapacityProfileComponent} from './modules/home-page/capacity-profile/capacity-profile.component';
import {TypicalCustomersComponent} from './modules/home-page/typical-customers/typical-customers.component';
import {ContactComponent} from './modules/home-page/contact/contact.component';

import {ErrorComponent} from './modules/error/error.component';

import {BlogListComponent} from "./modules/home-page/blog/blog-list/blog-list.component";
import {NewsListComponent} from "./modules/home-page/news/news-list/news-list.component";
import {RecruitListComponent} from "./modules/home-page/recruit/recruit-list/recruit-list.component";

import {SideBarComponent} from './modules/home-page/navigation/side-bar/side-bar.component';
import {CustomerListComponent} from './modules/home-page/customer/customer-list/customer-list.component';
import {AboutHomeComponent} from './modules/home-page/about-home/about-home.component';
import {ProductListComponent} from './modules/home-page/product/product-list/product-list.component';

import {NumberHomeComponent} from "./modules/home-page/number-home/number-home.component";
import {GalleryHomeComponent} from './modules/home-page/gallery/gallery-home/gallery-home.component';

import {RecruitNewsComponent} from './modules/home-page/home/group/recruit-news/recruit-news.component';
import {CusTypicalHomeComponent} from './modules/home-page/customer/cus-typical-home/cus-typical-home.component';
import {SliderListComponent} from './modules/admin-page/sliders/slider-list/slider-list.component';
import {CustomerProductComponent} from './modules/home-page/group/customer-product/customer-product.component';
import {AdminControlComponent} from './modules/admin-page/admin-control/admin-control.component';
import {HeaderAdminComponent} from './modules/admin-page/header-admin/header-admin.component';
import {AsideComponent} from './modules/admin-page/aside/aside.component';
import {DashboardComponent} from './modules/admin-page/dashboard/dashboard.component';
import {NumberControlComponent} from './modules/admin-page/number/number-control/number-control.component';

import {NumberAddComponent} from './modules/admin-page/number/number-add/number-add.component';

import {CKEditorModule} from "ng2-ckeditor";

import {CustomerControlComponent} from './modules/admin-page/customer/customer-control/customer-control.component';
import {GalleryControlComponent} from './modules/admin-page/gallery/gallery-control/gallery-control.component';
import {GalleryAddComponent} from './modules/admin-page/gallery/gallery-add/gallery-add.component';
import {CustomerAddComponent} from './modules/admin-page/customer/customer-add/customer-add.component';
import {UserControlComponent} from './modules/admin-page/user/user-control/user-control.component';
import {UserAddComponent} from './modules/admin-page/user/user-add/user-add.component';
import {UserActiveComponent} from './modules/admin-page/user/user-active/user-active.component';
import {HistoryListComponent} from './modules/admin-page/history/history-list/history-list.component';

import {HttpClientModule} from "@angular/common/http";
import {RegisterComponent} from './authentication/register/register.component';
import {authInterceptorProviders} from "./authentication/helper/auth.interceptor";
import {AsyncPipe, CommonModule, NgOptimizedImage} from "@angular/common";
import { NavigatorControlComponent } from './modules/admin-page/navigator-admin/navigator-control/navigator-control.component';
import { NavigatorAddComponent } from './modules/admin-page/navigator-admin/navigator-add/navigator-add.component';
import { ProductControlComponent } from './modules/admin-page/product/product-control/product-control.component';
import { ProductAddComponent } from './modules/admin-page/product/product-add/product-add.component';
import { SliderAddComponent } from './modules/admin-page/sliders/slider-add/slider-add.component';
import { SliderControlComponent } from './modules/admin-page/sliders/slider-control/slider-control.component';
import { BannerAddComponent } from './modules/admin-page/banner/banner-add/banner-add.component';
import { BannerControlComponent } from './modules/admin-page/banner/banner-control/banner-control.component';
import { CusTypicalAddComponent } from './modules/admin-page/customer/cus-typical-add/cus-typical-add.component';
import { CusTypicalControlComponent } from './modules/admin-page/customer/cus-typical-control/cus-typical-control.component';
import { NewsDetailComponent } from './modules/home-page/news/news-detail/news-detail.component';
import {AppPageSizeComponent} from "./modules/shared/app-page-size/app-page-size.component";
import {NgxPaginationModule} from "ngx-pagination";
import { CustomerDetailComponent } from './modules/home-page/customer/customer-detail/customer-detail.component';
import { ProductDetailComponent } from './modules/home-page/product/product-detail/product-detail.component';

import { AboutControlComponent } from './modules/admin-page/about/about-control/about-control.component';
import { AboutAddessComponent } from './modules/admin-page/about/about-addess/about-addess.component';
import { AlbumsControlComponent } from './modules/admin-page/albums/albums-control/albums-control.component';
import { AlbumsDetailComponent } from './modules/admin-page/albums/albums-detail/albums-detail.component';

import { TagRoleComponent } from './modules/admin-page/user/tag-role/tag-role.component';

import { NewsMoreComponent } from './modules/home-page/news/news-more/news-more.component';
import { RecruitDetailComponent } from './modules/home-page/recruit/recruit-detail/recruit-detail.component';
import { RecruitMoreComponent } from './modules/home-page/recruit/recruit-more/recruit-more.component';
import { BlogDetailComponent } from './modules/home-page/blog/blog-detail/blog-detail.component';
import { BlogMoreComponent } from './modules/home-page/blog/blog-more/blog-more.component';
import { ListContactComponent } from './modules/admin-page/contact/list-contact/list-contact.component';
import { ListControlComponent } from './modules/home-page/list/list-control/list-control.component';
import { ListCommentComponent } from './modules/admin-page/comment/list-comment/list-comment.component';
import { AppPageSizeImageComponent } from './modules/shared/app-page-size-image/app-page-size-image.component';
import { CommentListComponent } from './modules/home-page/comment/comment-list/comment-list.component';
import { ProductMoreComponent } from './modules/home-page/product/product-more/product-more.component';

import { PostControlComponent } from './modules/admin-page/post/post-control/post-control.component';
import { PostAddComponent } from './modules/admin-page/post/post-add/post-add.component';
import { PostListComponent } from './modules/home-page/post/post-list/post-list.component';
import { PostDetailComponent } from './modules/home-page/post/post-detail/post-detail.component';

import {MatSelectModule} from "@angular/material/select";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {MatListModule} from "@angular/material/list";
import {MatChipsModule} from "@angular/material/chips";
import {MatIconModule} from "@angular/material/icon";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatFormFieldModule} from "@angular/material/form-field";
import {TagInputModule} from "ngx-chips";



import { NgxInputTagModule } from '@ngx-lite/input-tag';
import {SlickCarouselModule} from "ngx-slick-carousel";

import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';


import { CommentFormComponent } from './modules/home-page/comment/comment-form/comment-form.component';

import {MatButtonModule} from '@angular/material/button';

import { LoginUserComponent } from './authentication/login-user/login-user.component';

import { CategoryControlComponent } from './modules/admin-page/category/category-control/category-control.component';
import { CategoryAddComponent } from './modules/admin-page/category/category-add/category-add.component';
import {MatDialogModule} from '@angular/material/dialog';
import { NgbTooltipModule  } from '@ng-bootstrap/ng-bootstrap';
import {MatTreeModule} from '@angular/material/tree';
import { SearchComponent } from './modules/home-page/search/search.component';
import { AnimatedDigitComponent } from './_animation/animated-digit/animated-digit.component';
import {MatPaginatorModule} from '@angular/material/paginator';


import {ToastrModule} from 'ngx-toastr';

import { CommentViewService } from './services/comment-view/comment-view.service';

import { DialogComponent } from './modules/dialog/dialog/dialog.component';
import { RoleAddComponent } from './modules/admin-page/role/role-add/role-add.component';
import { RoleControlComponent } from './modules/admin-page/role/role-control/role-control.component';
import { ModuleAddComponent } from './modules/admin-page/module/module-add/module-add.component';
import { ModuleControlComponent } from './modules/admin-page/module/module-control/module-control.component';
import { PermissionAddComponent } from './modules/admin-page/permission/permission-add/permission-add.component';
import { PermissionControlComponent } from './modules/admin-page/permission/permission-control/permission-control.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeMainComponent,
    FooterComponent,
    HeaderComponent,
    SecurityDefenseComponent,
    AboutUsComponent,
    CapacityProfileComponent,
    TypicalCustomersComponent,
    ContactComponent,
    ErrorComponent,
    BlogListComponent,
    NewsListComponent,
    RecruitListComponent,
    SideBarComponent,
    CustomerListComponent,
    AboutHomeComponent,
    ProductListComponent,
    NumberHomeComponent,
    GalleryHomeComponent,
    RecruitNewsComponent,
    CusTypicalHomeComponent,
    SliderListComponent,
    CustomerProductComponent,
    LoginComponent,
    AdminControlComponent,
    HeaderAdminComponent,
    AsideComponent,
    DashboardComponent,
    NumberControlComponent,
    NumberAddComponent,
    CustomerControlComponent,
    GalleryControlComponent,
    GalleryAddComponent,
    CustomerAddComponent,
    RegisterComponent,
    UserAddComponent,
    UserActiveComponent,
    HistoryListComponent,
    NavigatorControlComponent,
    NavigatorAddComponent,
    ProductControlComponent,
    ProductAddComponent,
    SliderAddComponent,
    SliderControlComponent,
    BannerAddComponent,
    BannerControlComponent,
    CusTypicalAddComponent,
    CusTypicalControlComponent,
    NewsDetailComponent,
    AppPageSizeComponent,
    CustomerDetailComponent,
    ProductDetailComponent,

    AboutControlComponent,
    AboutAddessComponent,
    AlbumsControlComponent,
    AlbumsDetailComponent,
    TagRoleComponent,
    NewsMoreComponent,
    RecruitDetailComponent,
    RecruitMoreComponent,
    BlogDetailComponent,
    BlogMoreComponent,
    ListContactComponent,
    ListControlComponent,
    ListCommentComponent,
    CommentListComponent,
    AppPageSizeImageComponent,
    ProductMoreComponent,
    PostControlComponent,
    PostAddComponent,
    PostListComponent,
    PostDetailComponent,
    CommentFormComponent,

    LoginUserComponent,

    CategoryControlComponent,
    CategoryAddComponent,
    SearchComponent,
    AnimatedDigitComponent,
    DialogComponent,
    RoleAddComponent,
    RoleControlComponent,
    UserControlComponent,
    ModuleAddComponent,
    ModuleControlComponent,
    PermissionAddComponent,
    PermissionControlComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CKEditorModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    NgOptimizedImage,
    NgxPaginationModule,
    SlickCarouselModule,
    NgxInputTagModule.forRoot(),
    MatSelectModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatListModule,
    MatChipsModule,
    MatIconModule,
    AsyncPipe,
    MatAutocompleteModule,
    MatFormFieldModule,
    TagInputModule,
    NgxIntlTelInputModule,
    MatButtonModule,
    MatDialogModule,
    NgbTooltipModule,
    MatTreeModule,
    MatPaginatorModule,
    ToastrModule.forRoot({
      closeButton: true,
      progressBar: false,
      positionClass: 'toast-bottom-right' ,
      timeOut:3000,
    }),

  ],



  providers: [authInterceptorProviders,CommentViewService],

  bootstrap: [AppComponent]
})
export class AppModule {
}
