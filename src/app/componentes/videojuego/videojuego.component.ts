import { Component } from '@angular/core';
import {videojuegosService} from "../../../services/videojuegos.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-videojuego',
  templateUrl: './videojuego.component.html',
  styleUrls: ['./videojuego.component.css']
})
export class VideojuegoComponent   {
  videojuego: any = {};

  constructor(private _videojuegosService: videojuegosService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params)=>{
      this.videojuego = this._videojuegosService.getVideoJuego(params['id']);
    });
  }


}
