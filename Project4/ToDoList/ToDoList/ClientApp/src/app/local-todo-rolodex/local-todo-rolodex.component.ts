import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Localtodo } from '../localtodo';
import * as moment from 'moment';

@Component({
  selector: 'app-local-todo-rolodex',
  templateUrl: './local-todo-rolodex.component.html',
  styleUrls: ['./local-todo-rolodex.component.css']
})
export class LocalTodoRolodexComponent implements OnInit {

  localTodos: Localtodo[];
  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.refreshTodo();
  }

  delete(todoId: number) {
    this.todoService.DeleteLocalTodo(todoId).subscribe(() => this.refreshTodo()) ;
  }

  refreshTodo() {
    this.todoService.getLocalTodo().subscribe((data: Localtodo[]) => this.localTodos = data)
    
  }

}
