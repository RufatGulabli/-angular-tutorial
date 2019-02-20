import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Rufat Gulabli";
  post = {
    title: "Hello",
    isFavorite: true
  };
}
