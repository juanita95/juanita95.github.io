import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Track } from 'src/app/shared/interfaces/track.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TrackService {

  constructor(private http: HttpClient) {}
  
  public getTracks(genre: string): Observable<Track[]> {
    return this.http.get<Track[]>(`${environment.spotify_api}/recommendations?seed_genres=${genre}`);
  }

}
