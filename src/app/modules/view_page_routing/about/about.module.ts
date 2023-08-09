import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from '../../error/error.component';
import { AboutUsComponent } from '../../introduce/about-us/about-us.component';
import { CapacityProfileComponent } from '../../introduce/capacity-profile/capacity-profile.component';
import { TypicalCustomersComponent } from '../../introduce/typical-customers/typical-customers.component';

const routes: Routes=[
  {path:'' , component: ErrorComponent},
  {path: 've-chung-toi' , component:AboutUsComponent},
  {path: 'ho-so-nang-luc' , component: CapacityProfileComponent},
  {path: 'khach-hang-tieu-bieu' , component: TypicalCustomersComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AboutModule { }
