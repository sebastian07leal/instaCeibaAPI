export class UserPost {

  private title: string;
  private likes: number;
  private comment:  Array<string>;
  private url: string

  constructor(_likes: number, _title: string, _comments: Array<string>, _url: string) {
    this.likes = _likes;
    this.title = _title;
    this.comment = _comments;
    this.url = _url;
  }

}
