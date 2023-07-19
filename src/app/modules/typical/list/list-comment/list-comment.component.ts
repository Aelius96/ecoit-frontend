import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/core/model/comment/comment';
import { CommentService } from 'src/app/services/comment/comment.service';
import { PostService } from 'src/app/services/post/post.service';
import { TokenStorageService } from 'src/app/services/token-storage/token-storage.service';

@Component({
  selector: 'app-list-comment',
  templateUrl: './list-comment.component.html',
  styleUrls: ['./list-comment.component.css']
})
export class ListCommentComponent implements OnInit {

  commentList: Comment[]=[];
  commentListChild :Comment[]=[];
  comment: Comment = new Comment();
  username:string;
  userId: number;
  postId: number;
  url : any;
  parentId: number;
constructor(private route:ActivatedRoute,
            private commentService: CommentService,
            private postService: PostService,
            private tokenStorageService: TokenStorageService){}

  ngOnInit(): void {
    if(this.tokenStorageService.getToken()){
      this.username = this.tokenStorageService.getUser().username;
      this.userId = this.tokenStorageService.getUser().id;
      this.comment.user.id = this.userId;
      console.log(this.userId)
      this.getAllCommentAdmin()      
    }
      this.getAllCommentAdmin();
      this.getCommentChildAdmin()
    }

  getAllCommentAdmin(){
    this.commentService.getParentCmtAdmin().subscribe(data=>{
        this.commentList = data;

      },
      error=>{
        console.error(error)
      }
    );
  }
  // getCommentChildByParent(){
    
  //   this.commentService.getCommentChildByParent().subscribe(data=>{
  //       this.commentListChild = data;
  //     },
  //     error=>{
  //       console.error(error)
  //     }
  //   );
  // }

  getCommentChildAdmin(){
    
    this.commentService.getCommentChildByParentAdmin().subscribe(data=>{
        this.commentListChild = data;
      },
      error=>{
        console.error(error)
      }
    );
  }

  Disable(id:number){
    let  cf = confirm("Ẩn bình luận");
     if(cf){
    this.commentService.DisableComment(id).subscribe(()=>{
      this.getAllCommentAdmin();
    })
  }}

  DisableChild(id:number){
    let  cf = confirm("Ẩn bình luận");
     if(cf){
    this.commentService.DisableComment(id).subscribe(()=>{
      this.getCommentChildAdmin();
    })
  }}

  Enable(id:number){
    let  cf = confirm("Hiện bình luận");
     if(cf){
    this.commentService.EnableComment(id).subscribe(()=>{
      this.getAllCommentAdmin();
    })
  }}

  EnableChild(id:number){
    let  cf = confirm("Hiện bình luận");
     if(cf){
    this.commentService.EnableComment(id).subscribe(()=>{
      this.getCommentChildAdmin();
    })
  }}

  Delete(id:number){
    let cf = confirm("Xóa bình luận")
    if(cf){
    this.commentService.deleteComment(id).subscribe(()=>{
      this.getAllCommentAdmin();
    })
  }}
  DeleteChild(id:number){
    let cf = confirm("Xóa bình luận")
    if(cf){
    this.commentService.deleteComment(id).subscribe(()=>{
    this.getCommentChildAdmin()
    })
  }}
}
