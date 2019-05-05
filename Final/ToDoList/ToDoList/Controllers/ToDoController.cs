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
            var userName = this.User.Identity.Name;
            var Todos = _ToDoService.SelectAll(userName);
            return Ok(Todos);
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var userName = this.User.Identity.Name;
            var todo = _ToDoService.SelectTodo(id, userName);
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
            var userName = this.User.Identity.Name;
            _ToDoService.CreateTodo(value, userName); 

        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Todo value)
        {
            try
            {
                var userName = this.User.Identity.Name;
                _ToDoService.UpdateTodo(id, value, userName);
                return Ok();
            }catch(Exception)
            {
                return Unauthorized();
            }
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                var userName = this.User.Identity.Name;

                _ToDoService.DeleteTodo(id, userName);
                return Ok();
            } catch(Exception e)
            {
                return Unauthorized();
            }
        }
    }
}
