using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata.Ecma335;
using System.Text;
using System.Threading.Tasks;

namespace Project.DAL.Models
{
    public class User
    {
        public Guid Id{ get; set; }
        public string FirstName{ get; set; }
        public string LastName { get; set; }
        public string Email{ get; set; }
        public string Password { get; set; }
    }
    public class LoginUser
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
    public class TokenUser
    {
        public string Token { get; set; }
    }
}
