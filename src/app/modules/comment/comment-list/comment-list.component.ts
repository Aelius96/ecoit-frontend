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
  comment : Comment = new Comment();
  id:any
 

constructor(private route:ActivatedRoute , 
            private commentService: CommentService){}

  ngOnInit(): void {
   
   
    if(this.id){
      this.commentService.getCommentbyId(this.id).subscribe(data =>{
        this.comment = data;
        this.getListAll();
      })
    }
  }

  prepareFormData( comment: Comment ):FormData {
    const formdata =  new FormData();
    formdata.append(
      'comment', 
      new Blob([JSON.stringify(comment)], {type:'application/json'})
    )
    return formdata
  }
  
 sendComment(id:any){
  this.commentService.getCommentbyId(id).subscribe(res=>{
    this.commentService.creatComment(res).subscribe(()=>{
        
    }, error => {
      console.log(error)
    })
  }, errorid=>{
    console.log(errorid)
  })
  }

  onSubmit(){
      this.sendComment(this.id);
  }

  // hiển thị 
  getListAll(){
    this.commentService.getListAll().subscribe(dt=>{
      this.commentList=dt
    })
  }
 }


