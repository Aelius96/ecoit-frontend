import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {HomeMainComponent} from './modules/home/home-main/home-main.component';
import {LoginComponent} from "./authentication/login/login.component";
import {FooterComponent} from './modules/navigation/footer/footer.component';
import {HeaderComponent} from './modules/navigation/header/header.component';
import {BankingComponent} from './modules/product/banking/banking.component';
import {BusinessComponent} from './modules/product/business/business.component';
import {GovernmentComponent} from './modules/product/government/government.component';
import {SecurityDefenseComponent} from './modules/product/security-defense/security-defense.component';
import {AboutUsComponent} from './modules/introduce/about-us/about-us.component';
import {CapacityProfileComponent} from './modules/introduce/capacity-profile/capacity-profile.component';
import {TypicalCustomersComponent} from './modules/introduce/typical-customers/typical-customers.component';
import {ContactComponent} from './modules/contact/contact.component';

import {ErrorComponent} from './modules/error/error.component';


import {BlogListComponent} from "./modules/blog/blog-list/blog-list.component";
import {NewsListComponent} from "./modules/news/news-list/news-list.component";
import {RecruitListComponent} from "./modules/recruit/recruit-list/recruit-list.component";
import {PostListComponent} from "./modules/post/post-list/post-list.component";
import {SideBarComponent} from './modules/navigation/side-bar/side-bar.component';
import {CustomerListComponent} from './modules/customer/customer-list/customer-list.component';
import {AboutHomeComponent} from './modules/about/about-home/about-home.component';
import {ProductListComponent} from './modules/product/product-list/product-list.component';

import {NumberHomeComponent} from "./modules/typical/number/number-home/number-home.component";
import {GalleryHomeComponent} from './modules/typical/gallery/gallery-home/gallery-home.component';

import {RecruitNewsComponent} from './modules/home/group/recruit-news/recruit-news.component';
import {CusTypicalHomeComponent} from './modules/typical/customer/cus-typical-home/cus-typical-home.component';
import {SliderListComponent} from './modules/sliders/slider-list/slider-list.component';
import {CustomerProductComponent} from './modules/group/customer-product/customer-product.component';
import {AdminComponent} from './modules/admin/admin/admin.component';
import {HeaderAdminComponent} from './modules/admin/header-admin/header-admin.component';
import {AsideComponent} from './modules/admin/aside/aside.component';
import {DashboardComponent} from './modules/admin/dashboard/dashboard.component';
import {NumberControlComponent} from './modules/typical/number/number-control/number-control.component';
import {PostControlComponent} from './modules/post/post-control/post-control.component';
import {NumberAddComponent} from './modules/typical/number/number-add/number-add.component';
import {BlogControlComponent} from './modules/blog/blog-control/blog-control.component';
import {BlogAddComponent} from './modules/blog/blog-add/blog-add.component';
import {NewsControlComponent} from './modules/news/news-control/news-control.component';
import {NewsAddComponent} from './modules/news/news-add/news-add.component';
import {CKEditorModule} from "ng2-ckeditor";
// import {CKEditorModule} from "@ckeditor/ckeditor5-angular";
import {RecruitControlComponent} from './modules/recruit/recruit-control/recruit-control.component';
import {RecruitAddComponent} from './modules/recruit/recruit-add/recruit-add.component';
import {CustomerControlComponent} from './modules/customer/customer-control/customer-control.component';
import {GalleryControlComponent} from './modules/typical/gallery/gallery-control/gallery-control.component';
import {GalleryAddComponent} from './modules/typical/gallery/gallery-add/gallery-add.component';
import {CustomerAddComponent} from './modules/customer/customer-add/customer-add.component';
import {UserControlComponent} from './modules/user/user-control/user-control.component';
import {UserAddComponent} from './modules/user/user-add/user-add.component';
import {UserActiveComponent} from './modules/user/user-active/user-active.component';
import {HistoryListComponent} from './modules/admin/history/history-list/history-list.component';

import {HttpClientModule} from "@angular/common/http";
import {RegisterComponent} from './authentication/register/register.component';
import {authInterceptorProviders} from "./authentication/helper/auth.interceptor";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import { NavigatorControlComponent } from './modules/navigation/navigator-admin/navigator-control/navigator-control.component';
import { NavigatorAddComponent } from './modules/navigation/navigator-admin/navigator-add/navigator-add.component';
import { ProductControlComponent } from './modules/product/product-control/product-control.component';
import { ProductAddComponent } from './modules/product/product-add/product-add.component';
import { SliderAddComponent } from './modules/sliders/slider-add/slider-add.component';
import { SliderControlComponent } from './modules/sliders/slider-control/slider-control.component';
import { BannerAddComponent } from './modules/banner/banner-add/banner-add.component';
import { BannerControlComponent } from './modules/banner/banner-control/banner-control.component';
import { CusTypicalAddComponent } from './modules/typical/customer/cus-typical-add/cus-typical-add.component';
import { CusTypicalControlComponent } from './modules/typical/customer/cus-typical-control/cus-typical-control.component';
import { NewsDetailComponent } from './modules/news/news-detail/news-detail.component';
import {AppPageSizeComponent} from "./modules/shared/app-page-size/app-page-size.component";
import {NgxPaginationModule} from "ngx-pagination";
import { CustomerDetailComponent } from './modules/customer/customer-detail/customer-detail.component';
import { ProductDetailComponent } from './modules/product/product-detail/product-detail.component';

import { AboutControlComponent } from './modules/about/about-control/about-control.component';
import { AboutAddessComponent } from './modules/about/about-addess/about-addess.component';
import { AlbumsControlComponent } from './modules/typical/albums/albums-control/albums-control.component';
import { AlbumsDetailComponent } from './modules/typical/albums/albums-detail/albums-detail.component';

import { TagRoleComponent } from './modules/user/tag-role/tag-role.component';

import { NewsMoreComponent } from './modules/news/news-more/news-more.component';
import { RecruitDetailComponent } from './modules/recruit/recruit-detail/recruit-detail.component';
import { RecruitMoreComponent } from './modules/recruit/recruit-more/recruit-more.component';
import { BlogDetailComponent } from './modules/blog/blog-detail/blog-detail.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeMainComponent,
    FooterComponent,
    HeaderComponent,
    BankingComponent,
    BusinessComponent,
    GovernmentComponent,
    SecurityDefenseComponent,
    AboutUsComponent,
    CapacityProfileComponent,
    TypicalCustomersComponent,
    ContactComponent,
    ErrorComponent,
    BlogListComponent,
    NewsListComponent,
    RecruitListComponent,
    PostListComponent,
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
    AdminComponent,
    HeaderAdminComponent,
    AsideComponent,
    DashboardComponent,
    NumberControlComponent,
    PostControlComponent,
    NumberAddComponent,
    BlogControlComponent,
    BlogAddComponent,
    NewsControlComponent,
    NewsAddComponent,
    RecruitControlComponent,
    RecruitAddComponent,
    CustomerControlComponent,
    GalleryControlComponent,
    GalleryAddComponent,
    CustomerAddComponent,
    RegisterComponent,
    UserControlComponent,
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
  ],
  providers: [authInterceptorProviders],

  bootstrap: [AppComponent]
})
export class AppModule {
}
