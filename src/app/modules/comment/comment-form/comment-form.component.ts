
import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../../services/comment/comment.service';
import { Comment } from 'src/app/core/model/comment/comment';
import { ActivatedRoute, Router } from '@angular/router';
import {TokenStorageService} from "../../../services/token-storage/token-storage.service";
import {Post} from "../../../core/model/post/post";
import {PostService} from "../../../services/post/post.service";
import { ToastrService } from 'ngx-toastr';
import { ToastService } from '../../toast/toast.service';


@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent {

  comment : Comment = new Comment();
  username:string;
  userId: number;
  url: string;
  id:number

constructor(private route:ActivatedRoute ,
            private commentService: CommentService ,
            private postService: PostService,
            private tokenStorageService: TokenStorageService ,
            private toastService: ToastrService , private  toast: ToastService ){}

  ngOnInit(): void {
    if(this.tokenStorageService.getToken()){
      this.username = this.tokenStorageService.getUser().username;
      this.userId = this.tokenStorageService.getUser().id;
      this.comment.user.id = this.userId;
      this.getPost();
    }

  }

 sendComment(){
  this.commentService.creatComment(this.comment).subscribe(res=>{
    this.toastService.success('Bình luận thành công', 'Thành Công!');
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
  getPost(){
    this.url = this.route.snapshot.params['url'];
    this.postService.getPostByUrl(this.url).subscribe(data => {
      this.comment.post.id = data.id;
      // console.log(this.comment.post.id);
    })
  }


  onSubmit(){  
      this.sendComment();

  }
}
