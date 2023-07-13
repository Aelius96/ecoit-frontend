import {Post} from "../post/post";

export class Comment {

    id:any ;
    content:any;
    date:any;
    parentId:any;
    status:any;
    userId :any;
    // commentChild:any;
    post: Post = new Post();

}
