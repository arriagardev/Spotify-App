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
      Authorization: 'Bearer BQDB1E-9CZWRLd3K-A2IngH2lrwcOaBU_0-Y6Zaqk3qMWm2gqoYSuLJCXop6_6qPEMStEV0gxXZEq8m4HCs'
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
}
