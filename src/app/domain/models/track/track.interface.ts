import { IExternalUrls } from "../user/user.interface";

export class ITrack {
	album!: Album;
  artists: IArtist[] = [];
  available_markets: string[] = [];
  disc_number: number = 0;
  duration_ms: number = 0;
  explicit: boolean = false;
  external_ids: string = '';
  href: string = '';
  isFavorite: boolean = false
  id: string = '';
  is_local: boolean = false;
  name: string = '';
  popularity: number = 0;
  preview_url: null | string = '';
  track_number: number = 0;
  type: string = '';
  uri: string = '';
}

export interface Album {
  album_type: string;
  artists: IArtist[];
  available_markets: string[];
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: Date;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

export interface IArtist {
  external_urls: IExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface Image {
  height: number | null;
  url: string;
  width: number | null;
}
