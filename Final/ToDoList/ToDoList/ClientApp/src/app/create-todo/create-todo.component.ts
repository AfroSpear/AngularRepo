import { Component, OnInit } from '@angular/core';
import { Localtodo } from '../localtodo';
import * as moment from 'moment';
import { TodoService } from '../todo.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.html']
})
export class CreateTodoComponent implements OnInit {

  DueTime: any = {
    "hour": 0,
    "minute": 0,
    "seconds": 0
  };


  DueDate: any = {
    "month": 0,
    "day": 0,
    "year" : 0
  }

  newTodo: Localtodo = {
    id: 0,
    name : "",
    DueDate: new Date(),
    tags: "",
    state:""

  };
  todoToEdit: Localtodo

  

  constructor(private todoservice: TodoService, private route: ActivatedRoute) { } 

  ngOnInit() {
    const routeParams = this.route.snapshot.params;
    if (routeParams.id) {
      this.route.paramMap.pipe(
        switchMap((params: ParamMap) =>
          this.todoservice.getLocalId(Number(params.get('id'))))
      ).subscribe((data: Localtodo) => this.populateForm(data));
    }
  }

  populateForm(todo: Localtodo) {
    
    this.newTodo.name = todo.name;
    
    var momentInstance = moment.utc(this.newTodo.DueDate).local();
    this.DueTime = {
      "hour": momentInstance.hour(),
      "minute": momentInstance.minute()
    }

    this.DueDate = {
      "month": momentInstance.month(),
      "day": momentInstance.day(),
      "year": momentInstance.year()
    }
  }



  createTodo() {
    if (this.newTodo.id) {
      this.todoservice.updateTodo(this.newTodo).subscribe(() => console.log('Item Updated'));
    } else {
      var selectedDate = new Date(this.DueDate.year, this.DueDate.month - 1, this.DueDate.day, this.DueTime.hour, this.DueTime.minute, 0, 0)
      var utcDate = moment(selectedDate).utc();
      this.newTodo.DueDate = utcDate.toDate();
      this.todoservice.createTodo(this.newTodo).subscribe(() => console.log('item added'));
    }
  }

}
