import {
  throwError as observableThrowError,
  Observable,
  throwError,
  of
} from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { SessionService } from './session.service';

import { environment } from '../../environments/environment';
import { Todo } from './../todo';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {
  constructor(private http: HttpClient, private session: SessionService) {}

  public signIn(username: string, password: string) {
    return this.http
      .post<SessionService>(API_URL + '/sign-in', {
        username,
        password
      })
      .pipe(map((response) => response), catchError(this.handleError));
  }

  // API: GET /todos
  public getAllTodos() {
    // will use this.http.get()
    return this.http
      .get<Todo[]>(API_URL + '/todos', this.getRequestOptions())
      .pipe(map((res) => res), catchError(this.handleError));
  }

  // API: POST /todos
  public createTodo(todo: Todo) {
    // will use this.http.post()
    return this.http.post<Todo>(
      API_URL + '/todos',
      todo,
      this.getRequestOptions()
    );
  }

  // API: GET /todos/:id
  public getTodoById(todoId: number) {
    return this.http.get<Todo>(
      API_URL + '/todos/' + todoId,
      this.getRequestOptions()
    );
  }

  // API: PUT /todos/:id
  public updateTodo(todo: Todo) {
    // will use this.http.put()
    return this.http.put<Todo>(
      API_URL + '/todos/' + todo.id,
      todo,
      this.getRequestOptions()
    );
  }

  // DELETE /todos/:id
  public deleteTodoById(todoId: number) {
    // will use this.http.delete()
    return this.http.delete<Todo>(
      API_URL + '/todos/' + todoId,
      this.getRequestOptions()
    );
  }

  // errorHandler
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  // get httpheder for api call
  private getRequestOptions() {
    // const headers = new Headers({
    //   Authorization: 'Bearer ' + this.session.accessToken
    // });

    return {
      headers: { Auth: 'Bearer ' + this.session.accessToken }
    };
  }
}
