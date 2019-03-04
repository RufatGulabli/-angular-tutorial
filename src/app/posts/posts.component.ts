import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Todo } from "../new-course/todo";

@Component({
  selector: "posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  private posts: Todo[];
  private url: string = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http: HttpClient) {
    http.get(this.url).subscribe(responce => {
      this.posts = responce as Todo[];
      console.log(this.posts);
    });
  }

  ngOnInit() {}

  addTodo(newTodo: HTMLInputElement) {
    let post: Todo = new Todo();
    post.title = newTodo.value;
    newTodo.value = "";
    this.http.post(this.url, JSON.stringify(post)).subscribe(response => {
      post.id = (response as Todo).id;
      console.log(post);
      this.posts.splice(0, 0, post);
    });
  }

  onDelete(post: Todo) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);
  }
}
