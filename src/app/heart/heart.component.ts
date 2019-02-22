import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "heart",
  templateUrl: "./heart.component.html",
  styleUrls: ["./heart.component.css"]
})
export class HeartComponent {
  @Input("isFavorite") heart: boolean;
  @Input("checked") count: number;
  @Output("stateChanged") countState = new EventEmitter();

  onClick() {
    this.heart = !this.heart;
    this.count += this.heart ? 1 : -1;
    this.countState.emit({
      count: this.count,
      isFavorite: this.heart
    });
  }
}
