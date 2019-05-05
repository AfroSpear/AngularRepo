using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ToDoList.Models
{
    public class TodoContext : IdentityDbContext<TodoUser>
    {
        public TodoContext(DbContextOptions<TodoContext> options) : base(options)
            {
             
            Database.EnsureCreated();

            }

        public DbSet<Todo> Todos { get; set; }
        public DbSet<Tag> Tags { get; set; }
        
    }
}
