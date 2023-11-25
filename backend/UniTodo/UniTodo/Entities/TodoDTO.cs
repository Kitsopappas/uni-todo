using System;
namespace UniTodo.Entities
{
	public class TodoDTO
	{
        public int Id { get; set; }
        public required string Name { get; set; }
        public required bool Done { get; set; }
        public required DateTime CreatedAt { get; set; }
        public required DateTime UpdatedAt { get; set; }
        public DateTime? DeletedAt { get; set; }
    }
}

