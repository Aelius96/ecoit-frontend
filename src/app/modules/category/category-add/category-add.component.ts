import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Category } from 'src/app/core/model/category/category';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {

  category: Category = new Category() ;
  id:number

constructor(
  // public dialogRef: MatDialogRef<CategoryAddComponent>,
  // @Inject(MAT_DIALOG_DATA) public data: any,

    private categoryService:CategoryService,
    private router:Router,
    private route: ActivatedRoute,
      ) {}

// cancle(): void {
//   this.dialogRef.close();
// }

ngOnInit(): void {
  this.id = this.route.snapshot.params['id'];
  if(this.id){
    this.categoryService.GetCateByid(this.id).subscribe(res=>{
      this.category =res;
    })
  }
}

onSubmit(){
  if(this.id){
    this.update(this.id);
  }else{
    this.AddCategory();
  }
 }

 cancel(){
  this.router.navigate(['/admin/category']);
}

update(id:any){
  this.categoryService.UpdateCate(id).subscribe(()=>
  {
    this.cancel()
  })
}

AddCategory(){
  this.categoryService.AddCategory(this.category).subscribe(()=>{
    alert('Thêm chuyên mục thành công!')
    this.cancel()

  })
}
}
