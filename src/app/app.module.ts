import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CounterModule } from './counter/Components/counter.module';

import { AppComponent } from './app.component';
import { HeroesModules } from './heroes/heroes.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
