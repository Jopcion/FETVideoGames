import {Injectable} from "@angular/core";


@Injectable()
export class  SuperHeroesService {
  private superheroe: SuperHeroe[] = [
    {
      img: "assets/img/IronMan.webp",
      nombre: "Anthony Edward Stark",
      alias: "Iron Mann",
      especie: "Human",
      nacionalidad: "American",
      fechaNacimiento: "May 29, 1970",
      frase: "My armor, it was never a distraction or a hobby, it was a cocoon. And now, I'm a changed man. You can take away my house, all my tricks and toys. But one thing you can't take away... I am Iron Man.",
      like: 0,
      dislike: 0
    },
    {
      img: "assets/img/CapAmerica.webp",
      nombre: "Steven Grant Rogers",
      alias: "Captain America",
      especie: "Human",
      nacionalidad: "American",
      fechaNacimiento: "July 4, 1918",
      frase: "For as long as I can remember, I just wanted to do what was right. I guess I'm not quite sure what that is anymore. And I thought I could throw myself back in and follow orders, serve. It's just not the same.",
      like: 0,
      dislike: 0
    },
    {
      img: "assets/img/Thor.webp",
      nombre: "Thor Odinson",
      alias: "Thor",
      especie: "Asgardian",
      nacionalidad: "Asgardian",
      fechaNacimiento: "964 A.D.–965 A.D.",
      frase: "It's time for me to be who I am, rather than who I'm supposed to be.",
      like: 0,
      dislike: 0
    },
    {
      img: "assets/img/Hulk.webp",
      nombre: "Bruce Banner",
      alias: "Hulk ",
      especie: "Human",
      nacionalidad: "American Sakaaran",
      fechaNacimiento: "December 18, 1969",
      frase: "For years, I've been treating the Hulk like he's some kind of disease... something to get rid of. But then, I start looking at him as the cure. Eighteen months in a gamma lab, I put the brains and the brawn together. And now, look at me. Best of both worlds.",
      like: 0,
      dislike: 0
    },
    {
      img: "assets/img/AntMan.webp",
      nombre: "Scott Edward Harris Lang",
      alias: "Ant Man",
      especie: "Human",
      nacionalidad: "American",
      fechaNacimiento: "NA",
      frase: "I do some dumb things and the people that I love the most pay the price. Mainly you.",
      like: 0,
      dislike: 0
    },
    {
      img: "assets/img/SpiderMan.webp",
      nombre: "Peter Benjamin Parker",
      alias: "Spider Man",
      especie: "Human",
      nacionalidad: "American",
      fechaNacimiento: "August 10, 2001",
      frase: "Truth is... that this is all my fault. I accidentally brought those dangerous people here. And if those people are watching... just know that I really did try to help you. I mean, I could've killed you. At any given moment, but I didn't. Because my Aunt May taught me that everyone deserves a second chance.",
      like: 0,
      dislike: 0
     },
    {
      img: "assets/img/DoctorStrange.webp",
      nombre: "Stephen Vincent Strange",
      alias: "Doctor Strange",
      especie: "Human",
      nacionalidad: "American",
      fechaNacimiento: "August 10, 2001",
      frase: "Truth is... that this is all my fault. I accidentally brought those dangerous people here. And if those people are watching... just know that I really did try to help you. I mean, I could've killed you. At any given moment, but I didn't. Because my Aunt May taught me that everyone deserves a second chance.",
      like: 0,
      dislike: 0
    },
    {
      img: "assets/img/CapMarvel.webp",
      nombre:"Carol Susan Jane Danvers",
      alias: "Captain Marvel",
      especie: "Human/Kree Hybrid",
      nacionalidad: "American Kree Imperial",
      fechaNacimiento: "Mid-1960s",
      frase: "I'm coming to end it. The war, the lies, all of it.",
      like: 0,
      dislike: 0
    },
    {
      img: "assets/img/BlackPanther.webp",
      nombre: "T'Challa",
      alias: "Black Panther",
      especie: "Human",
      nacionalidad: "Wakandan",
      fechaNacimiento: "NA",
      frase: "My name is King T'Challa, son of King T'Chaka. I am the sovereign ruler of the nation of Wakanda. And for the first time in our history, we will be sharing our knowledge and resources with the outside world.",
      like: 0,
      dislike: 0
    },
    {
      img: "assets/img/Loki.webp",
      nombre: "Loki Laufeyson",
      alias: "Loki",
      especie: "Frost Giant",
      nacionalidad: "Asgardian Jotun",
      fechaNacimiento: "965 A.D.",
      frase: "I, Loki, Prince of Asgard, Odinson, the rightful King of Jotunheim, God of Mischief, do hereby pledge to you, my undying fidelity.",
      like: 0,
      dislike: 0
    },
    {
      img: "assets/img/BlackWidow.webp",
      nombre: "Natalia Alianovna Romanoff",
      alias: "Black Widow",
      especie: "Human",
      nacionalidad: "Russian",
      fechaNacimiento: "December 3, 1984",
      frase: "I used to have nothing. And then I got this. This job. This family. And I was better because of it. And even though they're gone... I'm still trying to be better.",
      like: 0,
      dislike: 0
    }
  ];

    constructor() {
    console.log("servicio listo para usarse");
  }

  getSupers(): SuperHeroe[] {
    return this.superheroe;
  }

  getSuper(idx: number) {
    return this.superheroe[idx];
  }
  like(idx: number) {
    let likes: number = this.superheroe[idx].like;
    likes++;
    this.superheroe[idx].like = likes;
  }
  disLike(idx: number) {
    let disLikes: number = this.superheroe[idx].dislike;
    disLikes++;
    this.superheroe[idx].dislike = disLikes;
  }

  buscarPersonaje(termino: string): SuperHeroe[] {
    let PersonajeArr: SuperHeroe[] = [];
    termino = termino.toLowerCase();
    this.superheroe.forEach(sup => {
      let nombre = sup.nombre.toLowerCase();
      if (nombre.indexOf(termino) >= 0) {
        PersonajeArr.push(sup);
      }
    });
    return PersonajeArr;
  }
}



export interface SuperHeroe {
  nombre: string;
  alias: string;
  especie: string;
  nacionalidad: string;
  fechaNacimiento: string;
  frase: string;
  img: string;
  like: number;
  dislike: number;
}
