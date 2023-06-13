import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-addess',
  templateUrl: './about-addess.component.html',
  styleUrls: ['./about-addess.component.css']
})
export class AboutAddessComponent {

  constructor( private router: Router) { }

  rollbackToList(){
    this.router.navigate(['/admin/about']);
  }
}

