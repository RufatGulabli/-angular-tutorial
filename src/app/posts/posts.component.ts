import { HttpErrorResponse } from "@angular/common/http";
import { PostService } from "./../services/post.service";
import { Component, OnInit } from "@angular/core";
import { Todo } from "../new-course/todo";

@Component({
  selector: "posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  public posts: Todo[];
  public errorMessage;
  constructor(private service: PostService) {}

  ngOnInit() {
    this.service.getPosts().subscribe(
      response => {
        this.posts = response as Todo[];
      },
      (error: HttpErrorResponse) => {
        this.errorMessage = error.statusText;
      }
    );
  }

  addTodo(newTodo: HTMLInputElement) {
    let post: Todo = new Todo();
    post.title = newTodo.value;
    newTodo.value = "";
    this.service.addTodo(post).subscribe(
      response => {
        post.id = response.id;
        this.posts.splice(0, 0, post);
      },
      (error: Response) => {
        console.log(error);
      }
    );
  }

  onDelete(post: Todo) {
    this.service.deleteTodo("daa422").subscribe(
      response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      (error: Response) => {
        if (error.status === 404) {
          alert("This post has already been deleted");
        } else {
          console.log(error);
        }
      }
    );
  }

  updatePost(post: Todo, newTodo: HTMLInputElement) {
    // this.http.patch(this.url, JSON.stringify({ title: newTodo.value })); // to change only few fields of an object
    post.title = newTodo.value;
    newTodo.value = "";
    this.service.updateTodo(post).subscribe(
      response => {
        console.log(response);
      },
      (error: Error) => console.log(error.message)
    );
  }
}
