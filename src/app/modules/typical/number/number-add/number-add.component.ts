import {Component, OnInit} from '@angular/core';
import {NumberService} from '../../../../services/number-typical/number.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Number} from '../number';
import {ToastService} from 'src/app/modules/toast/toast.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-number-add',
  templateUrl: './number-add.component.html',
  styleUrls: ['./number-add.component.css'],
})
export class NumberAddComponent implements OnInit {
  formNumber = new FormGroup({
    numberic: new FormControl('',Validators.required),
    description: new FormControl('',Validators.required),
    icons: new FormControl('',Validators.required),
  });
  inputs = '';
  isborderErrorDes = true;
  isborderErrorIcon = true;
  isborderErrorNumber = true;
  tNumber: Number = new Number();
  // icons: string = '';
  id: any;
  // listIcon: any;
  allIcon: any;
  checkinput = true;
  title='THÊM CON SỐ TIÊU BIỂU'

  constructor(
    private numService: NumberService,
    private route: ActivatedRoute,
    private router: Router,
    private toast: ToastService,
  ) {
  }

  ngOnInit(): void {
    if(history.state.data){
      this.title=history.state.data
    }
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.numService.getNumberById(this.id).subscribe((data) => {
        this.tNumber = data;
        this.formNumber.controls['numberic'].setValue(this.tNumber.num);
        this.formNumber.controls['icons'].setValue(this.tNumber.icon);
        this.formNumber.controls['description'].setValue(
          this.tNumber.description
        );
      });
    }
    this.formNumber.get("icons")?.setValue("")
    this.getListIcon();
  }

  getListIcon() {
    this.numService.getListIconJson('icon.json').subscribe((data) => {
      this.allIcon = data;
    });
  }

  rollbackToList() {
    this.router.navigate(['/admin/dashboard']);
  }

  onSubmit() {
    this.tNumber.num = this.formNumber.controls['numberic'].value;
    this.tNumber.icon = this.formNumber.controls['icons'].value;
    this.tNumber.description = this.formNumber.controls['description'].value;
    if (this.id) {
      this.update(this.id, this.tNumber);
    } else {
      this.addtNumber();
    }
  }

  update(id: number, tNumber: Number) {
    this.numService.editNumber(tNumber, id).subscribe(
      () => {
        this.toast.showSuccess();
        this.rollbackToList();
      },
      (error) => {
        this.toast.showWarning(error.error);
        console.log(error.error);
      }
    );
  }

  addtNumber() {
    this.numService.addNumber(this.tNumber).subscribe(
      () => {
        this.toast.showSuccess();
        this.rollbackToList();
      },
      (error) => {
        this.toast.showWarning(error.error);
        console.log(error.error);
      }
    );
  }
}
