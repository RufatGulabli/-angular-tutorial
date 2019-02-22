import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

export interface EventArgs {
  value: boolean;
}

@Component({
  selector: "star",
  templateUrl: "./star.component.html",
  styleUrls: ["./star.component.css"]
})
export class StarComponent {
  @Input("is-Favorite") isSelected: boolean;
  @Output("change") click = new EventEmitter();

  onClick() {
    this.isSelected = !this.isSelected;
    this.click.emit({ value: this.isSelected });
  }
}
