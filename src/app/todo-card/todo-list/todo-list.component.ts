import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoService } from '../../todo.service';
import { Todo } from '../../todo';
import { map, take, takeUntil } from 'rxjs/operators';
import { from, Observable, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnDestroy {
  todos: Todo[];
  source: any;
  private destroy$: Subject<void> = new Subject<void>();
  // private getTodosSubscription: Subscription;
  // private getTodos: Observable<Todo[]>;

  constructor(private todoService: TodoService) {
    this.source = from([
      { name: 'Joe', age: 30 },
      { name: 'Frank', age: 20 },
      { name: 'Ryan', age: 50 }
    ]);
    // set this service call to a subscrition
    this.todoService.getTodos().pipe(
      takeUntil(this.destroy$)
    )
      .subscribe(data => this.todos = data)

      // subscription based approach
      // this.getTodos = this.todoService.getTodos()
      // this.getTodosSubscription = this.getTodos.subscribe(data => this.todos = data)

    // playing around with map, trying to figure out why this doesnt work.
    // this.todoService.getTodos()
    //   .pipe(
    //     map(({title}) => title)
    //   )
    //   .subscribe(data => console.log(data))
    this.source.pipe(map(({ name }) => name))
        .subscribe(data => console.log(data))
  }
  ngOnDestroy(): void {
    // unsubcribe the subscription for service call here
    // this.getTodosSubscription.unsubscribe
    this.destroy$.next();
    this.destroy$.complete();
  }
  ngOnInit(): void {

  }

}
