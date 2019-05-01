using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToDoList.Controllers;
using ToDoList.Models;

namespace ToDoList.Services
{

    public class ToDoService : ITodoService
    {

        

        private TodoContext _context;
        public ToDoService(TodoContext context)
        {


            _context = context;

            



        }
        public void CreateTodo(Todo todo)
        {
            _context.Todos.Add(todo);
            _context.SaveChanges();

        }

        public IEnumerable<Todo> SelectAll()
        {
            return _context.Todos.ToList();
        }

        public Todo SelectTodo(int id)
        {
            return _context.Todos.Where(T => T.Id == id).FirstOrDefault();
        }

        public void DeleteTodo(int Id)
        {
            var ItemToDelete = SelectTodo(Id);
            if (ItemToDelete != null)
            {
                _context.Todos.Remove(ItemToDelete);
                _context.SaveChanges();
            }
            
        }

        public void UpdateTodo(int id, Todo todo)
        {
            var ItemToUpdate = SelectTodo(id);
            
            ItemToUpdate.Name = todo.Name;
            ItemToUpdate.DueDate = todo.DueDate;
            ItemToUpdate.Tags = todo.Tags;
            ItemToUpdate.State = todo.State;


            _context.SaveChanges();
        }

        
    }
}
