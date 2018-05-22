import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TodoDataService } from './services/todo-data.service';

import { AppComponent } from './app.component';
import { TodoListHeaderComponent } from './todoListComponents/todo-list-header/todo-list-header.component';
import { TodoListComponent } from './todoListComponents/todo-list/todo-list.component';
import { TodoListItemComponent } from './todoListComponents/todo-list-item/todo-list-item.component';
import { TodoListFooterComponent } from './todoListComponents/todo-list-footer/todo-list-footer.component';

@NgModule({
  declarations: [AppComponent, TodoListHeaderComponent, TodoListComponent, TodoListItemComponent, TodoListFooterComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [TodoDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
