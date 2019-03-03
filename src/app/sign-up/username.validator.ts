import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(" ") >= 0)
      return { cannotContainSpace: true };
    return null;
  }

  static shouldBeUnique(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "rufat") {
          return { shouldBeUnique: false };
        } else return null;
      }, 3000);
    });
  }

  // static shouldBeUnique(control: AbstractControl): ValidationErrors | null {
  //   if (control.value === "rufat") {
  //     return { shouldBeUnique: true };
  //   }
  //   return null;
  // }
}
