import { Tag } from "../tag/tag";

export class News {
  id: number
  image: any;
  title: string;
  content: string;
  date: any;
  description: string;
  url: string;
  tag? : Tag[];
}
