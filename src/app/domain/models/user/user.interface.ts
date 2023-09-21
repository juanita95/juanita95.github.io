export class IUser {
  display_name: string = '';
  External_urls: IExternalUrls = {spotify: ''};
  followers: IFollowers = {href: null, total: 0};
  href: string = '';
	id: string = '';
	images: string[] = [];
	type: string = '';
	uri: string = '';
}

export interface IExternalUrls {
	spotify: string;
}

interface IFollowers {
	href: null;
	total: number;
}