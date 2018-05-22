import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TodoDataService } from './services/todo-data.service';

import { AppComponent } from './app.component';
import { TodoListHeaderComponent } from './todoListComponents/todo-list-header/todo-list-header.component';

@NgModule({
  declarations: [AppComponent, TodoListHeaderComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [TodoDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
