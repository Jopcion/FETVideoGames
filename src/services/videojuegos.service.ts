import {Injectable} from "@angular/core";




@Injectable()
export class videojuegosService{
  private videojuegos: VideoJuego[]=[{

    nombre:'fornite',
    descripcion: 'Fortnite es un videojuego del año 2017' +
      ' desarrollado por la empresa Epic Games,' +
      ' lanzado como diferentes paquetes de software que presentan diferentes' +
      ' modos de juego, pero comparten el mismo motor de juego y ' +
      'mecánicas. 1. Fortnite Battle Royale',
    img:'assets/fornite.jpg',
    lanzamiento: '2017',
    consola : 'ps4'

  },
    {    nombre:'valorant',
      descripcion: 'Valorant es un videojuego de disparos en ' +
        'primera persona multijugador gratuito desarrollado y ' +
        'publicado por Riot Games. El juego se anunció por primera ' +
        'vez con el nombre en clave Project A en octubre de 2019.',
      img:'assets/valorant.jpg',
      lanzamiento: '2019',
      consola : 'pc(riot)'},
    {nombre:'FIFA18',
      descripcion: 'FIFA 18 es un videojuego de fútbol, desarrollado' +
        ' por Electronic Arts y publicado por EA Sports Canadá y EA Sports Rumania.' +
        ' Es el 25.º de la serie de videojuegos de la FIFA. Salió a la venta el 29 de ' +
        'septiembre de 2017, siendo la portada del mismo Cristiano Ronaldo',
      img:'assets/fifa.jpg',
      lanzamiento: '2017',
      consola : 'xbox'},
    {nombre:'League of Legends',
      descripcion: 'League of Legends (también conocido por sus siglas LoL)' +
        ' es un videojuego del género multijugador de arena de batalla en línea (MOBA)' +
        ' y deporte electrónico el cual fue desarrollado por Riot Games para Microsoft Windows' +
        ' y OS X y para consolas digitales',
      img:'assets/lol.jpg',
      lanzamiento: '2008',
      consola : 'pc(riot)'

    },
    {nombre:'God of war',
      descripcion: 'GOD OF WAR 1 PC Game es un juego de acción y aventura desarrollado' +
        ' por Santa Monica Studio y publicado por Sony Computer Entertainment (SCE). Fue' +
        ' lanzado por primera vez para la consola PlayStation 2 (PS2) el 22 de marzo de 2005,' +
        ' la primera parte de la serie del mismo nombre y la tercera en orden cronológico.',
      img:'assets/gow.jpg',
      lanzamiento: '2005',
      consola : 'ps4'},
    {nombre:'Farcry3',
      descripcion: 'Far Cry 3 (estilizado como FARCRY3) es un juego de acción y supervivencia ' +
        'en el trópico, creado por Ubisoft Montreal y Massive Studios que se lanzó el 29 de noviembre' +
        ' del 2012 para PlayStation 3, Xbox 360 ',
      img:'assets/fc.jpg',
      lanzamiento: '2012',
      consola : 'xbox'},
    {nombre:'Minecraft',
      descripcion: 'Minecraft es un videojuego de construcción, de tipo «mundo abierto» o sandbox' +
        ' creado originalmente por el sueco Markus Persson (conocido comúnmente como "Notch"), ' +
        'y posteriormente desarrollado por su empresa, Mojang Studios. Fue lanzado públicamente el 17 de mayo de 2009',
      img:'assets/minecraft.jpg',
      lanzamiento: '2009',
      consola : 'pc'

    },
    {
      nombre:'Among Us',
      descripcion: 'MAmong Usb​ (traducido como entre nosotros) es un videojuego de género party y' +
        ' multijugador en línea desarrollado por la compañía estadounidense InnerSloth y distribuido ' +
        'entre junio y noviembre de 2018 para las plataformas Android, iOS y Windows',
      img:'assets/among.jpg',
      lanzamiento: '2018',
      consola : 'pc'
    },
    {   nombre:'Mortal kombat x',
      descripcion: 'Mortal Kombat X es un videojuego de pelea creado por Ed Boon,' +
        ' desarrollado por NetherRealm Studios y publicado por Warner Bros. Interactive ' +
        'Entertainment, fue anunciado en junio de 2014, mediante un vídeo que mostraba a Sub-Zero' +
        ' y Scorpion peleando entre sí. Está disponible para PlayStation 4, Xbox One y Microsoft ' +
        'Windows desde el 14 de abril de 2015',
      img:'assets/mcb.jpg',
      lanzamiento: '2015',
      consola : 'ps4'},
    {  nombre:'call of duty black ops 3 ',
      descripcion: 'Call of Duty: Black Ops III es un videojuego de disparos en primera persona ' +
        'desarrollado por Treyarch, Beenox y Mercenary Technology, publicado por Activision. ' +
        'Es la 12° entrega de la saga Call of Duty y la tercera entrega de la saga Black Ops. ' +
        'Fue lanzado el 6 de noviembre de 2015. Desarrollado por Treyarch para PlayStation 4, Xbox One y PC',
      img:'assets/cod.jpg',
      lanzamiento: '2015',
      consola : 'xbox'}
  ];

  constructor() {
    console.log('servicio para usarse')
  }
  getVideoJuegos():VideoJuego[]{
    return this.videojuegos;

  }
getVideoJuego(idx:number){
    return this.videojuegos[idx];

}

buscarVideojuegos(termino: string):VideoJuego[]{
    let videojuegosArr: VideoJuego[]=[];
    termino = termino.toLowerCase();
    for (let videojuego of this.videojuegos){
      let nombre = videojuego.nombre.toLowerCase();
      if (nombre.indexOf(termino)>=0){
        videojuegosArr.push(videojuego);
      }
    }
return videojuegosArr;
}
}
export interface VideoJuego{
  nombre: string;
  descripcion:string;
  img:string;
  lanzamiento:string;
  consola:string;
}
