import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PokerComponent } from "./layout/poker/poker.component";
import { HeaderComponent } from "./components/header/header.component";
import { MenuComponent } from "./components/menu/menu.component";

import { FooterComponent } from "./components/footer/footer.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { ContentComponent } from "./components/content/content.component";
import { ContentBottomComponent } from "./components/content-bottom/content-bottom.component";
import { PlayComponent } from './components/play/play.component';
import { Error404PageComponent } from './components/error404-page/error404-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PokerComponent,
    HeaderComponent,
    MenuComponent,

    FooterComponent,
    SidebarComponent,
    ContentComponent,
    ContentBottomComponent,
    PlayComponent,
    Error404PageComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
