import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../../todo.service';
import { Todo } from '../../todo';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css'],
  providers:  [ TodoService ]
})
export class TodoCardComponent implements OnInit {
  @Input() todo: Todo;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

}
