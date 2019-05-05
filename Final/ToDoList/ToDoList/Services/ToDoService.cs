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
        public void CreateTodo(Todo todo, string userName)
        {
            todo.UserName = userName;
            _context.Todos.Add(todo);
            _context.SaveChanges();

        }

        public IEnumerable<Todo> SelectAll(string userName)
        {
            return _context.Todos.Where(ch => ch.UserName == userName).ToList();
        }

        public Todo SelectTodo(int id, string userName)
        {
            return _context.Todos.Where(T => T.Id == id).Where(ch => ch.UserName == userName).FirstOrDefault();
        }

        public void DeleteTodo(int Id, string userName)
        {
            var ItemToDelete = SelectTodo(Id , userName);
            if (ItemToDelete != null)
            {
                if (ItemToDelete.UserName != userName)
                {
                    throw new Exception();
                }
                _context.Todos.Remove(ItemToDelete);
                _context.SaveChanges();
            }
            
        }

        public void UpdateTodo(int id, Todo todo, string userName)
        {
            var ItemToUpdate = SelectTodo(id, userName);
            
            if(ItemToUpdate.UserName !=userName)
            {
                throw new Exception();
            }
            ItemToUpdate.Name = todo.Name;
            ItemToUpdate.DueDate = todo.DueDate;
            ItemToUpdate.Tags = todo.Tags;
            ItemToUpdate.State = todo.State;


            _context.SaveChanges();
        }

        
    }
}
