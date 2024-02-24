using Microsoft.EntityFrameworkCore.Migrations.Operations;
using Project.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project.DAL.Dtos
{
    public class CreateUserDto
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
    public class UpdateUserDto : CreateUserDto
    {
        public Guid Id{ get; set; }
    }
    public class GetUserDto : UpdateUserDto { }
    
}
