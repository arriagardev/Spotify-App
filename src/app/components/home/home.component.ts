import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  lanzamientos: any[] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService) {

    this.loading = true;
    this.spotify.getNewReleases()
      .subscribe( (data: any) => {
        this.loading = false;
        this.lanzamientos = data;
      });

  }

}
