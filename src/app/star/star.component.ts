import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "star",
  templateUrl: "./star.component.html",
  styleUrls: ["./star.component.css"]
})
export class StarComponent implements OnInit {
  @Input("isFavorite") isFavorite: boolean;
  className: string;

  constructor() {}

  ngOnInit(): void {
    this.className = this.isFavorite
      ? "fas fa-star fa-3x"
      : "far fa-star fa-3x";
  }

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.className = this.isFavorite
      ? "fas fa-star fa-3x"
      : "far fa-star fa-3x";
    console.log("isFavorite : ", this.isFavorite);
    console.log("className : ", this.className);
  }
}
