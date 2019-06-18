import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PlayComponent } from "./components/play/play.component";
import { ContentComponent } from "./components/content/content.component";
import { Error404PageComponent } from './components/error404-page/error404-page.component';
const routes: Routes = [
 /* 
  {
    path: "play",
    component: PlayComponent
  },
  {
    path: "",
    component: ContentComponent
  }*/
  // {
  //   path: "",
  //   redirectTo: "/play",
  //   pathMatch: "full"
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
