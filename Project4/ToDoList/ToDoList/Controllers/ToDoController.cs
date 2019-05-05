using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ToDoList.Models;
using ToDoList.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ToDoList.Controllers

{
    [Authorize]
    [Route("api/[controller]")]
    public class ToDoController : Controller
    {

        
        private ITodoService _ToDoService;
        public ToDoController(ITodoService ToDoService)
        {
            _ToDoService = ToDoService; 
        }


       

        // GET: api/<controller>
        [HttpGet]
        public IActionResult Get()
        {
            var Todos = _ToDoService.SelectAll();
            return Ok(Todos);
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var todo = _ToDoService.SelectTodo(id);
           if(todo != null)
            {
                return Ok(todo);
            }
            return NotFound();
        }

        // POST api/<controller>
        [HttpPost]
        public void Post([FromBody]Todo value)
        {
            _ToDoService.CreateTodo(value); 

        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]Todo value)
        {
            _ToDoService.UpdateTodo(id, value);
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _ToDoService.DeleteTodo(id);
        }
    }
}
