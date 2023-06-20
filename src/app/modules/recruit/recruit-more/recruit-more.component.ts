import { Component, OnInit } from '@angular/core';
import { Recruit } from 'src/app/core/model/recruit/recruit';
import { RecruitService } from 'src/app/services/recruit/recruit.service';

@Component({
  selector: 'app-recruit-more',
  templateUrl: './recruit-more.component.html',
  styleUrls: ['./recruit-more.component.css']
})
export class RecruitMoreComponent implements OnInit {

recruitList: Recruit[]=[]

constructor(private recruitService: RecruitService){}
  ngOnInit(): void {
    this.getListAll()
  }

  getListAll(){
    this.recruitService.listAll().subscribe(data=>{

      return this.recruitList=data;
    })
  }

}
