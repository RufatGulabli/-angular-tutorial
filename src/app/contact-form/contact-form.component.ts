import { Component } from "@angular/core";

@Component({
  selector: "contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.css"]
})
export class ContactFormComponent {
  contactMethods = [{ id: 1, name: "Email" }, { id: 2, name: "Phone" }];

  log(val) {
    console.log(val);
  }

  logger(val) {
    console.log(val);
  }

  submit(f) {
    console.log(f);
  }
}
