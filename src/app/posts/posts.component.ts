import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  private posts;

  constructor(private http: HttpClient) {
    http
      .get("https://jsonplaceholder.typicode.com/posts")
      .subscribe(responce => {
        this.posts = responce;
      });
  }

  ngOnInit() {}
}
