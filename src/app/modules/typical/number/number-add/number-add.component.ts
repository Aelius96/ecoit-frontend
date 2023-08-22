import {Component, OnInit} from '@angular/core';
import {NumberService} from "../../../../services/number-typical/number.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Number} from "../number";
import { ToastService } from 'src/app/modules/toast/toast.service';

@Component({
  selector: 'app-number-add',
  templateUrl: './number-add.component.html',
  styleUrls: ['./number-add.component.css']
})
export class NumberAddComponent implements OnInit{

  tNumber: Number =new Number();
  listIcon : string[] = ["fas fa-address-book","fas fa-user","fas fa-university","fas fa-video",
                         "fab fa-product-hunt","fas fa-university","fab fa-java","fab fa-google",
                         "fa fa-envelope-open","fa fa-handshake-o","fas fa-users"];
  icons : string = ''
  id: any;

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
    if (this.id) {
      this.numService.editNumber(this.tNumber, this.id).subscribe(() =>{
          this.toast.showSuccess()
          this.rollbackToList()
        },error => {
          this.toast.showWarning(error.error);
          console.log(error.error)
        } )
    } else {
      this.numService.addNumber(this.tNumber).subscribe(() =>{ 
        this.toast.showSuccess()
         this.rollbackToList()},error => {
          this.toast.showWarning(error.error);
          console.log(error.error)
        }  )
    }

  }
}