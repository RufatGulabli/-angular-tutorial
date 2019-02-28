import { Component, OnInit } from "@angular/core";

@Component({
  selector: "enrolment-form",
  templateUrl: "./enrolment-form.component.html",
  styleUrls: ["./enrolment-form.component.css"]
})
export class EnrolmentFormComponent {
  categories = [
    { id: 1, name: "Software Development" },
    { id: 2, name: "FrontEnd" },
    { id: 3, name: "Backend" },
    { id: 4, name: "Marketing" }
  ];

  onSubmit(course) {
    console.log(course);
  }
}
