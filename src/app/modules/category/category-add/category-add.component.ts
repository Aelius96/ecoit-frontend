import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Category } from 'src/app/core/model/category/category';
import { CategoryService } from 'src/app/services/category/category.service';
import { ToastService } from '../../toast/toast.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css'],
})
export class CategoryAddComponent implements OnInit {
  category: Category = new Category();
  message = '';
  id: number;
  messageError='';
  formData: any;
  catogaryControl = new FormControl();

  constructor(
    private toast: ToastService,
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.categoryService.GetCateByid(this.id).subscribe((res) => {
        this.category = res;
        this.catogaryControl.setValue(res.typeName);
      });
    }
  }

  onSubmit() {
    this.category.typeName = this.catogaryControl.value;
    if (this.id) {
      this.update(this.id, this.category);
    } else {
      // this.AddCategory();
    }
  }

  cancel() {
    this.router.navigate(['/admin/category']);
  }

  update(id: number, category: Category) {
    this.categoryService.UpdateCate(id, category).subscribe(
      () => {
        this.toast.showSuccess();
        this.cancel();
      },
      (error) => {
        this.toast.showWarning(error.error);
      }
    );
  }

  // AddCategory() {
  //   this.categoryService.AddCategory(this.category).subscribe(
  //     () => {
  //       this.toast.showSuccess();
  //       this.cancel();
  //     },
  //     (error) => {
  //       this.toast.showWarning(error.error,'typeName')
  //       this.messageError=error.error
  //     }
  //   );
  // }
}
