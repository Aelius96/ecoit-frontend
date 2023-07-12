import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import { Category } from 'src/app/core/model/category/category';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent {

  Category: Category = new Category() ;

constructor(
  public dialogRef: MatDialogRef<CategoryAddComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any,

    private categoryService:CategoryService,
    private router:Router
      ) {}

cancle(): void {
  this.dialogRef.close();
}

goToback(){
  this.router.navigate(['/admin/category']);
}

AddCategory(){
  this.categoryService.AddCategory(this.Category).subscribe(res=>{
    alert('Thêm chuyên mục thành công!')
    this.goToback()
  }, er=>{console.log(er)})
}

}
