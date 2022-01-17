import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {VideoJuego, videojuegosService} from "../../../services/videojuegos.service";


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  videojuegos: any[] =[];
  termino: string= "";

  constructor(private activateRoute: ActivatedRoute,
  private _videojuegosService:videojuegosService,
              private router:Router) {

  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params)=>{
      this.termino = params['termino'];
      this.videojuegos = this._videojuegosService.buscarVideojuegos(params['termino']);
      console.log(this.videojuegos);
    });
  }
  verVideoJuego(idx: number) {
    this.router.navigate(['/videojuego/', idx]);
  }

}
