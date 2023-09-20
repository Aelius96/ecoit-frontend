import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RecruitDetailComponent } from '../../recruit/recruit-detail/recruit-detail.component';
import { RecruitListComponent } from '../../recruit/recruit-list/recruit-list.component';

const routes : Routes=[
  {path:'' , component: RecruitListComponent },
  {path:':url' , component:RecruitDetailComponent},

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RecruitModule { }
