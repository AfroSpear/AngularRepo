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
        void CreateTodo(Todo todo, string userName);
         IEnumerable<Todo> SelectAll(string userName) ;
        Todo SelectTodo(int Id, string userName);
        void DeleteTodo(int Id, string userName);
        void UpdateTodo(int Id, Todo todo, string userName);

        
    }
}
