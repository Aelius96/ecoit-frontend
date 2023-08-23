import {Component, OnInit} from '@angular/core';
import {NumberService} from "../../../../services/number-typical/number.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Number} from "../number";
import { ToastService } from 'src/app/modules/toast/toast.service';
import { FormControl, FormGroup } from '@angular/forms';
import { parseNumber } from 'libphonenumber-js';

@Component({
  selector: 'app-number-add',
  templateUrl: './number-add.component.html',
  styleUrls: ['./number-add.component.css']
})
export class NumberAddComponent implements OnInit{

  tNumber: Number =new Number();
  messageError=''
  inputs=''
  id: any;
  formGroup = new FormGroup({
    numberic: new FormControl(),
    description: new FormControl(),
    icon: new FormControl()
  });

  constructor(private numService: NumberService, private route: ActivatedRoute, private router: Router , private toast:ToastService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if(this.id){
      this.numService.getNumberById(this.id).subscribe(data =>{
        this.tNumber = data;
      })
    }
    
    
  }

  rollbackToList(){
    this.router.navigate(['/admin/dashboard']);
  }

  onSubmit() {
    console.log(this.formGroup.controls['numberic'])
    console.log(this.formGroup.controls['icon'].value)
    console.log(this.formGroup.controls['description'].value)
    if (this.id) {
      this.numService.editNumber(this.tNumber, this.id).subscribe(() =>{
          this.toast.showSuccess()
          this.rollbackToList()
        },error => {
          this.toast.showWarning(error.error);
          console.log(error.error)
        } )
    } else {
      if(this.formGroup.controls['numberic'].value===null){
        this.numService.addNumber(this.tNumber).subscribe(() =>{ 
          this.toast.showSuccess()
          this.inputs="typeNumber"
           this.rollbackToList()},error => {
              this.toast.showWarning(error.error,this.inputs);
          }  )
      }
      
    }

  }
}
