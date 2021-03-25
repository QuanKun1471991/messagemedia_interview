export const LIMIT_RECORDS = 20;

export class Image {
  url: string;
  userName: string;
  avatarUrl: string;
  title: string;

  constructor(data) {
    this.url = data.images.original.url || "";
    this.userName = (data.user && data.user.username) || "";
    this.avatarUrl = (data.user && data.user.avatar_url) || "";
    this.title = data.title || "";
  }
}
