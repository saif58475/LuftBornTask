using Project.BL.Repository;
using Project.BL.Response;
using Project.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project.BL.UserRepository
{
    public interface IUserRepository : IGenericRepository<User>
    {
        Task<Response<TokenUser>> Login(LoginUser User);
        string GenerateTokenString(LoginUser User);
    }
}
