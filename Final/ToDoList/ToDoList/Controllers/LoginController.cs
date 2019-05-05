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

       

      
        // POST api/<controller>
        [HttpPost("create")]
        public async Task <IActionResult> PostAsync([FromBody]TodoUserLogin loginCreds)
        {
           var result = await _userManager.CreateAsync(new TodoUser()
            {
                UserName = loginCreds.username
            }, loginCreds.password);
            if(result.Succeeded)
            {
                return Ok();
            } else
            {
                return BadRequest();
            }
            

        }

        
        [HttpPost()]
        public async Task<IActionResult> AuthenticateUserAsync([FromBody]TodoUserLogin loginCreds)
        {
            var result = await _signInManager.PasswordSignInAsync(loginCreds.username, loginCreds.password, true, false );
            
            return Ok();
        }

        
    }
}
