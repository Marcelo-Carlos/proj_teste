using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TodoApi.Models
{
    public class FaleConoscoContext : DbContext
    {
        public FaleConoscoContext(DbContextOptions<FaleConoscoContext> options) : base(options)
        {

        }

        public DbSet<FaleConosco> TodoItems { get; set; }
    }
}
