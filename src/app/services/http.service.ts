import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  todoApi = 'localhost:8080/api/todos';

  constructor(private httpClient: HttpClient) {}

  createTodo(todo: Todo): Observable<Todo> {
    return this.httpClient.post<Todo>(this.todoApi, todo);
  }
}
      