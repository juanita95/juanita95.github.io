import { HttpClient, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../interfaces/auth.interface';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

    constructor(private http: HttpClient, private route: ActivatedRoute ) {}

  getUser(): Observable<User>{
    return this.http.get<User>(`${environment.spotify_api}/me`);
  }

}
