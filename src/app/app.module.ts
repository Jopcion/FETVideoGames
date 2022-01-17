import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { BuscadorComponent } from './componentes/buscador/buscador.component';
import { VideojuegoComponent } from './componentes/videojuego/videojuego.component';
import { VideojuegosComponent } from './componentes/videojuegos/videojuegos.component';
import { AboutComponent } from './componentes/about/about.component';

import {APP_ROUTING} from "./app.routes";
import {videojuegosService} from "../services/videojuegos.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BuscadorComponent,
    VideojuegoComponent,
    VideojuegosComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,


  ],
  providers: [videojuegosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
