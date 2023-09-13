import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NumberService } from 'src/app/services/number-typical/number.service';

@Component({
  selector: 'app-module-add',
  templateUrl: './module-add.component.html',
  styleUrls: ['./module-add.component.css']
})
export class ModuleAddComponent {

  allIcon : any
  formModule = new FormGroup({
    name : new FormControl('',Validators.required),
    url : new FormControl('',Validators.required),
    icons: new FormControl('',Validators.required)
  })
  constructor(private numberService: NumberService){

  }
  ngOnInit(){
   this.getIcon()
  }
  onSubmit(){}
  getIcon(){
    this.numberService.getListIconJson('icon.json').subscribe(data=>{
      this.allIcon=data
    })
  }
  rollbackToList(){}
}
