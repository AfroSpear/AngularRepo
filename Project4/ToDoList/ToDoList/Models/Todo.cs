using System;
using System.Collections.Generic;

namespace ToDoList.Models
{
    public class Todo
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime DueDate { get; set; }

        public string Tags { get; set; }
        public string State { get; set; }

    }
}