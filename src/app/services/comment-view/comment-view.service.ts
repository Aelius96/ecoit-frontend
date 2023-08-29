import { Injectable } from '@angular/core';
import { CommentService } from '../comment/comment.service';
import { Comment } from 'src/app/core/model/comment/comment';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentViewService {
  commentList : Comment[] = []
  private commentSubject = new BehaviorSubject<Comment[]>(this.commentList)
  constructor(private commentService : CommentService) { 
  }
  getCommentSubject() {
    return this.commentSubject.asObservable();
  }
  getAllComment(postId : number) {
    this.commentService.getCommentByPostId(postId).subscribe((data) => {
      this.commentList = data
      this.commentSubject.next(this.commentList)
    })
  }
  createComment(comment : Comment) {
    this.commentList.push(comment)
    this.commentSubject.next(this.commentList)
    this.commentService.creatComment(comment).subscribe(data => {
      console.log(data)
    })
  }
  
  
}
