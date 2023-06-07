import { Component } from '@angular/core';
import {NumberService} from "../../../services/number-typical/number.service";
import {Router} from "@angular/router";
import {Blog} from "../../../core/model/blog/blog";

@Component({
  selector: 'app-blog-control',
  templateUrl: './blog-control.component.html',
  styleUrls: ['./blog-control.component.css']
})
export class BlogControlComponent {

  constructor( private numberService: NumberService,   private router:Router) {
  }


}
