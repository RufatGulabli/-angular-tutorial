import { UsernameValidators } from "./username.validator";
import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"]
})
export class SignUpComponent {
  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl("", [
        // UsernameValidators.shouldBeUnique,
        UsernameValidators.cannotContainSpace,
        Validators.required,
        Validators.minLength(3)
      ]),
      password: new FormControl("", Validators.required)
    })
  });
  get username() {
    return this.form.get("account.username");
  }
  get password() {
    return this.form.get("account.password");
  }
  login() {
    setTimeout(() => {
      this.form.setErrors({ uniqness: true });
    }, 1500);
  }
}
