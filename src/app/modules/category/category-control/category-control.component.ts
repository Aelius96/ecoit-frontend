import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoryAddComponent } from '../category-add/category-add.component';

@Component({
  selector: 'app-category-control',
  templateUrl: './category-control.component.html',
  styleUrls: ['./category-control.component.css'],

})
export class CategoryControlComponent {

  animal: string;
  name: string;
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(CategoryAddComponent, {
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}

