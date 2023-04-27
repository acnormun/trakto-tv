import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MaterialDidaticoComponent } from './material-didatico/material-didatico.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { NextDirective } from './next.directive';
import { PrevDirective } from './prev.directive';
import { NextYtDirective } from './next-yt.directive';
import { PrevYtDirective } from './prev-yt.directive';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    MaterialDidaticoComponent,
    CarouselComponent,
    CardComponent,
    NextDirective,
    PrevDirective,
    NextYtDirective,
    PrevYtDirective,
    ConteudoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
