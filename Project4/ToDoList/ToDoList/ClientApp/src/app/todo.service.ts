import { Injectable } from '@angular/core';
import { Localtodo } from './localtodo';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  constructor(private http: HttpClient) { }


  createTodo(todo: Localtodo): Observable<Localtodo> {
    return this.http.post<Localtodo>('api/ToDo', todo);
  }

  getLocalTodo(): Observable<Localtodo[]> {
    return this.http.get< Localtodo[]>('api/ToDo')
  }

  DeleteLocalTodo(todoId : number): Observable<Localtodo> {
    return this.http.delete<Localtodo>(`api/ToDo/${todoId}`)
  }

  getLocalId(todoId: number): Observable<Localtodo> {
    return this.http.get<Localtodo>(`api/ToDo/${todoId}`)
  }

  updateTodo(todo: Localtodo): Observable<Localtodo> {
    
    return this.http.put<Localtodo>(`api/ToDo/${todo.id}`, todo);

  }

}
