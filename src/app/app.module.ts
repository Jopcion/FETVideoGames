import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { BuscadorComponent } from './component/buscador/buscador.component';
import { SuperheroeComponent } from './component/superheroe/superheroe.component';
import { SuperheroesComponent } from './component/superheroes/superheroes.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import {RouterModule} from "@angular/router";
import {APP_ROUTING} from "./app.routes";
import {SuperHeroesService} from "./service/superheroes.service";
import { VotosComponent } from './component/votos/votos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BuscadorComponent,
    SuperheroeComponent,
    SuperheroesComponent,
    HomeComponent,
    AboutComponent,
    VotosComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    SuperHeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
