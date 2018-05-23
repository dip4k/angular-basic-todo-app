import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';

import { TodoDataService } from './services/todo-data.service';

import { Todo } from './todo';

@Injectable()
export class TodosResolver implements Resolve<Observable<Todo[]>> {
  constructor(private todoDataService: TodoDataService) {}

  public resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Todo[]> {
    return this.todoDataService.getAllTodos();
  }
}
