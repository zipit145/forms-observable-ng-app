import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { TodoService } from '../todo.service';



@NgModule({
  declarations: [TodoCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  exports:[
    TodoCardComponent,
    MatCardModule,
    MatButtonModule
  ],
  providers:[
    TodoService
  ]
})
export class TodoCardModule { }
