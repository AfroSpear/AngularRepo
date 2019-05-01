using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToDoList.Controllers;
using ToDoList.Models;

namespace ToDoList.Services
{
   public interface ITodoService
    {
        void CreateTodo(Todo todo);
         IEnumerable<Todo> SelectAll() ;
        Todo SelectTodo(int Id);
        void DeleteTodo(int Id);
        void UpdateTodo(int Id, Todo todo);

        
    }
}
