import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SuperHeroesService} from "../../service/superheroes.service";

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  super: any [] =[];
  termino: string ="";

  constructor(private activatedRoute: ActivatedRoute,
              private _superHeroeService: SuperHeroesService, private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.termino=params['termino'];
      this.super=this._superHeroeService.buscarPersonaje(this.termino);
      console.log(this.super);
    })
  }
  verSuper(idx: number) {
    this.router.navigate(['/superheroe/', idx]);
  }
  public setLike(i:number){
    this._superHeroeService.like(i);

  }
  public setDisLike(i:number){
    this._superHeroeService.disLike(i);
  }
}
