import { Component } from "@angular/core";
import { EventArgs } from "./star/star.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Rufat Gulabli";
  viewMode: string = "other";
  post = {
    isFavorite: true,
    count: 10
  };
  private courses;
  private student = {
    name: "Rufat",
    surname: "Gulabli",
    address: {
      city: "Baku"
    }
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

  load() {
    this.courses = [
      { id: 1, name: "JavaScript Fundamentals" },
      { id: 2, name: "Advanced JavaScript" },
      { id: 3, name: "NodeJS Beginner to Guru" },
      { id: 4, name: "ExpressJS" },
      { id: 5, name: "HTML5/CSS3/Bootstrap4" }
    ];
  }

  trackByID(index, course) {
    return course ? course.id : undefined;
  }

  onDelete(item) {
    console.log(item);
    let courseId = this.courses.indexOf(item);
    console.log(courseId);
    this.courses.splice(courseId, 1);
  }
}
