import {Hashtag} from "../hashtag/hashtag";

export class Product {
  id: any;
  image: any;
  title: string;
  description: any
  content: any;
  url: any;
  selected = false;
  hashtags: Hashtag[] = [];
}
