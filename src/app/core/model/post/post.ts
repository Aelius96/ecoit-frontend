import {Category} from "../category/category";
import {Hashtag} from "../hashtag/hashtag";


export class Post {
  id: any;
  image: any;
  title: string;
  content: string;
  date: any;
  description: string;
  url: string;
  banner: any;
  category: Category ;
  hashtags: Hashtag[] = [];


}
