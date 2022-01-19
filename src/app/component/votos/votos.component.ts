import { Component, OnInit } from '@angular/core';
import {SuperHeroe, SuperHeroesService} from "../../service/superheroes.service";

@Component({
  selector: 'app-votos',
  templateUrl: './votos.component.html',
  styleUrls: ['./votos.component.css']
})
export class VotosComponent implements OnInit {

  Supers:SuperHeroe []=[];
  SuperOrdenados:SuperHeroe []=[];

  constructor(private _superHeroesService:SuperHeroesService) { }

  ngOnInit(): void {
    this.Supers=this._superHeroesService.getSupers();
    this.organizarPersonasLike();
  }

  private organizarPersonasLike(){
    let mayorLke:number=this.Supers[0].like;
    let mayorDislike:number=this.Supers[0].dislike;

    let posi_mayor_megusta:number=0;
    let posi_mayor_no_megusta:number=0;

    for(let i=0; i<this.Supers.length;i++){
      if (this.Supers[i].like>mayorLke){
        mayorLke=this.Supers[i].like;
      }
    }

    for(let i=0; i<this.Supers.length;i++){
      if (this.Supers[i].dislike>mayorDislike){
        mayorDislike=this.Supers[i].dislike;
      }
    }

    for (let index = 0; index < this.Supers.length; index++) {
      if (this.Supers[index].like==mayorLke) {
        posi_mayor_megusta= index;
      }
      if (this.Supers[index].dislike==mayorDislike) {
        posi_mayor_no_megusta= index;
      }
    }

    this.SuperOrdenados.push(this.Supers[posi_mayor_megusta]);
    this.SuperOrdenados.push(this.Supers[posi_mayor_no_megusta]);

  }

}
