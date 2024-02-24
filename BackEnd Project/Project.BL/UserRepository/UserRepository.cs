using AutoMapper;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Project.BL.Repository;
using Project.BL.Response;
using Project.BL.UnitOfWork;
using Project.DAL.AppDBContext;
using Project.DAL.Dtos;
using Project.DAL.Models;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Project.BL.UserRepository
{
    public class UserrRepository : IUserRepository
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IConfiguration _config;
        private readonly IGenericRepository<User> _UserRepository;
        public UserrRepository(IUnitOfWork unitOfWork, IConfiguration config)
        {
            _unitOfWork = unitOfWork;
            _config = config;
            _UserRepository = _unitOfWork.GetRepository<User>();
        }

        #region User Implementation 
        public async Task<Response<User>> Create(User entity)
        {
            return await _UserRepository.Create(entity);
        }

        public async Task<Response<User>> Delete(Guid id)
        {
            return await _UserRepository.Delete(id);
        }

        public async Task<Response<List<User>>> GetAll()
        {
            return await _UserRepository.GetAll();
        }

        public async Task<Response<User>> GetById(Guid id)
        {
            return await _UserRepository.GetById(id);
        }

        public async Task<Response<User>> Update(User entity)
        {
            return await _UserRepository.Update(entity);
        }
        #endregion

        #region Login & Token
        public async Task<Response<TokenUser>> Login(LoginUser user)
        {
            return new Response<TokenUser>() { Data = new TokenUser { Token = this.GenerateTokenString(user) } };
        }
        //this is the method that generates the token 
        public string GenerateTokenString(LoginUser user)
        {
            IEnumerable<System.Security.Claims.Claim> claims = new List<Claim>
            {
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(ClaimTypes.Role, "Admin")
            };
            SymmetricSecurityKey securitykey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config.GetSection("Jwt:Key").Value));
            SigningCredentials signingCred = new SigningCredentials(securitykey, SecurityAlgorithms.HmacSha512);
            JwtSecurityToken securityToken = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.Now.AddDays(1),
                issuer: _config.GetSection("Jwt:Issuer").Value,
                audience: _config.GetSection("Jwt:Issuer").Value,
                signingCredentials: signingCred);
            string tokenString = new JwtSecurityTokenHandler().WriteToken(securityToken);

            return tokenString;
        }
        #endregion
    }
}
