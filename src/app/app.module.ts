import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CourseComponent } from "./course/course.component";
import { EmailService } from "./email.service";
import { StarComponent } from './star/star.component';

@NgModule({
  declarations: [AppComponent, CourseComponent, StarComponent],
  imports: [BrowserModule],
  providers: [EmailService],
  bootstrap: [AppComponent]
})
export class AppModule {}
