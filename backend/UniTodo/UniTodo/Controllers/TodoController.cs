using System.Net;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UniTodo.Entities;

namespace UniTodo.Controllers
{
    public class TodoController : Controller
    {
        private readonly DBContext DBContext;

        public TodoController(DBContext DBContext)
        {
            this.DBContext = DBContext;
        }

        [HttpGet("todo")]
        public async Task<ActionResult<List<TodoDTO>>> Get()
        {
            var List = await DBContext.TodoEntity.Select(
                s => new TodoDTO
                {
                    Id = s.Id,
                    Name = s.Name,
                    Done = s.Done,
                    CreatedAt = s.CreatedAt,
                    UpdatedAt = s.UpdatedAt,
                    DeletedAt = s.DeletedAt,
                }
            ).ToListAsync();

            if (List.Count < 0)
            {
                return NotFound();
            }
            else
            {
                return List;
            }
        }

        [HttpPost("todo")]
        public async Task<ActionResult<TodoEntity>> InsertTodo([FromBody] TodoDTO todo)
        {
            var entity = new TodoEntity()
            {
                Name = todo.Name,
                Done = todo.Done,
                CreatedAt = todo.CreatedAt,
                UpdatedAt = todo.UpdatedAt,
            };

            DBContext.TodoEntity.Add(entity);
            await DBContext.SaveChangesAsync();

            return entity;
        }

        [HttpPatch("todo")]
        public async Task<HttpStatusCode> UpdateTodo([FromBody] TodoDTO todo)
        {
            var entity = await DBContext.TodoEntity.FirstOrDefaultAsync(s => s.Id == todo.Id);
            if (entity != null)
            {
                entity.Done = todo.Done;
                entity.UpdatedAt = todo.UpdatedAt;

                await DBContext.SaveChangesAsync();

                return HttpStatusCode.Created;
            }
            else
            {
                return HttpStatusCode.NotFound;
            }
            
        }

        [HttpDelete("todo/{id}")]
        public async Task<HttpStatusCode> DeleteTodo(int Id)
        {
            var entity = await DBContext.TodoEntity.FirstOrDefaultAsync(s => s.Id == Id);
            if (entity != null)
            {
                DBContext.TodoEntity.Attach(entity);
                DBContext.TodoEntity.Remove(entity);
                await DBContext.SaveChangesAsync();
                return HttpStatusCode.OK;
            }
            else
            {
                return HttpStatusCode.NotFound;
            }
            
        }
    }
}

