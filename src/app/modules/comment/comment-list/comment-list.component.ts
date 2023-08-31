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

import { ToastrService } from 'ngx-toastr';
import { ToastService } from '../../toast/toast.service';
import { CommentViewService } from 'src/app/services/comment-view/comment-view.service';

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
  id:number;
 
constructor(private route:ActivatedRoute,
            private commentService: CommentService,
            private postService: PostService,
            private tokenStorageService: TokenStorageService  ,
            private toast : ToastService , 
            private toastService : ToastrService,
            private commentViewService : CommentViewService){
              
            }

  ngOnInit(): void {
    if(this.tokenStorageService.getToken()){
      this.username = this.tokenStorageService.getUser().username;
      this.userId = this.tokenStorageService.getUser().id;

      this.comment.userName = this.username

      this.url = this.route.snapshot.queryParams['url'];
      this.postService.getPostByUrl(this.url).subscribe(data => {
        this.comment.post.id = data.id;
        this.postId = data.id;
        console.log(this.postId)
        this.getAllComment()
        this.getCommentChildByParent()
        // this.commentViewService.getCommentSubject().subscribe((data) => {
        //   console.log(data)
        //   this.commentList = data
        // })
        
      })

    }
    }

  sendChildComment(){
    console.log(this.comment)
    this.commentService.creatComment(this.comment).subscribe(res=>{
      this.toastService.success('Bình luận thành công!');
      setTimeout(() => {
        location.reload()
      }, 1000);
      console.log(res)
      },
      error=>{
        this.toast.showWarning(error.error)
        console.log(error)}
    )
  }
  addParentId(id: number){
    this.comment.parentId = id;
  }

  getAllComment(){
    
    this.commentService.getCommentByPostId(this.postId).subscribe(data=>{
        this.commentList = data;
        console.log(data)
      },
      error=>{
        console.error(error)
      }
    );
  }
  getCommentChildByParent(){
    
    this.commentService.getCommentChildByParent().subscribe(data=>{
        this.commentListChild = data;
      },
      error=>{
        console.error(error)
      }
    );
  }

  
  disable(id:number){
    let cf = confirm("Xóa bình luận")
    if(cf){
    this.commentService.DisableComment(id).subscribe(()=>{
      this.getAllComment();
    })
  }}
  
  disableChild(id:number){
    let cf = confirm("Xóa bình luận")
    if(cf){
    this.commentService.DisableComment(id).subscribe(()=>{
    this.getCommentChildByParent()
    })
  }}



  updateComment(id:number , comment:Comment ){
    this.commentService.updateComment(id ,comment).subscribe(()=>{
      this.toastService.info('Chỉnh sửa thành công!');
      setTimeout(() => {
        location.reload()
      }, 1000);
      },
      error=>{console.log(error)
    })
  }

  
}


