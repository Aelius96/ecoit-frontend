import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from '../../error/error.component';
import { NewsDetailComponent } from '../../news/news-detail/news-detail.component';
import { NewsListComponent } from '../../news/news-list/news-list.component';

const routes:Routes=[
  {path:'',component:NewsListComponent},
  //  
  {path:'chi-tiet',component:NewsDetailComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class NewsModule { }
