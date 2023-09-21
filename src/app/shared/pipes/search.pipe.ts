import { Pipe, PipeTransform } from '@angular/core';
import { ITrack, IArtist } from 'src/app/domain/models/track/track.interface';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(tracks: ITrack[], filter: string): ITrack[] {
    const filterTracks = tracks.filter((track: ITrack) =>
    track.name.toLowerCase().includes(filter.toLowerCase()) ||
    track.artists.find((artist: IArtist) => artist.name.toLowerCase().includes(filter.toLowerCase()))
    );
    return filterTracks;
  }

}
