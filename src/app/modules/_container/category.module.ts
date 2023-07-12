import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CategoryControlComponent } from '../category/category-control/category-control.component';
import { CategoryAddComponent } from '../category/category-add/category-add.component';


const routes: Routes=[
{path:'' , component:CategoryControlComponent },
{path:'add' , component:CategoryAddComponent},

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})

export class CategoryModule { }
