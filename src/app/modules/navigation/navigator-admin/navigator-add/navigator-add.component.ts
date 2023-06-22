import {Component, OnInit} from '@angular/core';
import {Nav} from "../../../../core/model/nav/nav";
import {NavService} from "../../../../services/nav/nav.service";

@Component({
  selector: 'app-navigator-add',
  templateUrl: './navigator-add.component.html',
  styleUrls: ['./navigator-add.component.css']
})
export class NavigatorAddComponent implements OnInit{

  id: any
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = "";
  nav: Nav = new Nav();
  constructor(private navService : NavService) {}


  ngOnInit(): void {
  }

  addNav(){

  }
}
