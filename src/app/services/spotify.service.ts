import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';


@Injectable(
  // {
  // providedIn: 'root'
  // }
)
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Servicio Spotify listo');
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders( {
      Authorization: 'Bearer BQD-kXYnXQL5TvjL7h03L5yaZbChDuHXv8RWj3CW9Qk92SEEvGI6E4mB0gG1lcs0KsFhMjOehz_xcJgj56c'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases')
      .pipe( map( data => data['albums'].items ));
  }

  getArtists(termino: string) {
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
      .pipe( map( data => data['artists'].items ));
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${ id }`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${ id }/top-tracks?country=mx`)
      .pipe( map( data => data['tracks'] ));
  }
}
