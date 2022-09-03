export class User {
  display_name: string = '';
  External_urls: External_urls = {spotify: ''};
  followers: Followers = {href: null, total: 0};
  href: string = '';
	id: string = '';
	images: string[] = [];
	type: string = '';
	uri: string = '';
}

export interface External_urls {
	spotify: string;
}

interface Followers {
	href: null;
	total: number;
}