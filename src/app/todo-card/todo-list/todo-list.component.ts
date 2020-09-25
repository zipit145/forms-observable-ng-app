import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../todo.service';
import { Todo } from '../../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers:  [ TodoService ]
})
export class TodoListComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos()
    .subscribe(data => this.todos = data )
  }

}
