import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../../services/comment/comment.service';
import { Comment } from 'src/app/core/model/comment/comment';
import { ActivatedRoute, Router } from '@angular/router';
import { Constant } from 'src/app/core/config/constant';
import { Recruit } from '../../../core/model/recruit/recruit';
import {PostService} from "../../../services/post/post.service";
import {TokenStorageService} from "../../../services/token-storage/token-storage.service";
import {emitDistinctChangesOnlyDefaultValue} from "@angular/compiler";
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

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
      this.url = this.route.snapshot.params['url'];
      this.postService.getPostByUrl(this.url).subscribe(data => {
        this.comment.post.id = data.id;
        this.postId = data.id;
        this.getAllComment();
        this.getCommentChildByParent()
      })

      // this.getPost();
    }
    }

  // hiển thị
  // getRequestParams(id: number):any{
  //   let params: any = {};
  //
  //   if (id) {
  //     params[`postId`] = id;
  //   }
  // }

  sendChildComment(){
    this.commentService.creatComment(this.comment).subscribe(res=>{
      let option = confirm('Bình luận thành công!');
        if(option){
          window.location.reload();
        }

      },
      error=>{console.log(error)}
    )
  }
  addParentId(id: number){
    this.comment.parentId = id;
    // console.log(this.comment.parentId);
  }
  // getPost(){
  //   this.url = this.route.snapshot.params['url'];
  //   this.postService.getPostByUrl(this.url).subscribe(data => {
  //     this.comment.post.id = data.id;
  //     this.id =  this.comment.post.id
  //     console.log(this.comment.post.id);
  //   })
  // }
  getAllComment(){
    // const params= this.getRequestParams(this.id)
    this.commentService.getCommentByPostId(this.postId).subscribe(data=>{
        this.commentList = data;

      },
      error=>{
        console.error(error)
      }
    );
  }
  getCommentChildByParent(){
    // const params= this.getRequestParams(this.id)
    this.commentService.getCommentChildByParent().subscribe(data=>{
        this.commentListChild = data;
      },
      error=>{
        console.error(error)
      }
    );
  }


  onSubmit(){
    this.sendChildComment();
  }
}


