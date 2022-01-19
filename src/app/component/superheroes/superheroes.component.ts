import { Component, OnInit } from '@angular/core';
import { SuperHeroe, SuperHeroesService} from "../../service/superheroes.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-superheroes',
  templateUrl: './superheroes.component.html',
  styleUrls: ['./superheroes.component.css']
})
export class SuperheroesComponent implements OnInit {

  super: SuperHeroe[] = [];


  constructor(private _superHeroeService: SuperHeroesService,
              private router: Router) { }

  ngOnInit(): void {
    this.super = this._superHeroeService.getSupers();
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
