import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokerComponent } from './layout/poker/poker.component';
import { HeaderComponent } from './layout/poker/header/header.component';
import { MenuComponent } from './layout/poker/menu/menu.component';
import { MainComponent } from './layout/poker/main/main.component';
import { FooterComponent } from './layout/poker/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PokerComponent,
    HeaderComponent,
    MenuComponent,
    MainComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
