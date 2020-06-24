import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent {

  @Input() items: any[] = [];

  constructor(private router: Router) { }

  verArtista(item: any) {

    let artistaId: any;
    if (item.type === 'album') {
      artistaId = item.artists[0].id;
    } else {
      artistaId = item.id;
    }

    this.router.navigate(['/artist', artistaId]);

  }

}
