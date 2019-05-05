using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using ToDoList.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ToDoList.Controllers
{
    [Route("api/[controller]")]
    public class LoginController : Controller
    {
        private UserManager<TodoUser> _userManager;
        private SignInManager<TodoUser> _signInManager;

        public LoginController(SignInManager<TodoUser> signinManager, UserManager<TodoUser> userManager)
        {
            this._signInManager = signinManager;
            this._userManager = userManager;
        }

        // GET: api/<controller>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        [HttpPost]
        public async Task <IActionResult> PostAsync([FromBody]TodoUserLogin loginCreds)
        {
           var result = await _userManager.CreateAsync(new TodoUser()
            {
                UserName = loginCreds.username
            }, loginCreds.password);
            return Ok();

        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
