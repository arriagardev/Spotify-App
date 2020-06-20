import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  loading: boolean;
  artistas: any[] = [];
  constructor(private servicio: SpotifyService) { }

  buscar(termino: string) {
    this.loading = true;
    this.servicio.getArtists(termino)
      .subscribe( (data: any) => {
        this.artistas = data;
        // console.log(this.artistas);
        this.loading = false;
      });
  }

}
