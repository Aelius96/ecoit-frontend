
import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../../services/comment/comment.service';
import { Comment } from 'src/app/core/model/comment/comment';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent {

  comment : Comment = new Comment();
  id:number;
 
constructor(private route:ActivatedRoute , 
            private commentService: CommentService ,
            private router : Router){}

  ngOnInit(): void {
 
  }

 sendComment(){
  this.commentService.creatComment(this.comment).subscribe(res=>{
    this.router.navigate(['./'])
    alert('Bình luận thành công')
    console.log(res)
  },
  error=>{console.log(error)} 
  )
  }

  onSubmit(){
     this.sendComment()
  }
}
