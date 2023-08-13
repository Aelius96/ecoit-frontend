import {Hashtag} from "../hashtag/hashtag";

export class Product {
  id: any;
  image: any;
  banner:any;
  title: string;
  description: any
  content: any;
  date: any;
  url: any;
  selected = false;
  hashtags: Hashtag[] = [];
}
