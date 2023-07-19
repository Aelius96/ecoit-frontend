import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/core/model/post/post';
import { Recruit } from 'src/app/core/model/recruit/recruit';
import { PostService } from 'src/app/services/post/post.service';
import { RecruitService } from 'src/app/services/recruit/recruit.service';
import {Constant} from "../../../core/config/constant";

@Component({
  selector: 'app-recruit-more',
  templateUrl: './recruit-more.component.html',
  styleUrls: ['./recruit-more.component.css']
})
export class RecruitMoreComponent implements OnInit {

// recruitList: Recruit[]=[]

// constructor(private recruitService: RecruitService){}
//   ngOnInit(): void {
//     this.getListAll()
//   }

//   getListAll(){
//     this.recruitService.listAll().subscribe(data=>{

//       return this.recruitList=data;
//     })
//   }

postList : Post[]=[]
  baseURL = Constant.BASE_URL;

constructor ( private postService: PostService){}
ngOnInit(): void {
  this.getListAll()
}

getListAll(){
this.postService.listAll().subscribe(data=>{
  return this.postList=data;
})
}


}
