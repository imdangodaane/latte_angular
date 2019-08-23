export class Article {
  title: string;
  content: string;
  badges: Array<string>;
  author: string;
  slug: string;
  createAt?: Date;
  updateAt?: Date;
}
