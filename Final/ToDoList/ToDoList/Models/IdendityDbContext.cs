using Microsoft.EntityFrameworkCore;

namespace ToDoList.Models
{
    public class IdendityDbContext<T>
    {
        private DbContextOptions<TodoContext> options;

        public IdendityDbContext(DbContextOptions<TodoContext> options)
        {
            this.options = options;
        }
    }
}