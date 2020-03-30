export class UserPost {

  public title: string;
  public likes: number;
  public comment:  string;
  public url: string

  constructor(_likes: number, _title: string, _comments: string, _url: string) {
    this.likes = _likes;
    this.title = _title;
    this.comment = _comments;
    this.url = _url;
  }

  getTitle(): string {
    return this.title;
  }

  getLikes(): number {
    return this.likes;
  }

  getCommnet(): string {
    return this.comment;
  }

  getUrl(): string {
    return this.url;
  }
  

}
