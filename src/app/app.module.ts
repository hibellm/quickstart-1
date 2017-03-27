import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { UserComponent }  from './components/user.component';
import { AboutComponent }  from './components/about.component';
import { d3Component }  from './components/d3.component';
import { navComponent }  from './components/nav.component';
import { routing }  from './app.routing';

@NgModule({
  imports:      [ CommonModule, BrowserModule, FormsModule, HttpModule, routing ],
  declarations: [ AppComponent, UserComponent , AboutComponent, d3Component, navComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
