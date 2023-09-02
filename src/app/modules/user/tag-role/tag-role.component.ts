import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tag-role',
  templateUrl: './tag-role.component.html',
  styleUrls: ['./tag-role.component.css']
})
export class TagRoleComponent implements OnInit {
//Input()??
  @Input() codeRole: any;

  ngOnInit(): void {
  }

}
