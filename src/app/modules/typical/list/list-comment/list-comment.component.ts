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
      this.getCommentChildByParent()
      // this.getPost();
    }

      this.getAllComment()
    }

  // hiển thị
  // getRequestParams(id: number):any{
  //   let params: any = {};
  //
  //   if (id) {
  //     params[`postId`] = id;
  //   }
  // }

  // sendChildComment(){
  //   this.commentService.creatComment(this.comment).subscribe(res=>{
  //     let option = confirm('Bình luận thành công!');
  //       if(option){
  //         window.location.reload();
  //       }
  //
  //     },
  //     error=>{console.log(error)}
  //   )
  // }
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
    this.commentService.getParentCommentActive().subscribe(data=>{
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
    // this.sendChildComment();
  }
}
