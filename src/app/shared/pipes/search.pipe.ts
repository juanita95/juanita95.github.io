import { Pipe, PipeTransform } from '@angular/core';
import { Artist, Track } from '../interfaces/track.interface';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(tracks: Track[], filter: string): Track[] {
    const filterTracks = tracks.filter((track: Track) =>
    track.name.toLowerCase().includes(filter.toLowerCase()) ||
    track.artists.find((artist: Artist) => artist.name.toLowerCase().includes(filter.toLowerCase()))
    );
    return filterTracks;
  }

}
