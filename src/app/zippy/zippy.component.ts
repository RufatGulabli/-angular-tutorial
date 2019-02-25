import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "zippy",
  templateUrl: "./zippy.component.html",
  styleUrls: ["./zippy.component.css"]
})
export class ZippyComponent {
  @Input("basliq") title: string;
  showHide: boolean = false;

  onClick() {
    this.showHide = !this.showHide;
  }
}
