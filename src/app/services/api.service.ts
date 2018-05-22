import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Todo } from './../todo';

const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  // errorHandler
  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

  // API: GET /todos
  public getAllTodos() {
    // will use this.http.get()
    return this.http.get<Todo[]>(API_URL + '/todos');
  }

  // API: POST /todos
  public createTodo(todo: Todo) {
    // will use this.http.post()
    return this.http.post<Todo>(API_URL + '/todos', todo);
  }

  // API: GET /todos/:id
  public getTodoById(todoId: number) {
    return this.http.get<Todo>(API_URL + '/todos/' + todoId);
  }

  // API: PUT /todos/:id
  public updateTodo(todo: Todo) {
    // will use this.http.put()
    return this.http.put<Todo>(API_URL + '/todos/' + todo.id, todo);
  }

  // DELETE /todos/:id
  public deleteTodoById(todoId: number) {
    // will use this.http.delete()
    return this.http.delete<Todo>(API_URL + '/todos/' + todoId);
  }
}
