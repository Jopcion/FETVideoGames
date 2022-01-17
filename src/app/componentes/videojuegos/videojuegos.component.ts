import { Component, OnInit } from '@angular/core';
import {VideoJuego, videojuegosService} from "../../../services/videojuegos.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.component.html',
  styleUrls: ['./videojuegos.component.css']
})
export class VideojuegosComponent implements OnInit {

  videojuego: VideoJuego[]=[];
  constructor(private _videojuegosService:
                videojuegosService,
              private router:Router) {

  }

  ngOnInit() {
    this.videojuego = this._videojuegosService.getVideoJuegos();
  }
  verVideoJuego(idx: number) {
    this.router.navigate(['/videojuego/', idx]);
  }
}
