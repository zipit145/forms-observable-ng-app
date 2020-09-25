import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { TodoService } from '../todo.service';
import { TodoListComponent } from './todo-list/todo-list.component';



@NgModule({
  declarations: [TodoCardComponent, TodoListComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  exports:[
    TodoCardComponent,
    TodoListComponent,
    MatCardModule,
    MatButtonModule
  ],
  providers:[
    TodoService
  ]
})
export class TodoCardModule { }
