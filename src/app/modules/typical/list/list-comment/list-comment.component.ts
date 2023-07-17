import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/core/model/comment/comment';
import { CommentService } from 'src/app/services/comment/comment.service';

@Component({
  selector: 'app-list-comment',
  templateUrl: './list-comment.component.html',
  styleUrls: ['./list-comment.component.css']
})
export class ListCommentComponent implements OnInit {

  comment: Comment[]=[]
  
  constructor( private commentservice : CommentService ) {
    
  } 
  ngOnInit(): void {
    this.getlistAll();
  }

  getlistAll():void{
    this.commentservice.getListAll().subscribe(res =>{
      return this.comment=res
    } , error=>{
      console.log(error)
    } )
  }
}
