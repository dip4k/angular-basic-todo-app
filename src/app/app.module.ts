import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { TodoDataService } from './services/todo-data.service';
import { ApiService } from './services/api.service';
import { AuthService } from './services/auth.service';
import { SessionService } from './services/session.service';

import { AppComponent } from './app.component';
import { TodoListHeaderComponent } from './todoListComponents/todo-list-header/todo-list-header.component';
import { TodoListComponent } from './todoListComponents/todo-list/todo-list.component';
import { TodoListItemComponent } from './todoListComponents/todo-list-item/todo-list-item.component';
import { TodoListFooterComponent } from './todoListComponents/todo-list-footer/todo-list-footer.component';
import { TodosComponent } from './todoComponents/todos/todos.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { SignInComponent } from './users/sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListHeaderComponent,
    TodoListComponent,
    TodoListItemComponent,
    TodoListFooterComponent,
    TodosComponent,
    PageNotFoundComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule, ReactiveFormsModule
  ],
  providers: [TodoDataService, ApiService, SessionService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
