import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailComponent } from '../../blog/blog-detail/blog-detail.component';
import { BlogListComponent } from '../../blog/blog-list/blog-list.component';

const routes : Routes=[
  {path:'', component: BlogListComponent},
  {path:':url', component:BlogDetailComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BlogModule { }
