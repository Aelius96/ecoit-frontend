import {Category} from "../category/category";
import {Hashtag} from "../hashtag/hashtag";
import {Image} from "../image/image";


export class Post {
  id: any;
  image: any;
  title: any;
  content: string;
  date: any;
  description: any;
  url: string;
  banner: any;
  category: Category = new Category();
  hashtags: Hashtag[] = [];
}
