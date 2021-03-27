export const LIMIT_RECORDS = 20;

export class Image {
  id: string;
  url: string;
  userName: string;
  avatarUrl: string;
  title: string;
  profileUrl: string;

  constructor(data) {
    this.id = data.id;
    this.url = data.images.original.url || "";
    this.userName = (data.user && data.user.username) || "";
    this.avatarUrl = (data.user && data.user.avatar_url) || "";
    this.title = data.title || "";
    this.profileUrl = (data.user && data.user.profile_url) || "";
  }
}
