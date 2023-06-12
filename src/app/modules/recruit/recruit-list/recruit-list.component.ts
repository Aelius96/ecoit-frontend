import { Component, OnInit } from '@angular/core';
import { Recruit } from '../../../core/model/recruit/recruit';
import { RecruitService } from 'src/app/services/recruit/recruit.service';

@Component({
  selector: 'app-recruit-list',
  templateUrl: './recruit-list.component.html',
  styleUrls: ['./recruit-list.component.css']
})
export class RecruitListComponent implements OnInit {
 
  recruitList: Recruit[]=[];
  constructor(private recruitService:RecruitService) { }



  ngOnInit(): void {
    this.getAllList()
  }
  getAllList():void{
      this.recruitService.listAll().subscribe(data=>{
        return this.recruitList=data
      })
  }

}
