import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "star",
  templateUrl: "./star.component.html",
  styleUrls: ["./star.component.css"]
})
export class StarComponent implements OnInit {
  @Input("title") title: string;
  @Input() isFavorite: boolean;
  className: string = this.isFavorite
    ? "fas fa-star fa-3x"
    : "far fa-star fa-3x";

  constructor() {
    console.log(this.isFavorite);
  }

  ngOnInit(): void {}

  onClick() {
    this.className = this.isFavorite
      ? "fas fa-star fa-3x"
      : "far fa-star fa-3x";
    this.isFavorite = !this.isFavorite;
    console.log("isFavorite : ", this.isFavorite);
    console.log("className : ", this.className);
  }
}
