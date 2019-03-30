import { PostService } from "./../services/post.service";
import { Component, OnInit } from "@angular/core";
import { Todo } from "../new-course/todo";
import { AppError } from "./../Error/AppError";
import { NotFoundError } from "../Error/NotFoundError";
import { BadInput } from "../Error/BadInput";

@Component({
  selector: "posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  public posts: Todo[];
  public errorMessage: AppError;
  constructor(private service: PostService) {}

  ngOnInit() {
    this.service.getAll().subscribe(
      response => {
        this.posts = response;
      },
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          this.errorMessage = error;
        } else {
          throw error;
        }
      }
    );
  }

  addTodo(newTodo: HTMLInputElement) {
    let post: Todo = new Todo();
    post.title = newTodo.value;
    newTodo.value = "";
    this.service.create(post).subscribe(
      response => {
        post.id = response.id;
        this.posts.splice(0, 0, post);
      },
      (error: AppError) => {
        if (error instanceof BadInput) {
          this.errorMessage = error;
        } else {
          throw error;
        }
      }
    );
  }

  onDelete(post: Todo) {
    this.service.delete(post.id).subscribe(
      response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          alert("This post has already been deleted");
        } else {
          throw error;
        }
      }
    );
  }

  updatePost(post: Todo, newTodo: HTMLInputElement) {
    // this.http.patch(this.url, JSON.stringify({ title: newTodo.value })); // to change only few fields of an object
    post.title = newTodo.value;
    newTodo.value = "";
    this.service.update(post).subscribe(response => {
      console.log(response);
    });
  }
}
