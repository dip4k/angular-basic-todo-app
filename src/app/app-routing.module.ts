import { CanActivateTodosGuard } from './can-activate-todos.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodosResolver } from './todos.resolver';

import { PageNotFoundComponent } from './page-not-found.component';
import { SignInComponent } from './users/sign-in/sign-in.component';
import { TodosComponent } from './todoComponents/todos/todos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'todos',
    component: TodosComponent,
    canActivate: [CanActivateTodosGuard],
    resolve: {
      todos: TodosResolver
    }
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [TodosResolver, CanActivateTodosGuard]
})
export class AppRoutingModule {}
