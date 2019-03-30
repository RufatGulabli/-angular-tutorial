import { AppError } from "./../Error/AppError";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { Todo } from "../new-course/todo";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class PostService {
  private url: string = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url).pipe(catchError(this.errorHandler));
  }

  addTodo(post: Todo): Observable<Todo> {
    return this.http
      .post<Todo>(this.url, JSON.stringify(post))
      .pipe(catchError(this.errorHandler));
  }

  deleteTodo(id) {
    return this.http
      .delete(this.url.concat("/" + id))
      .pipe(catchError(this.errorHandler));
  }

  updateTodo(todo: Todo): Observable<Todo> {
    return this.http
      .put<Todo>(this.url.concat("/" + todo.id), JSON.stringify(todo))
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
