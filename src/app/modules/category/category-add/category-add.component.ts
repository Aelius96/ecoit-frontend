import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import { Category } from 'src/app/core/model/category/category';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {

  category: Category = new Category() ;

constructor(
  // public dialogRef: MatDialogRef<CategoryAddComponent>,
  // @Inject(MAT_DIALOG_DATA) public data: any,

    private categoryService:CategoryService,
    private router:Router
      ) {}

// cancle(): void {
//   this.dialogRef.close();
// }

ngOnInit(): void {
}

id:number
onSubmit(){
  if(this.id){
    this.update(this.id);
  }else{
    this.AddCategory();
  }
 }


 cancle(){
  this.router.navigate(['/admin/category']);
}

update(id:any){
  this.categoryService.UpdateCate(id).subscribe(()=>
  {
    this.cancle()
  })
}

AddCategory(){
  this.categoryService.AddCategory(this.category).subscribe(()=>{
    alert('Thêm chuyên mục thành công!')
    this.cancle()

  })
}

}
