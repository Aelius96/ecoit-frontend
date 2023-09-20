
import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/core/model/comment/comment';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommentViewService } from 'src/app/services/comment-view/comment-view.service';
import { CommentService } from 'src/app/services/comment/comment.service';
import { PostService } from 'src/app/services/post/post.service';
import { TokenStorageService } from 'src/app/services/token-storage/token-storage.service';
import { ToastService } from 'src/app/services/toast/toast.service';


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
            private commentService: CommentService,
            private postService: PostService,
            private tokenStorageService: TokenStorageService,
            private toastService: ToastrService ,
            private  toast: ToastService,
            private commentViewService : CommentViewService ){}

  ngOnInit(): void {
    if(this.tokenStorageService.getToken()){
      this.username = this.tokenStorageService.getUser().username;
      this.userId = this.tokenStorageService.getUser().id;
      this.comment.userName = this.username
      
      this.getPost();
    }
  }

 sendComment(){
    this.commentService.creatComment(this.comment).subscribe(res=>{
      this.toastService.success('Bình luận thành công', 'Thành Công!');
     setTimeout(() => {
      location.reload()
     }, 1000);
    },
    error=>{
      this.toast.showWarning(error.error)
      console.log(error)}
    )
    // this.commentViewService.createComment(this.comment)
    // // this.comment.content = ""
    // setTimeout(() => {
    //   location.reload()
    // }, 1000);
  }
  getPost(){
    this.url = this.route.snapshot.params['url'];
    // this.url = this.route.snapshot.queryParams['url'];
    this.postService.getPostByUrl(this.url).subscribe(data => {
      this.comment.post.id = data.id;
      // console.log(this.comment.post.id);
    })
  }
  onSubmit(){  
      this.sendComment();
  }
}
