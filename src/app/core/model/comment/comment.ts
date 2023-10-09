import { Category } from "../category/category";
import {Post} from "../post/post";

export class Comment {

    id:any ;
    content:any;
    date:any;
    parentId:any;
    status:any;
    userName : string
    // commentChild:any;
    post: Post = new Post();
    cate: Category = new Category();
}
