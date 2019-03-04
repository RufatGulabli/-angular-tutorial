import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ReplaceSource } from "webpack-sources";

@Component({
  selector: "posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  private posts: [];
  private url: string = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http: HttpClient) {
    http.get(this.url).subscribe(responce => {
      this.posts = responce;
    });
  }

  ngOnInit() {}

  addTodo(newTodo: HTMLInputElement) {
    let post = { title: newTodo.value };
    newTodo.value = "";
    this.http.post(this.url, JSON.stringify(post)).subscribe(response => {
      console.log(response);
      post["id"] = JSON.parse(response).id;
      // this.posts.splice(0, 0, post);
      console.log(post);
    });
  }
}
