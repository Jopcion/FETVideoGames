/**
 * Archivo que gestiona las rutas de toda la aplicación
 *
 *
 */



/**
 * Importacciones necesarias de los componentes
 */

import {HomeComponent} from "./component/home/home.component";
import {AboutComponent} from "./component/about/about.component";
import {SuperheroeComponent} from "./component/superheroe/superheroe.component";
import {NavbarComponent} from "./component/navbar/navbar.component";
import {SuperheroesComponent} from "./component/superheroes/superheroes.component";
import {BuscadorComponent} from "./component/buscador/buscador.component";
import {Router, RouterModule, ROUTES} from "@angular/router";
import {VotosComponent} from "./component/votos/votos.component";

/**
 * Constante la cual tendrá todas la rutas la cuales se tienen acceso a la aplicación
 */
const APP_ROUTES =  [
  { path: "home", component: HomeComponent },
  { path: "votaciones", component: VotosComponent },
  { path: "superheroes", component: SuperheroesComponent },
  { path: "navbar", component: NavbarComponent },
  { path: "superheroe/:id", component: SuperheroeComponent },
  { path: "buscar/:termino", component: BuscadorComponent },
  { path: "**",pathMatch:"full",redirectTo:"home" }
];

export const APP_ROUTING=RouterModule.forRoot(APP_ROUTES);
