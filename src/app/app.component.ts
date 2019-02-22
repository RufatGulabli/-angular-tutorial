import { Component } from "@angular/core";
import { EventArgs } from "./star/star.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Rufat Gulabli";
  post = {
    isFavorite: true,
    count: 10
  };

  onChange(eventArgs: EventArgs) {
    console.log(eventArgs.value);
  }

  stateChanged(args) {
    this.post.count = args.count;
    this.post.isFavorite = args.isFavorite;
    console.log(this.post.count);
    console.log(this.post.isFavorite);
  }
}
