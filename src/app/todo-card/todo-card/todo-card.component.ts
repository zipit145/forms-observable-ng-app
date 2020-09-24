import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css'],
  providers:  [ TodoService ]
})
export class TodoCardComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos()
    .subscribe(data => console.log(data))
  }

}
