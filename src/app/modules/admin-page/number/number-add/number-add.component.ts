import {Component, OnInit} from '@angular/core';
import {NumberService} from '../../../../services/number-typical/number.service';
import {ActivatedRoute, Router} from '@angular/router';
import { ToastService } from 'src/app/services/toast/toast.service';
import { Numberix } from 'src/app/core/model/number/numberix';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  tNumber: Numberix =new Numberix()
  id: any;
  allIcon: any;
  checkinput = true;

  constructor(
    private numService: NumberService,
    private route: ActivatedRoute,
    private router: Router,
    private toast: ToastService,
  ) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.numService.getNumberById(this.id).subscribe((data) => {
        this.tNumber = data;
        console.log(this.tNumber)
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
    this.tNumber.num= this.formNumber.controls['numberic'].value;
    this.tNumber.icon= this.formNumber.controls['icons'].value;
    this.tNumber.description = this.formNumber.controls['description'].value;
    if (this.id) {
      // this.update(this.id, this.tNumber);
    } else {
      this.addtNumber();
    }
  }

  update(id: number, tNumber: Numberix) {
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
