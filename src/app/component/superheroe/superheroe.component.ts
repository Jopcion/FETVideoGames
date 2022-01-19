import { Component } from '@angular/core';
import {SuperHeroesService} from "../../service/superheroes.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-superheroe',
  templateUrl: './superheroe.component.html',
  styleUrls: ['./superheroe.component.css']
})
export class SuperheroeComponent {
  super: any = {};

  constructor(private _superHeroeService: SuperHeroesService,
              private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe(params => {
      this.super = this._superHeroeService.getSuper(params['id'])
    })

  }


}
