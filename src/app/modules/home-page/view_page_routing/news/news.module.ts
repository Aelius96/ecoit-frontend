import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NewsDetailComponent } from '../../news/news-detail/news-detail.component';
import { NewsListComponent } from '../../news/news-list/news-list.component';

const routes:Routes=[
  {path:'',component:NewsListComponent},
  {path:':url',component:NewsDetailComponent}, 
  // {path:'chi-tiet',component:NewsDetailComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class NewsModule { }
