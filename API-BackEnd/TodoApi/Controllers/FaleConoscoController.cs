using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TodoApi.Models;

namespace TodoApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FaleConoscoController : ControllerBase
    {
        private readonly FaleConoscoContext _context;

        public FaleConoscoController(FaleConoscoContext context)
        {
            _context = context;
        }

        // GET: api/FaleConosco
        [EnableCors]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<FaleConosco>>> GetTodoItems()
        {
            return await _context.TodoItems.ToListAsync();
        }

        // GET: api/FaleConosco/5
        [EnableCors]
        [HttpGet("{id}")]
        public async Task<ActionResult<FaleConosco>> GetFaleConosco(int id)
        {
            var faleConosco = await _context.TodoItems.FindAsync(id);

            if (faleConosco == null)
            {
                return NotFound();
            }

            return faleConosco;
        }

        // PUT: api/FaleConosco/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [EnableCors]
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFaleConosco(int id, FaleConosco faleConosco)
        {
            if (id != faleConosco.Id)
            {
                return BadRequest();
            }

            _context.Entry(faleConosco).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FaleConoscoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/FaleConosco
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [EnableCors]
        [HttpPost]
        public async Task<ActionResult<FaleConosco>> PostFaleConosco(FaleConosco faleConosco)
        {
            _context.TodoItems.Add(faleConosco);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFaleConosco", new { id = faleConosco.Id }, faleConosco);
        }

        // DELETE: api/FaleConosco/5
        [EnableCors]
        [HttpDelete("{id}")]
        public async Task<ActionResult<FaleConosco>> DeleteFaleConosco(int id)
        {
            var faleConosco = await _context.TodoItems.FindAsync(id);
            if (faleConosco == null)
            {
                return NotFound();
            }

            _context.TodoItems.Remove(faleConosco);
            await _context.SaveChangesAsync();

            return faleConosco;
        }

        private bool FaleConoscoExists(int id)
        {
            return _context.TodoItems.Any(e => e.Id == id);
        }
    }
}
