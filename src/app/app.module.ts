import { FollowersService } from "./services/followers.service";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgModule, ErrorHandler } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { GlobalErrorHandler } from "./Error/globalErrorHandler";
import { AppComponent } from "./app.component";
import { CourseComponent } from "./course/course.component";
import { EmailService } from "./email.service";
import { StarComponent } from "./star/star.component";
import { BootstrapPanelComponent } from "./bootstrap-panel/bootstrap-panel.component";
import { HeartComponent } from "./heart/heart.component";
import { InputFormatDirective } from "./input-format.directive";
import { ZippyComponent } from "./zippy/zippy.component";
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { EnrolmentFormComponent } from "./enrolment-form/enrolment-form.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { NewCourseComponent } from "./new-course/new-course.component";
import { PostsComponent } from "./posts/posts.component";
import { PostService } from "./services/post.service";
import { NavbarComponent } from "./navbar/navbar.component";
import { GithubfollowersComponent } from "./githubfollowers/githubfollowers.component";

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    StarComponent,
    BootstrapPanelComponent,
    HeartComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    EnrolmentFormComponent,
    SignUpComponent,
    NewCourseComponent,
    PostsComponent,
    NavbarComponent,
    GithubfollowersComponent
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],

  providers: [
    EmailService,
    PostService,
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    FollowersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
