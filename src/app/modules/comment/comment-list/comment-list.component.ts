import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../../services/comment/comment.service';
import { Comment } from 'src/app/core/model/comment/comment';
import { ActivatedRoute, Router } from '@angular/router';
import { Constant } from 'src/app/core/config/constant';
import { Recruit } from '../../../core/model/recruit/recruit';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  commentList: Comment[]=[];

constructor(   private commentService: CommentService){}

  ngOnInit(): void {
   this.getListAll();
 
  }
  // hiển thị 
  getListAll():void{
    this.commentService.getListCommentHome().subscribe(dt=>{
      this.commentList=dt;
      console.log(dt)
    })
  }
 }


