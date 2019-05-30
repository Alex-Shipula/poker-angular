import { Component, OnInit } from "@angular/core";


@Component({
  selector: "app-poker",
  templateUrl: "./poker.component.html",
  styleUrls: ["./poker.component.scss"]
})
export class PokerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
fetch("https://jsonplaceholder.typicode.com/photos/5")
  .then(response => response.json())
  .then(json => console.log(json));

