import {Component, OnInit} from '@angular/core';
import {NumberService} from "../../../../services/number-typical/number.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Number} from "../number";

@Component({
  selector: 'app-number-add',
  templateUrl: './number-add.component.html',
  styleUrls: ['./number-add.component.css']
})
export class NumberAddComponent implements OnInit{

  tNumber: Number =new Number();
  id: any;

  constructor(private numService: NumberService, private route: ActivatedRoute, private router: Router) { }

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
    if (this.id) {
      this.numService.editNumber(this.tNumber, this.id).subscribe(() => this.rollbackToList())
    } else {
      this.numService.addNumber(this.tNumber).subscribe(() => this.rollbackToList())
    }

  }
}
