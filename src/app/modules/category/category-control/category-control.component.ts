import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoryAddComponent } from '../category-add/category-add.component';
import { CategoryService } from 'src/app/services/category/category.service';
import { Category } from 'src/app/core/model/category/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-control',
  templateUrl: './category-control.component.html',
  styleUrls: ['./category-control.component.css'],

})
export class CategoryControlComponent implements OnInit {
  category: Category[]=[]

  // animal: string;
  // name: string;
  constructor(
    public dialog: MatDialog ,
          private  categoryService: CategoryService ,
          private router: Router) {}

  ngOnInit(): void {
    this.getListAll();
  }

  getListAll(){
    this.categoryService.listAllCategory().subscribe(res=>{
      this.category=res;
      console.log(res);
    }
    ,error =>{
      console.log(error)
    }
    )
  }

  Delete(id:number){
    let  cf = confirm("Xóa chuyên mục");
     if(cf){
      this.categoryService.DeleteCate(id).subscribe(()=>{
        this.getListAll();
      })
     }
  }

  Update(id:number){
    return this.router.navigate([`/admin/category/update/${id}` ])
  }

}

