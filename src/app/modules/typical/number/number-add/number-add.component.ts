
import {Component, OnInit} from '@angular/core';
import {NumberService} from "../../../../services/number-typical/number.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Number} from "../number";
import { parseNumber } from 'libphonenumber-js';
import { ToastService } from 'src/app/modules/toast/toast.service';
import { FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-number-add',
  templateUrl: './number-add.component.html',
  styleUrls: ['./number-add.component.css'],
})

export class NumberAddComponent implements OnInit {
  formNumber = new FormGroup({
    numberic: new FormControl(),
    description: new FormControl(),
    icons: new FormControl(),
  });
  inputs = '';
  isborderErrorDes = true;
  isborderErrorIcon = true;
  isborderErrorNumber = true;
  tNumber: Number = new Number();
  icons: string = '';
  id: any;
  listIcon: any;
  allIcon: any;
  messerrorNumber = '';
  messerrorIcon = '';
  messerrorDes = '';
  textNumber = 'Những con số tiêu biểu không thể bỏ trống';
  textNumber2 = 'Những con số tiêu biểu chỉ nhận giá trị số';
  textIcon = 'Mã icon không thể bỏ trống';
  textDes = 'Mô tả không thể bỏ trống';
  checkinput = true;

  constructor(
    private numService: NumberService,
    private route: ActivatedRoute,
    private router: Router,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.numService.getNumberById(this.id).subscribe((data) => {
        this.tNumber = data;
        this.formNumber.controls['numberic'].setValue(this.tNumber.num);
        this.formNumber.controls['icons'].setValue(this.tNumber.icon);
        this.formNumber.controls['description'].setValue(this.tNumber.description);
      });
    }

    this.getListIcon()
  }
 
  getListIcon() {
    this.numService.getListIconJson('icon.json').subscribe((data) => {
      this.allIcon = data
      
    })
    this.numService.getListIconJson('listIcon.json').subscribe((data) => {
      this.listIcon = data
    })
  }
  rollbackToList(){
    this.router.navigate(['/admin/dashboard']);
  }

  onSubmit() {

this.tNumber.num = this.formNumber.controls['numberic'].value;
this.tNumber.icon = this.formNumber.controls['icons'].value;
this.tNumber.description = this.formNumber.controls['description'].value;

    if (this.id) {
      this.numService.editNumber(this.tNumber, this.id).subscribe(
        () => {
          this.toast.showSuccess();
          this.rollbackToList();
        },
        (error) => {
          this.toast.showWarning(error.error);
          console.log(error.error);
        }
      );
    } else {
      this.numService.addNumber(this.tNumber).subscribe(
        () => {
          this.toast.showSuccess();
          this.rollbackToList();
        },
        (error) => {
          if (
            this.formNumber.controls['numberic'].value === null &&
            this.formNumber.controls['icons'].value === null &&
            this.formNumber.controls['description'].value === null
          ) {
            this.isborderErrorDes = false;
            this.isborderErrorIcon = false;
            this.isborderErrorNumber = false;
            this.inputs = 'typeNumber';
            this.messerrorNumber = this.textNumber;
            this.messerrorIcon = this.textIcon;
            this.messerrorDes = this.textDes;
          } else if (
            this.formNumber.controls['icons'].value === null &&
            this.formNumber.controls['description'].value === null &&
            typeof this.formNumber.controls['numberic'].value != 'number'
          ) {
            this.isborderErrorNumber = false;
            this.isborderErrorIcon = false;
            this.isborderErrorDes = false;
            this.inputs = 'typeNumber';
            this.messerrorIcon = this.textIcon;
            this.messerrorDes = this.textDes;
            this.messerrorNumber = this.textNumber2;
          } else if (
            this.formNumber.controls['icons'].value === null &&
            this.formNumber.controls['description'].value === null
          ) {
            this.isborderErrorIcon = false;
            this.isborderErrorDes = false;
            this.inputs = 'icon';
            this.messerrorIcon = this.textIcon;
            this.messerrorDes = this.textDes;
          } else if (
            this.formNumber.controls['numberic'].value === null &&
            this.formNumber.controls['icons'].value === null
          ) {
            this.isborderErrorIcon = false;
            this.isborderErrorNumber = false;
            this.inputs = 'typeNumber';
            this.messerrorIcon = this.textIcon;
            this.messerrorNumber = this.textNumber;
          } else if (
            this.formNumber.controls['numberic'].value === null &&
            this.formNumber.controls['description'].value === null
          ) {
            this.isborderErrorNumber = false;
            this.isborderErrorDes = false;
            this.inputs = 'typeNumber';
            this.messerrorNumber = this.textNumber;
            this.messerrorDes = this.textDes;
          } else if (
            this.formNumber.controls['numberic'].value === null ||
            typeof this.formNumber.controls['numberic'].value != 'number'
          ) {
            this.isborderErrorNumber = false;
            this.messerrorNumber = this.textNumber2;
            this.inputs = 'typeNumber';
          } else if (this.formNumber.controls['icons'].value === null) {
            this.isborderErrorIcon = false;
            this.messerrorIcon = this.textIcon;
            this.inputs = 'icon';
          } else {
            this.isborderErrorDes = false;
            this.inputs = 'description';
            this.messerrorDes = this.textDes;
          }
          this.toast.showWarning(error.error, this.inputs);
          console.log(error.error);
        }
      );
    }
  }
  noidungNumber() {
    this.isborderErrorNumber = true;
    this.messerrorNumber = '';
  }
  noidungIcon() {
    this.isborderErrorIcon = true;
    this.messerrorIcon = '';
  }
  noidungDescription() {
    this.isborderErrorDes = true;
    this.messerrorDes = '';
  }
}