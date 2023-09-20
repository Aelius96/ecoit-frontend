import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from '../../product/product-detail/product-detail.component';
import { ErrorComponent } from 'src/app/modules/error/error.component';


const routes: Routes=[
  {path:'' , component: ErrorComponent},
  {path:':url' , component: ProductDetailComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductModule { }
