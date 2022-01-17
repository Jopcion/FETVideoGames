import {HomeComponent} from "./componentes/home/home.component";
import {AboutComponent} from "./componentes/about/about.component";
import {VideojuegosComponent} from "./componentes/videojuegos/videojuegos.component";
import {VideojuegoComponent} from "./componentes/videojuego/videojuego.component";
import {BuscadorComponent} from "./componentes/buscador/buscador.component";
import {RouterModule, Routes} from "@angular/router";


const APP_ROUTES: Routes =[
  {path:'home', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'videojuegos', component: VideojuegosComponent},
  {path: 'videojuego/:id', component: VideojuegoComponent},
  {path:'buscar/:termino', component: BuscadorComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
  ];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);


