import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PokerComponent } from "./layout/poker/poker.component";
import { HeaderComponent } from "./layout/poker/header/header.component";
import { MenuComponent } from "./layout/poker/menu/menu.component";

import { FooterComponent } from "./layout/poker/footer/footer.component";
import { SidebarComponent } from "./layout/poker/sidebar/sidebar.component";
import { ContentComponent } from "./layout/poker/content/content.component";
import { ContentBottomComponent } from "./layout/poker/content-bottom/content-bottom.component";

@NgModule({
  declarations: [
    AppComponent,
    PokerComponent,
    HeaderComponent,
    MenuComponent,

    FooterComponent,
    SidebarComponent,
    ContentComponent,
    ContentBottomComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
