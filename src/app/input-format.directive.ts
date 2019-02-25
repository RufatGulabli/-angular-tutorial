import { Directive, HostListener, ElementRef, Input } from "@angular/core";

@Directive({
  selector: "[appInputFormat]"
})
export class InputFormatDirective {
  @Input("appInputFormat") format: string;
  constructor(private el: ElementRef) {}
  @HostListener("blur") onBlur() {
    let value: string = this.el.nativeElement.value;
    if (this.format === "upper")
      this.el.nativeElement.value = value.toUpperCase();
    else this.el.nativeElement.value = value.toLowerCase();
  }
  // @HostListener("click") onclick() {
  //   console.log("OnClick");
  // }
  // @HostListener("focus") onFocus() {
  //   console.log("OnFocus");
  // }
}
