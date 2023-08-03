import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/core/model/comment/comment';
import { CommentService } from 'src/app/services/comment/comment.service';
import { PostService } from 'src/app/services/post/post.service';
import { TokenStorageService } from 'src/app/services/token-storage/token-storage.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

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
  parentId: number;
  postId :any;
  postIdByChild: any;

  paging={
    page: 1,
    size: 5,
    totalRecord: 0,
    search:'',
  }

constructor(
            private commentService: CommentService,
            private tokenStorageService: TokenStorageService){}

  ngOnInit(): void {
    
    if(this.tokenStorageService.getToken()){
      this.username = this.tokenStorageService.getUser().username;
      this.userId = this.tokenStorageService.getUser().id;
      this.comment.user.id = this.userId;
      console.log(this.userId)
    }
      this.getAllCommentAdminWithPage()
      this.getCommentChildAdmin()
    }

    getParams(page:number , pageSize : number , search:String ){
      let params:any = {}
      if(page){
        params[`pageNo`] = page-1;
      }
      if(pageSize){
        params[`pageSize`]=pageSize;
      }
      if(search){
        params[`search`] = search;
      }
      return params
    }

  getAllCommentAdminWithPage():void{
    const params = this.getParams(this.paging.page , this.paging.size ,this.paging.search);
    this.commentService.getListCommentwithPageAdmin(params).subscribe(res=>{
     this.commentList = res.content;
    this.paging.totalRecord = res.totalElements;
      console.log(this.commentList)
    }, 
    error=>{
      console.log(error)
    }
    )
  }
    // 
  getAllCommentAdmin(){
    this.commentService.getParentCmtAdmin().subscribe(data=>{
        this.commentList = data;
       
        console.log(this.postId);
      },
      error=>{
        console.error(error)
      }
    );
  }

  addParentId(id: number, postId:number){
    this.comment.parentId = id;
    this.comment.post.id = postId;
  }

  // chỉnh sửa
  updateComment(id:number , comment:Comment ){
    this.commentService.updateComment(id ,comment).subscribe(response=>{
      let option = confirm('Cập nhật thành công!');
        if(option){
          window.location.reload();
          console.log(response)
        }
      },
      error=>{console.log(error)
    })
  }


  RepComment(){
    this.commentService.creatComment(this.comment).subscribe(respon=>{
      let cf = confirm('Trả lời thành công')
        if(cf){
          window.location.reload();
          console.log(respon);
        }
    }, error=>{console.log(error)}
    )
  }

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
      this.getAllCommentAdminWithPage();
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
      this.getAllCommentAdminWithPage();
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
      this.getAllCommentAdminWithPage();
    })
  }}
  DeleteChild(id:number){
    let cf = confirm("Xóa bình luận")
    if(cf){
    this.commentService.deleteComment(id).subscribe(()=>{
    this.getCommentChildAdmin()
    })
  }}

  search():void{
    this.paging.page=1;
    this.getAllCommentAdminWithPage()
  }

  handPageChange(event:number):void{
    this.paging.page = event;
    this.getAllCommentAdminWithPage();
  }
  handlePageSizeChange(event:any):void{
    this.paging.size = event;
    this.paging.page = 1;
    this.getAllCommentAdminWithPage()
  }
}
