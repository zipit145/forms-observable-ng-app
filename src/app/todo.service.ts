import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Todo } from './todo';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';

// TODO read about lazy loading with provided in root added here
@Injectable()

export class TodoService {

  options: {
    headers?: HttpHeaders | {[header: string]: string | string[]},
    observe?: 'body' | 'events' | 'response',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'arraybuffer'|'blob'|'json'|'text',
    withCredentials?: boolean,
  }

  constructor(private http: HttpClient) { }
  
  getTodo(){
    return this.http.get<Todo>('https://jsonplaceholder.typicode.com/todos/1');
  }
  getTodos(): Observable<Todo[]>{
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  }
}
